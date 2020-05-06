from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('login', views.login),
    path('logout', views.logout),
    path('registration', views.registration),
    path('dashboard', views.dashboard),
    path('trips/<int:trip_id>', views.trips),
    path('trips/new', views.new),
    path('add_new', views.add_new),
    path('trips/edit/<int:trip_id>', views.edit),
    path('edit_trip/<int:trip_id>', views.edit_trip),
    path('trips/remove/<int:trip_id>', views.remove),
]
