from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('login', views.login),
    path('logout', views.logout),
    path('registration', views.registration),
    path('books', views.books),
    path('add_book', views.add_book),
    path('update_book/<int:book_id>', views.update_book_page),
    path('update_book/<int:book_id>/process', views.update_book),
    path('view_book/<int:book_id>', views.view_book_page)
]