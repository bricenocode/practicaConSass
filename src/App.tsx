import Header from './components/Header'
import Footer from './components/Footer'
import CarsDisplay from './components/CarsDisplay'
import { coches, seguros } from './db/db'
import Form from './components/Form'
import CarsInsurance from './components/CarsInsurance'
import Banner from './components/Banner'
function App() {

  console.log(seguros)

  return (
    <>
      <Header/>

      <section className='container__banner'>
        <Banner/>
      </section>

      <div>
      <section className='container__carList'>
          <h1>Listado de Coches</h1>
          <div className='container'>
            {coches.map(coche => (
              <CarsDisplay
                key = {coche.id}
                coche = {coche}
              />

            ))}
          </div>
      </section>  
      </div>

      <section className='container__insurance'>
        <div>
          {seguros.map( seguro => (
            <CarsInsurance
              key= {seguro.id}
              seguro = {seguro}
            />  
          ))}
        </div>
      </section>

      <section>
        <div>
          <Form/>
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default App
