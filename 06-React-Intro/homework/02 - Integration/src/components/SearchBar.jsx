export default function SearchBar(props) {
   // por medio de destructuring me traigo la propiedad onSearch del objeto props.
   const {onSearch} = props
   return (
      <div>
         <input type='search' />
      {/* se pasa la funcion onSearch*/}
      <button onClick={()=>onSearch("futuro id del personaje")}>Agregar</button>
      </div>
   );
}
