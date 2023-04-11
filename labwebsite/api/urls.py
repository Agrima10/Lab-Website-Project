from django.urls import path
# from .views import Index 
from .views import LabMember_list,ProfessorMember_list,Award_list,Publication_list,Project_list

urlpatterns = [
    # path('', Index),
    path('members/',LabMember_list),
    path('members/',ProfessorMember_list),
    path('members/',Award_list),
    path('members/',Publication_list),
    path('members/',Project_list),
]
