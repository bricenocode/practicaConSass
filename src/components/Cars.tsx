import { coches } from "../db/db";
import CarsDisplay from "./CarsDisplay";


export default function Cars() {
  return (
    <section className='container__carList'>
      <h1 id='coches'>Listado de Coches</h1>
      <div className='container'>
        {coches.map(coche => (
          <CarsDisplay  
            key={coche.id}
            coche={coche}
          />
        ))}
      </div>
    </section>
  )
}
