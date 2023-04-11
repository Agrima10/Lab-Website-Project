from django.urls import path, include
from .views import LabMembersViewSet
from rest_framework.routers import DefaultRouter
# from .views import Lab_Member
# from .views import Professor_
# from .views import LabMember_list,ProfessorMember_list,Award_list,Publication_list,Project_list
router= DefaultRouter()
router.register('members',LabMembersViewSet, basename='members')
urlpatterns = [
    path('',include(router.urls)),
]
