from django.urls import path
from . import views
urlpatterns = [
    path('', views.shows),
    path('shows/new', views.newshow_page),
    path('shows/info', views.create_show),
    path('shows/<int:forurl>', views.display_show),
    path('shows/<int:forurl>/edit', views.edit_show),
    path('shows/<int:forurl>/update', views.update_show),
    path('shows/<int:forurl>/delete', views.delete_show)
]