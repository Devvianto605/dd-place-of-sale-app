# Generated by Django 4.1.3 on 2022-11-29 10:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ddposmenus', '0013_alter_menu_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='img',
            field=models.ImageField(upload_to='media/images/'),
        ),
    ]
