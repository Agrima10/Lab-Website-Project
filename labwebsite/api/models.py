from django.db import models
from django.contrib.auth.models import User

class LabMember(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    Name = models.CharField(max_length=100,default='name')
    PROGRAM_CHOICES = [
        ('PHD', 'PHD'),
        ('UG', 'UG'),
        ('PG', 'PG'),
        ('Alumni', 'Alumni'),
    ]
    AcademicProgram = models.CharField(max_length=50, choices=PROGRAM_CHOICES)
    Department= models.CharField(max_length=50)
    bio = models.TextField()
    image = models.ImageField(upload_to='labwebsite\images', blank=True, null=True)

    def __str__(self):
        return self.user.username
    
class Professor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    Name = models.CharField(max_length=100,default='name')
    Department= models.TextField()
    bio = models.TextField()
    research_interests = models.TextField()
    image = models.ImageField(upload_to='labwebsite\images', blank=True, null=True)

    def __str__(self):
        return self.user.username
    
class Award(models.Model):
    user = models.CharField(max_length=200)
    # Name = models.CharField(max_length=100)
    AwardName = models.TextField()
    date_started = models.DateField()
    Department= models.TextField()
    Issuing_Organization= models.TextField()
    Remark = models.TextField()
    image = models.ImageField(upload_to='./images', blank=True, null=True)

    def __str__(self):
        return self.AwardName
    
class Publication(models.Model):
    title = models.CharField(max_length=200)
    authors = models.CharField(max_length=200)
    Remark = models.TextField()
    pub_date = models.DateField()
    link = models.URLField()
    members = models.ManyToManyField(LabMember)

    def __str__(self):
        return self.title
    
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    members = models.ManyToManyField(LabMember)

    def __str__(self):
        return self.title
    
    

    
