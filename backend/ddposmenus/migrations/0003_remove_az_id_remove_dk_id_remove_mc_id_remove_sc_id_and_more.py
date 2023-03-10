# Generated by Django 4.1.3 on 2022-11-07 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ddposmenus', '0002_alter_az_description_alter_dk_description_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='az',
            name='id',
        ),
        migrations.RemoveField(
            model_name='dk',
            name='id',
        ),
        migrations.RemoveField(
            model_name='mc',
            name='id',
        ),
        migrations.RemoveField(
            model_name='sc',
            name='id',
        ),
        migrations.RemoveField(
            model_name='st',
            name='id',
        ),
        migrations.AddField(
            model_name='az',
            name='menu_id',
            field=models.IntegerField(default=101, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='dk',
            name='menu_id',
            field=models.IntegerField(default=102, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='mc',
            name='menu_id',
            field=models.IntegerField(default=103, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='sc',
            name='menu_id',
            field=models.IntegerField(default=104, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='st',
            name='menu_id',
            field=models.IntegerField(default=105, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
