# Generated by Django 2.1.2 on 2018-10-24 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('planner', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dummy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField(default=2000)),
                ('semester', models.IntegerField(choices=[(1, 'Sem 1'), (2, 'Sem 2')])),
                ('week_number', models.IntegerField(choices=[(1, 'Week 1'), (2, 'Week 2'), (3, 'Week 3'), (4, 'Week 4'), (5, 'Week 5'), (6, 'Week 6'), (7, 'Week 7'), (8, 'Week 8'), (9, 'Week 9'), (10, 'Week 10'), (11, 'Week 11'), (12, 'Week 12'), (13, 'Week 13'), (14, 'Week 14'), (15, 'Week 15'), (16, 'Week 16'), (17, 'Week 17')], default=1)),
                ('day_number', models.IntegerField(choices=[(1, 'Monday'), (2, 'Tuesday'), (3, 'Wednesday'), (4, 'Thursday'), (5, 'Friday'), (6, 'Saturday'), (7, 'Sunday')], default=1)),
                ('title', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
            ],
        ),
    ]