# Generated by Django 3.0.2 on 2020-05-27 01:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TodoItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_title', models.CharField(max_length=200)),
                ('item_description', models.TextField(blank=True)),
                ('completed', models.BooleanField(default=False)),
                ('due_date', models.DateField(null=True)),
                ('due_time', models.TimeField(null=True)),
            ],
        ),
    ]