import TodoItem from './TodoItem';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void; // Функция для изменения статуса завершенности
  onDelete: (id: number) => void; // Функция для удаления задачи
}

export default function TodoList({
  todos,
  onCompletedChange,
  onDelete,
}: TodoListProps) {
  const todoSorted = [...todos].sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id; // Сортировка по id, если статус завершенности одинаков
    }
    return a.completed ? 1 : -1; // Сортировка: незавершенные задачи первыми
  });

  return (
    <>
      <div className="space-y-2">
        {todoSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete} // Передаем функцию из пропсов
            onCompletedChange={onCompletedChange} // Передаем функцию из пропсов
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-sm text-gray-500">
          No todos yet. Add a new one above
        </p>
      )}
    </>
  );
}
