# Generated by Django 4.2 on 2023-04-18 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_labmember_academicprogram'),
    ]

    operations = [
        migrations.AddField(
            model_name='labmember',
            name='achievements',
            field=models.TextField(default='dsd'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='labmember',
            name='contact',
            field=models.TextField(default='contct'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='labmember',
            name='education',
            field=models.TextField(default='sd'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='labmember',
            name='research_interest',
            field=models.TextField(default='sfdfs'),
            preserve_default=False,
        ),
    ]
