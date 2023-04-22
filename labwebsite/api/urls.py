from django.urls import path, include
from django.contrib import admin
from .views import LabMembersViewSet, ProfessorViewSet, AwardViewSet, PublicationViewSet, ProjectViewSet, UserViewSet,CarouselViewSet, NewsViewSet
from rest_framework.routers import DefaultRouter
# from rest_framework.authtoken.views import
# from .views import Lab_Member
# from .views import Professor_
# from .views import LabMember_list,ProfessorMember_list,Award_list,Publication_list,Project_list

#registering models
router= DefaultRouter()
router.register('members',LabMembersViewSet, basename='members')
router.register('professor',ProfessorViewSet, basename='professor')
router.register('awards',AwardViewSet, basename='awards')
router.register('publications',PublicationViewSet, basename='publications')
router.register('projects',ProjectViewSet, basename='projects')
router.register('carousel',CarouselViewSet, basename='carousel')
router.register('news',NewsViewSet, basename='news')

#django users
router.register('users', UserViewSet, basename='users') 

#url paths
urlpatterns = [
    # path('',include()),
    path('api/',include(router.urls)),
]
