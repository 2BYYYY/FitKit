from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_protect
from .forms import ContactForm
import requests
import os


@csrf_protect
def landing_page(request):
    form = ContactForm()
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            # Send data to n8n webhook
            n8n_webhook_url = os.getenv("N8N_WEBHOOK_URL")
            try:
                response = requests.post(n8n_webhook_url, json=data, timeout=5)
                response.raise_for_status()
            except requests.RequestException as e:
                print(e)  # log error
            return redirect("landing_page")
    return render(request, "index.html", {"form": form})
