import './styles.css';

import {Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

/**La función de flecha se puede optimizar:
Lo anterior debido a que el parametro que se esta enviando a la función crearTodoHtml 
Son iguales, en caso que tenga dos parametros se debe definir la funcion flecha. */ 

//todoList.todos.forEach( todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

console.log('todo', todoList.todos);



