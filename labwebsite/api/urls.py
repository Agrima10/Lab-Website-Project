from django.urls import path
# from .views import Index 
from .views import LabMember_list

urlpatterns = [
    # path('', Index),
    path('members/',LabMember_list),
]
