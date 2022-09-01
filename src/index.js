// Importaciones de estilos
import './styles.css'

//Importaciones de archivos Js
// import {saludar} from './js/componentes.js'
import { Todo, TodoList} from'./classes'            // Importa el archivo principar de importaciones
import { crearTodoHtml } from './js/componentes';

// Cuerpo Js
export const todoList   = new TodoList();
todoList.todos.forEach( todo => {crearTodoHtml(todo)});
  

console.log('todos', todoList.todos)


// ************************************************************************
//    Ejemplo de creacion de una nueva Tarea
//      export const todoList   = new TodoList();                     // Crea un Objeto de la clase todo
//      const tarea             = new Todo('Aprender JavaScript');    // Crea una nueva entrada con una Tarea
//      todoList.nuevoTodo(tarea);                                    // Ejecuta la funcion de agregar tarea

//      console.log(todoList);                                        // Imprime el objeto
//      tarea.completado = true;                                      // Se selecciona como Tarea completada
//      crearTodoHtml( tarea )                                        // Crea y añade el elemnto HTL
// ************************************************************************


// ************************************************************************
//    LocalStorage && SessionStorage
//    Solo funciona cuando la aplicacion trabaja directamente en la web
//    Dentro del inspector se ve en la pestaña de aplicacion
//    La informacion guardada se puede visualizar por el usuario
//
//    Ejemplo del LocalStorage && LocalSession
//
//      localStorage.setItem('My-name', 'JesusRam');                  // Crea una nueva entidad con el nombre, valor
//      sessionStorage.setItem('My-name', 'JesusRam');                // Crea una nueva entidad con el nombre, valor
//      setTimeout(() => {                                            // Espera 1.5seg. y borrra un dato del LocalStorage
//        localStorage.removeItem('My-name');
//      }, 1500);
// ************************************************************************