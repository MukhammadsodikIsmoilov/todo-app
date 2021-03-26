from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer


@api_view(['GET'])
def APIOverview(request):
    api_urls = {
        'Todo List': 'api/task-list/'
    }
    return Response(api_urls)


class TodoListView(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoView(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class CreateTodoView(generics.CreateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class UpdateTodoView(generics.UpdateAPIView):
    queryset = Todo.objects.all()
    lookup_field = 'id'
    serializer_class = TodoSerializer


class DeleteTodoView(generics.DestroyAPIView):
    queryset = Todo.objects.all()
    lookup_field = 'id'
    serializer_class = TodoSerializer





