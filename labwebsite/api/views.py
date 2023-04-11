from django.shortcuts import render, HttpResponse
from .models import LabMember
from .serializers import LabMemberSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
# Create your views here.


def LabMember_list(request):
    if request.method == 'GET':
        LabMember=LabMember.objects.all()
        serializer=LabMemberSerializer(LabMember,many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method=='POST':
        data=JSONParser().parse(request)
        serializer=LabMemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)


