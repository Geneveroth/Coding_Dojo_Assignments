from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('books', views.books),
    path('add', views.add),
    path('update/<int:book_id>', views.update),
    path('update_book/<int:book_id>', views.update_book),
    path('view/<int:book_id>', views.view),

]   