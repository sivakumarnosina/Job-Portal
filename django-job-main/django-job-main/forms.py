from django import forms
from .models import Registration  # Import your Registration model
class RegistrationForm(forms.ModelForm):
    class Meta:
        model = Registration
        fields = ['username', 'email', 'password', 'confirm','usertype']
