from django.shortcuts import render, HttpResponse
from .models import LabMember, Professor, Award, Publication, Project
from .serializers import LabMemberSerializer, ProfessorSerializer, AwardSerializer, PublicationSerializer, ProjectSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
# Create your views here.


def LabMember_list(request):
    if request.method == 'GET':
        Lab_Member=LabMember.objects.all()
        serializer=LabMemberSerializer(Lab_Member,many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method=='POST':
        data=JSONParser().parse(request)
        serializer=LabMemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            # return HttpResponseRed
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)
    
def ProfessorMember_list(request):
    if request.method == 'GET':
        Professor_=Professor.objects.all()
        serializer=ProfessorSerializer(Professor_,many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method=='POST':
        data=JSONParser().parse(request)
        serializer=ProfessorSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)
    
def Award_list(request):
    if request.method == 'GET':
        Award_=Award.objects.all()
        serializer=AwardSerializer(Award_,many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method=='POST':
        data=JSONParser().parse(request)
        serializer=AwardSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)
    
def Publication_list(request):
    if request.method == 'GET':
        Publication_=Publication.objects.all()
        serializer=PublicationSerializer(Publication_,many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method=='POST':
        data=JSONParser().parse(request)
        serializer=PublicationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)
    
def Project_list(request):
    if request.method == 'GET':
        project_=Project.objects.all()
        serializer=ProjectSerializer(project_,many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method=='POST':
        data=JSONParser().parse(request)
        serializer=ProjectSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)
    