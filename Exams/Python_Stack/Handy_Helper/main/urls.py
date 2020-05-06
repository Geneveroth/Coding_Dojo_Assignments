from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('registration', views.registration),
    path('login', views.login),
    path('logout', views.logout),
    path('dashboard', views.dashboard),
    path('remove/<int:job_id>', views.remove),
    path('update/<int:job_id>', views.update),
    path('update_job/<int:job_id>', views.update_job),
    path('view/<int:job_id>', views.view),
    path('add/<int:user_id>', views.add),
    path('add_job', views.add_job)
]   