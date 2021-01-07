import './styles.css';
import { crearTodoHtml } from './js/componentes.js';
import { Todo,TodoList } from './classes';

export const todoList = new TodoList(); 
todoList.todos.forEach(crearTodoHtml);
