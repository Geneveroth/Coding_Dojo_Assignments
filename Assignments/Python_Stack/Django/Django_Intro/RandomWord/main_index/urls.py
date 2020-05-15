from django.urls import path     

from . import views
urlpatterns = [
    path('', views.index),
    # path('random', views.draegg_view),
    path('process_random_word', views.process_random_word),
    path('random_word/reset', views.random_word_reset)
    # path('index', views.index),
]