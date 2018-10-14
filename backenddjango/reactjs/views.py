from django.shortcuts import render

# Create your views here.

#render() finds template/ directory
#redirect all request to appdirectory/template/frontendreact/index.html
def index(request):
    return render(request, 'index.html')