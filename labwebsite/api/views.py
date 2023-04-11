from django.shortcuts import render
from .models import LabMember, Professor, Award, Publication, Project
from .serializers import LabMemberSerializer, ProfessorSerializer, AwardSerializer, PublicationSerializer, ProjectSerializer
from django.http import JsonResponse
from rest_framework import viewsets


class LabMembersViewSet(viewsets.ModelViewSet):
    queryset=LabMember.objects.all()
    serializer_class=LabMemberSerializer


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

