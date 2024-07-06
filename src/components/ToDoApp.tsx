import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const ToDoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>('');
  const [listaTareas, setListaTareas] = useState<string[]>([])
  const handleAddTask = () => {
    if(nuevaTarea.trim() === '') return
    setListaTareas(tareaAnteriores => [...tareaAnteriores, nuevaTarea])
    setNuevaTarea('')
  };

  const handleBorrarTarea = (index:number) => {
    setListaTareas(tareas => tareas.filter((_,i) => i !== index))
  }
  return (
    <div className="todo-container">
      <h1>Lista De Tareas</h1>
      <div className="input-container">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
          className="input-tarea"
        />

        <button className="boton-agregar" onClick={handleAddTask}> Add Tarea</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  );
};
