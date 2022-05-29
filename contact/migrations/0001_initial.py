# Generated by Django 3.2 on 2022-05-15 18:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0002_alter_category_options'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('mail', models.TextField()),
                ('title', models.TextField(blank=True, max_length=250, null=True)),
                ('description', models.TextField()),
                ('created_on', models.DateTimeField(auto_now=True)),
                ('status', models.BooleanField(default=False)),
                ('product', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='products.product')),
            ],
        ),
    ]