from rest_framework.serializers import ModelSerializer
from.models import Registration
class Regserializer(ModelSerializer):
    class Meta:
        model=Registration
        fields='__all__'