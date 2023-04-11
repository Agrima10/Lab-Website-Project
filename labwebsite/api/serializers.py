from rest_framework import serializers
from django.contrib.auth.models import User
from .models import LabMember, Professor, Award, Publication, Project

class LabMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabMember
        fields = '__all__'

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__'

class AwardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Award
        fields = '__all__'

class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

