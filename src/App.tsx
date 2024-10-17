import Header from './components/Header'
import Footer from './components/Footer'
import CarsDisplay from './components/CarsDisplay'
import { coches, seguros } from './db/db'
import Form from './components/Form'
import CarsInsurance from './components/CarsInsurance'
import Banner from './components/Banner'
import Galery from './components/Galery'
import LegalAdvise from './components/LegalAdvise'
import BontonUp from './components/BotonUp'

function App() {

  console.log(seguros)

  return (
    <>  
    <BontonUp/>
    <div className='displayContainer'>
    <Header />
    <Banner />
    <div>
      <div className='main'>
        <div>
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
          
        </div>
        
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
      <Galery />
      <Form />
      <LegalAdvise />
      </div>
    </div>
    <Footer />
    </div>
  </> 
  )
}

export default App
