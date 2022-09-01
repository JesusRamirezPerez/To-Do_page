// 
// Este archivo solo ontendra las clases del poyecto
// 

export class Todo {

  static fromJson ({tarea, id, completado, creado}) {
    const tempTodo = new Todo( tarea );

    tempTodo.id          = id;
    tempTodo.completado  = completado;
    tempTodo.creado      = creado;

    return tempTodo;
  }

  constructor( tarea ){
    this.tarea        = tarea;
    this.id           = new Date().getTime();               // Muestra la fecha y hora
    this.completado   = false;
    this.creado       = new Date();
  }
}