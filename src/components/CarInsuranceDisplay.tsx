import { seguros } from "../db/db.ts";
import CarsInsurance from "./CarsInsurance";

export default function CarInsuranceDisplay() {
  console.log(seguros)
  return (
    <section className='container__insurance'>
    <h2 id='seguros' className="insuranceSection__container--title">SEGUROS DE COCHES</h2>
    <div className="insuranceSection__container">
      {seguros.map(seguro => (
        <CarsInsurance
          key={seguro.id}
          seguro={seguro}
        />
      ))}
    </div>
    </section>
  )
}
