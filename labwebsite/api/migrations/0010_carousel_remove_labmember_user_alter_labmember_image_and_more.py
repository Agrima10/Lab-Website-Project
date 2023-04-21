# Generated by Django 4.2 on 2023-04-19 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_award_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Carousel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
        migrations.RemoveField(
            model_name='labmember',
            name='user',
        ),
        migrations.AlterField(
            model_name='labmember',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='professor',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]