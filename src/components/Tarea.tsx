type TareaProps = {
    tarea:string
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea} : TareaProps) => {
  return (
    <div className="tarea">
        <span className="tarea-contenido">{tarea}</span>
        <button onClick={borrarTarea} className="boton-borrar">Borrar Tarea</button>
    </div>
  )
}