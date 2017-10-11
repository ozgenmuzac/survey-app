from django.contrib.auth import login
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.views.generic.edit import FormView
from rest_framework.authtoken.models import Token

from survey.home.forms import LoginForm
from .models import SurveyUser


class LoginView(FormView):
    template_name = 'home/login.html'
    form_class = LoginForm
    success_url = '/'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated():
            return redirect('survey')
        return super().dispatch(request, *args, **kwargs)

    def _create_user(self, sicil_no):
        user, created = User.objects.get_or_create(username=sicil_no)
        if created:
            user.set_unusable_password()
            user.save()
        return user

    def _authenticate_user(self, sicil_no, token):
        try:
            SurveyUser.objects.get(sicil_no=sicil_no, survey_token=token)
            user = self._create_user(sicil_no)
            token, _ = Token.objects.get_or_create(user=user)
            if token:
                login(self.request, user)
        except SurveyUser.DoesNotExist:
            print("Does not exists!!")

    def form_valid(self, form):
        sicil_no = int(form.data['sicil'])
        token = self.request.GET.get('token')
        if token and sicil_no:
            self._authenticate_user(sicil_no, token)
        return super().form_valid(form)
