# Generated by Django 4.2 on 2023-04-18 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_labmember_name_professor_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='award',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='./images'),
        ),
        migrations.AlterField(
            model_name='labmember',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='./images'),
        ),
        migrations.AlterField(
            model_name='professor',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='./images'),
        ),
    ]
