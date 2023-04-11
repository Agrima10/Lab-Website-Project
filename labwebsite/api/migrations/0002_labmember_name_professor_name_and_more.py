# Generated by Django 4.1.3 on 2023-04-11 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='labmember',
            name='Name',
            field=models.CharField(default='name', max_length=100),
        ),
        migrations.AddField(
            model_name='professor',
            name='Name',
            field=models.CharField(default='name', max_length=100),
        ),
        migrations.AlterField(
            model_name='labmember',
            name='Department',
            field=models.CharField(max_length=50),
        ),
    ]
