from rest_framework import viewsets

from .serializers import QuestionSerializer
from ..models import Question


class QuestionViewset(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def list(self, request, *args, **kwargs):
        print('user: ', self.request.user)
        return super().list(request, *args, **kwargs)
