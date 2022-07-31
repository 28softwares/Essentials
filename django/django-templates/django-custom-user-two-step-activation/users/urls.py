from django.urls import path, include
from .views import home, loginUser, logoutUser
from django_registration.backends.activation.views import RegistrationView
from .forms import CustomRegistrationForm

urlpatterns = [
    path('', home, name='home'),
    path('accounts/login/', loginUser, name='login'),
    path('accounts/logout/', logoutUser, name='logout'),
    path('accounts/register/', RegistrationView.as_view(form_class=CustomRegistrationForm), name='register'),
    path('accounts/', include("django_registration.backends.activation.urls")),

]
