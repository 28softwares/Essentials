from django.shortcuts import render, redirect
#lets add some imports!
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages

# Create your views here.
def home(request):
    return render(request, 'users/home.html')

def loginUser(request):
    if request.user.is_authenticated:
        return redirect('home')
    if request.method == "POST":
        email = request.POST["email"]
        password = request.POST["password"]

        try:
            user = CustomUser.objects.get(email=email)
        except:
            messages.error(request, 'Email doesnot exists!')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return redirect(request.GET['next'] if 'next' in request.GET else 'home')

        else:
            messages.error(request, 'Username of Password is incorrect!')


    return render(request, 'users/login.html')


def logoutUser(request):
    logout(request)
    messages.error(request, 'Logged Out!')
    return redirect('login')

