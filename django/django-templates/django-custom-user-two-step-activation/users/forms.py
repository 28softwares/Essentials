from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser
from django_registration.forms import RegistrationForm



class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model =CustomUser
        fields = ['name', 'email' , 'password1', 'password2']
        labels = {
            
        }

    def __init__(self , *args, **kwargs):
        super(CustomUserCreationForm, self).__init__(*args, **kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class':'form-control'})


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = CustomUser
        fields = ('email','name')


class CustomRegistrationForm(RegistrationForm):
    class Meta(RegistrationForm.Meta):
        model = CustomUser
        fields = ['name', 'email']
    
    def __init__(self , *args, **kwargs):
        super(CustomRegistrationForm, self).__init__(*args, **kwargs)

        for name, field in self.fields.items():
            field.widget.attrs.update({'class':'form-control'})

