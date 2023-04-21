from django.contrib import admin
from .models import LabMember, Professor, Award, Carousel
from .models import Publication
from .models import Project

admin.site.register(LabMember)
admin.site.register(Professor)
admin.site.register(Award)
admin.site.register(Publication)
admin.site.register(Project)
admin.site.register(Carousel)
# Register your models here.

