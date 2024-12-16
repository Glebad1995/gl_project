import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import TodoSummary from './components/TodoSummary';
import useTodos from './hooks/useTodos';
function App() {
  const {
    todos,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
    addTodo,
  } = useTodos();
  return (
    <main className="h-screen py-10 space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center mb-4">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted} // Передаем функцию изменения статуса
          onDelete={deleteTodo} // Передаем функцию удаления
        />
      </div>
      <TodoSummary
        todos={todos}
        deleteAllCompleted={deleteAllCompletedTodos} // Передаем функцию удаления всех завершенных задач
      />
    </main>
  );
}

export default App;
