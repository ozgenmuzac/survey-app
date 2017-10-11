from django import forms


class LoginForm(forms.Form):
    sicil = forms.IntegerField()
