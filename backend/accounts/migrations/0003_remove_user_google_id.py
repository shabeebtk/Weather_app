# Generated by Django 5.0.6 on 2024-05-11 06:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_user_google_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='google_id',
        ),
    ]