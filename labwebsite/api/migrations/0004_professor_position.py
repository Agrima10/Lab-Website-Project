# Generated by Django 4.2 on 2023-04-18 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_award_image_alter_labmember_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='professor',
            name='Position',
            field=models.TextField(default='Assistant Professor'),
            preserve_default=False,
        ),
    ]
