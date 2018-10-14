from django.contrib import admin

# Register your models here.
from .models import Meeting
from .models import AcademicSemester
from .models import EventDate

admin.site.register(Meeting)
admin.site.register(AcademicSemester)
admin.site.register(EventDate)
