import datetime

from django.db import models
from django.utils import timezone

# Create your models here.
class Question(models.Model):

    #What to return when str(obj) is called
    #str(obj) is called in django shell and django admin site
    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
        
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    


class Choice(models.Model):
    
    def __str__(self):
        return self.choice_text
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)