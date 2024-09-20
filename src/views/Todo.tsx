import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, ITodo } from '../services/store';
import { RootState } from '../services/store'; 

const Todo = ({ todo }: { todo: ITodo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{todo.name}</span>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => dispatch({ type: 'todo/toggleTodo', payload: todo.id })}
      />
      <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
    </li>
  );
};

const TodoForm = () => {
  return (
    <>
    </>
  );
};

function TodoList() {
  const todos = useSelector((state: RootState) => state.todo); 

  return (
    <div>
      <h1>Tâches restantes: {todos.filter(t => !t.done).length}</h1>
      <ul>
        {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      </ul>
      <TodoForm />
    </div>
  );
}

export { Todo, TodoForm, TodoList };
