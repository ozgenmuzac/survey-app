from django.db import models
from django.contrib.auth.models import User


class SurveyUser(models.Model):
    user = models.ForeignKey(User, related_name='survey_users', null=True, blank=True)
    sicil_no = models.IntegerField(null=False, blank=False, default=-1)
    survey_token = models.CharField(max_length=256, null=False, blank=False)
    is_completed = models.BooleanField(default=False, null=False, blank=False)

    class Meta:
        unique_together = ('sicil_no', 'survey_token')
