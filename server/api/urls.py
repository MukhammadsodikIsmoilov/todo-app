from django.urls import path
from .views import (
    APIOverview,
    TodoListView,
    TodoView,
    CreateTodoView,
    UpdateTodoView,
    DeleteTodoView,
)


urlpatterns = [
    path('', APIOverview, name="todo-overview"),
    path('todos/', TodoListView.as_view(), name="todos"),
    path('todos/<int:pk>', TodoView.as_view(), name="todo"),
    path('todos/<int:id>/update/', UpdateTodoView.as_view(), name="update-todo"),
    path('todos/<int:id>/delete/', DeleteTodoView.as_view(), name="delete-todo"),
    path('todos/create/', CreateTodoView.as_view(), name="create-todo"),
]