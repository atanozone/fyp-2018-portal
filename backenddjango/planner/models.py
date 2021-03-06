import datetime
import calendar

from django.db import models
from django.utils import timezone

# Create your models here.
class AcademicSemester(models.Model):
    def __str__(self):
        return "AY %s, Semester %d" % (self.year, self.semester)

    SEMESTERCHOICE = [
        (1,'Sem 1'),
        (2,'Sem 2')
    ]
    startdate = models.DateTimeField('date start')
    year = models.IntegerField(default= 2000)
    semester = models.IntegerField(choices=SEMESTERCHOICE)

class EventDate(models.Model):
    def __str__(self):
        return "%s, Week %s,  %s" % (self.academicsemester, self.week_number, calendar.day_abbr[self.day_number-1])

    WEEKCHOICE = [(i, 'Week '+ str(i)) for i in range(1,18)]
    DAYCHOICE = [(j, calendar.day_name[j-1]) for j in range(1,8)]

    academicsemester = models.ForeignKey(
        AcademicSemester, 
        on_delete=models.CASCADE,
        verbose_name = 'Academic Semester')
    week_number = models.IntegerField(choices = WEEKCHOICE,default = 1)
    day_number = models.IntegerField(choices = DAYCHOICE,default = 1)

class Meeting(models.Model):
    def __str__(self):
        return self.title
    EventDate = models.ForeignKey(
        EventDate, 
        on_delete=models.CASCADE, 
        primary_key=True
        )
    
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)

class Dummy(models.Model):
    def __str__(self):
        return "%s-%s, Week %s,  %s" % (self.year,self.semester,
         self.week_number, 
         calendar.day_abbr[self.day_number-1])

    WEEKCHOICE = [(i, 'Week '+ str(i)) for i in range(1,18)]
    DAYCHOICE = [(j, calendar.day_name[j-1]) for j in range(1,8)]
    SEMESTERCHOICE = [
        (1,'Sem 1'),
        (2,'Sem 2')
    ]
    year = models.IntegerField(default= 2018)
    semester = models.IntegerField(choices=SEMESTERCHOICE,default= 2)
    week_number = models.IntegerField(choices = WEEKCHOICE,default = 1)
    day_number = models.IntegerField(choices = DAYCHOICE,default = 1)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)