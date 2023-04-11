from django.shortcuts import render
from .models import LabMember, Professor, Award, Publication, Project
from .serializers import LabMemberSerializer, ProfessorSerializer, AwardSerializer, PublicationSerializer, ProjectSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class= UserSerializer


class LabMembersViewSet(viewsets.ModelViewSet):
    queryset=LabMember.objects.all()
    serializer_class=LabMemberSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)


class ProfessorViewSet(viewsets.ModelViewSet):
    queryset=Professor.objects.all()
    serializer_class=ProfessorSerializer


class AwardViewSet(viewsets.ModelViewSet):
    queryset=Award.objects.all()
    serializer_class=AwardSerializer


class PublicationViewSet(viewsets.ModelViewSet):
    queryset=Publication.objects.all()
    serializer_class=PublicationSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset=Project.objects.all()
    serializer_class=ProjectSerializer

