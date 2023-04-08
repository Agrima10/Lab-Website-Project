from rest_framework import serializers
from django.contrib.auth.models import User
from .models import LabMember, Professor, Award, Publication, Project
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class LabMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = LabMember
        fields = ['id', 'user', 'AcademicProgram', 'Department', 'bio', 'image']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        lab_member = LabMember.objects.create(user=user, **validated_data)
        return lab_member

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        user = instance.user
        user.username = user_data.get('username', user.username)
        user.email = user_data.get('email', user.email)
        user.save()
        instance.AcademicProgram = validated_data.get('AcademicProgram', instance.AcademicProgram)
        instance.Department = validated_data.get('Department', instance.Department)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance


class ProfessorSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Professor
        fields = ['id', 'user', 'Department', 'bio', 'research_interests', 'image']

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        professor = Professor.objects.create(user=user, **validated_data)
        return professor

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        user = instance.user
        user.username = user_data.get('username', user.username)
        user.email = user_data.get('email', user.email)
        user.save()
        instance.Department = validated_data.get('Department', instance.Department)
        instance.bio = validated_data.get('bio', instance.bio)
        instance.research_interests = validated_data.get('research_interests', instance.research_interests)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance
    
class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = ['id', 'user', 'AwardName', 'date_started', 'Department', 'Issuing_Organization', 'Remark', 'image']

class PublicationSerializer(serializers.ModelSerializer):
    members = LabMemberSerializer(many=True)

    class Meta:
        model = Publication
        fields = ['id', 'title', 'authors', 'Remark', 'pub_date', 'link', 'members']

    def create(self, validated_data):
        members_data = validated_data.pop('members')
        publication = Publication.objects.create(**validated_data)
        for member_data in members_data:
            member = LabMember.objects.get(pk=member_data['id'])
            publication.members.add(member)
        return publication

class ProjectSerializer(serializers.ModelSerializer):
    members = LabMemberSerializer(many=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'members']

    def create(self, validated_data):
        members_data = validated_data.pop('members')
        project = Project.objects.create(**validated_data)
        for member_data in members_data:
            member = LabMember.objects.get(pk=member_data['id'])
            project.members.add(member)
        return project