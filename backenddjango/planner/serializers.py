from rest_framework import serializers
from planner.models import Dummy

class DummySerializer(serializers.ModelSerializer):
    class Meta:
        model=Dummy
        fields = ('__all__')

class PlannerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Dummy
        fields = ('__all__')