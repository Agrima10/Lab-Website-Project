from rest_framework import serializers
from django.contrib.auth.models import User
from .models import LabMember, Professor, Award, Publication, Project, Carousel
from rest_framework.authtoken.views import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields=['id','username','password']

        extra_kwargs={'password':{
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user 

class LabMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabMember
        fields = '__all__'

class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
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

