# Generated by Django 2.2.4 on 2020-04-16 02:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ninja',
            old_name='dojo_id',
            new_name='dojo',
        ),
    ]