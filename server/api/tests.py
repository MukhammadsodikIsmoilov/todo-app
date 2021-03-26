from django.test import TestCase
from .models import Todo


class TodoModelTest(TestCase):
    @classmethod
    def setupTestData(cls):
        Todo.objects.create(title="Make http request")

    def test_title_content(self):
        todo = Todo.objects.get(id=1)
        expected_object_name = f'{todo.title}'
        self.assertEqual(expected_object_name, 'Make http request')
