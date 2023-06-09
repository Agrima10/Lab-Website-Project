from django.db import models
from django.contrib.auth.models import User

class LabMember(models.Model):
    Name = models.CharField(max_length=100,default='name')
    PROGRAM_CHOICES = [
        ('PHD', 'PHD'),
        ('UG', 'UG'),
        ('PG', 'PG'),
        ('Alumni', 'Alumni'),
        ('Professor', 'Professor')
    ]
    AcademicProgram = models.CharField(max_length=50, choices=PROGRAM_CHOICES)
    Department= models.CharField(max_length=50)
    bio = models.TextField()
    education=models.TextField()
    research_interest=models.TextField()
    achievements=models.TextField()
    contact=models.TextField()
    email=models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.Name
    
class Professor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    Name = models.CharField(max_length=100,default='name')
    Position= models.TextField()
    Department= models.TextField()
    bio = models.TextField()
    research_interests = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.user.username
    
class Carousel(models.Model):
    id=models.IntegerField(primary_key=True,default=1)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __int__(self):
        return self.id
    
class News(models.Model):
    id=models.IntegerField(primary_key=True,default=1)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    def __int__(self):
        return self.id
    
class Award(models.Model):
    user = models.CharField(max_length=200)
    # Name = models.CharField(max_length=100)
    AwardName = models.TextField()
    date_started = models.DateField()
    Department= models.TextField()
    Issuing_Organization= models.TextField()
    Remark = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.AwardName
    
class Publication(models.Model):
    title = models.CharField(max_length=200)
    authors = models.CharField(max_length=200)
    Remark = models.TextField()
    pub_date = models.DateField()
    link = models.URLField()
    members = models.ManyToManyField(LabMember)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.title
    
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    members = models.ManyToManyField(LabMember)
    image = models.ImageField(upload_to='images/', blank=True, null=True)

    def __str__(self):
        return self.title
    
     
