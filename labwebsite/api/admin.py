from django.contrib import admin
from .models import LabMember, Professor, Award
from .models import Publication
from .models import Project

admin.site.register(LabMember)
admin.site.register(Professor)
admin.site.register(Award)
admin.site.register(Publication)
admin.site.register(Project)
# Register your models here.

