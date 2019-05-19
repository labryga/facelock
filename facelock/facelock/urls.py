from django.conf.urls import url, include
from django.contrib import admin
from homepage.views import FacelockHomepage


urlpatterns = [
    url(r'', FacelockHomepage.as_view()),
    url(r'^admin/', admin.site.urls),
]
