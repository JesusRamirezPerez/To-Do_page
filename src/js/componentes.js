// 
// Crea en el HTML el to-do se recrea el codigo Html
// 

import { Todo } from "../classes";
import {todoList} from '../index';

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const inputTxt = document.querySelector(".new-todo");
const btnBorrar = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");
const ancorFiltros = document.querySelectorAll('.filtro');


// Funciones
export const crearTodoHtml = (todo) => {

  const htmlTodo = `
  <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
  <div class="view">
    <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
    <label>${ todo.tarea }</label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
  </li>`

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);    // Solo aagrega el primer hijo del div

  return div.firstElementChild;

}

// Eventos 
inputTxt.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && inputTxt.value.length > 0) {
    console.log(inputTxt.value); 
    const nuevoTodo = new Todo(inputTxt.value);
    todoList.nuevoTodo(nuevoTodo);
    console.log(todoList); 
    crearTodoHtml(nuevoTodo);
    inputTxt.value = '';
  }
});


divTodoList.addEventListener('click', (event) =>{
  const nombreElemento = event.target.localName;        // input,   labael,    buttom
  const todoElemto = event.target.parentElement.parentElement;
  const todoId = todoElemto.getAttribute('data-id');

  if (nombreElemento.includes('input')){
    todoList.marcarCompletado(todoId);
    todoElemto.classList.toggle('completed');
  } else if (nombreElemento.includes('button')){
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemto);
  }

  console.log(todoList); 
});


btnBorrar.addEventListener('click', (event)=>{
  todoList.eliminarCompletados();
  for(let i = divTodoList.children.length-1; i >= 0; i--){
    const elemento = divTodoList.children[i];
    if (elemento.classList.contains('completed')){
      divTodoList.removeChild(elemento);
    }
  }
  console.log(todoList);
});


ulFiltros.addEventListener('click', (event) => {
  const filtro = event.target.text; 
  if(!filtro) {return;}

  console.log(ancorFiltros); 
  ancorFiltros.forEach ( elem => elem.classList.remove('selected'));
  console.log(ancorFiltros); 
  event.target.classList.add('selected');

  for (const elemento of divTodoList.children){
    elemento.classList.remove('hidden');
    const completado = elemento.classList.contains('completed');

    switch (filtro) {
      case 'Pendientes':
        if(completado){
          elemento.classList.add('hidden');
        }
      break;

      case 'Completados':
        if(!completado){
          elemento.classList.add('hidden');
        }
      break;
    }
  }
});