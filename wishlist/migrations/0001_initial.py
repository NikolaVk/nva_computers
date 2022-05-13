# Generated by Django 3.2 on 2022-05-13 10:09

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='wishlist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wishlist', models.ManyToManyField(blank=True, default=None, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
