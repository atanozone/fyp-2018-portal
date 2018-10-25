from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from planner.models import Dummy
from planner.serializers import DummySerializer

@csrf_exempt
def planner_list(request):
    """
    List all event dates
    """
    if request.method == 'GET':
        dummy = Dummy.objects.all()
        serializer = DummySerializer(dummy, many=True)
        return JsonResponse(serializer.data, safe=False)

    return JsonResponse(serializer.errors, status=400)

