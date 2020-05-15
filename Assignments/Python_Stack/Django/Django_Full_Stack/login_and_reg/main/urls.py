from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('success', views.success_page),
    path('register', views.register),
    path('login', views.login),
    path('log_out', views.log_out)

]
