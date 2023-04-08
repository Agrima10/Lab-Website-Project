from django.contrib import admin
from .models import LabMember, Professor, Award

admin.site.register(LabMember)
admin.site.register(Professor)
admin.site.register(Award)