from django.contrib import admin
from .models import LabMember, Professor, Award, Carousel, News
from .models import Publication
from .models import Project

class Labadmin(admin.AdminSite):
    site_header='Lab Admin'
    site_title='Lab Admin'

lab_site=Labadmin(name='labadmin')

lab_site.register(LabMember)
lab_site.register(Professor)
lab_site.register(Award)
lab_site.register(Publication)
lab_site.register(Project)
lab_site.register(Carousel)
lab_site.register(News)

admin.site.register(LabMember)
admin.site.register(Professor)
admin.site.register(Award)
admin.site.register(Publication)
admin.site.register(Project)
admin.site.register(Carousel)
admin.site.register(News)


# Register your models here.

