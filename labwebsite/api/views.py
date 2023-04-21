from django.shortcuts import render
from .models import LabMember, Professor, Award, Publication, Project, Carousel
from .serializers import LabMemberSerializer, ProfessorSerializer, AwardSerializer, PublicationSerializer, ProjectSerializer, CarouselSerializer
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class= UserSerializer
    # permission_classes=[IsAuthenticated]
    # authentication_classes=(TokenAuthentication,)


class LabMembersViewSet(viewsets.ModelViewSet):
    queryset=LabMember.objects.all()
    serializer_class=LabMemberSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)


class ProfessorViewSet(viewsets.ModelViewSet):
    queryset=Professor.objects.all()
    serializer_class=ProfessorSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)

class CarouselViewSet(viewsets.ModelViewSet):
    queryset=Carousel.objects.all()
    serializer_class=CarouselSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)


class AwardViewSet(viewsets.ModelViewSet):
    queryset=Award.objects.all()
    serializer_class=AwardSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)


class PublicationViewSet(viewsets.ModelViewSet):
    queryset=Publication.objects.all()
    serializer_class=PublicationSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset=Project.objects.all()
    serializer_class=ProjectSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=(TokenAuthentication,)

