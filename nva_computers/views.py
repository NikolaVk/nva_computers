from django.shortcuts import render


def page_not_found_view(request, exception):
    context = {
        'navbar': False,
        'footer': False,
    }
    return render(request, '404.html', context, status=404)
