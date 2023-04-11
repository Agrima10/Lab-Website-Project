from django.shortcuts import render, HttpResponse
from .models import LabMember, Professor, Award, Publication, Project
from .serializers import LabMemberSerializer, ProfessorSerializer, AwardSerializer, PublicationSerializer, ProjectSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import APIView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import mixins
from rest_framework import viewsets

class LabMembersViewSet(viewsets.ModelViewSet):
    queryset=LabMember.objects.all()
    serializer_class=LabMemberSerializer

