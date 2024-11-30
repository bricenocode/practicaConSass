import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import App from './components/App'
import LegalAdvise from './components/LegalAdvise'
import Form from './components/Form'
import Galery from './components/Galery'
import CarInsuranceDisplay from './components/CarInsuranceDisplay'
import Cars from './components/Cars'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<App/>} />
          <Route path="/coches" element={<Cars/>} />
          <Route path="/coches/seguros" element={<CarInsuranceDisplay/>} />
          <Route path="/galery" element={<Galery/>} />
          <Route path="/contacto" element={<Form/>} />
          <Route path="/avisos" element={<LegalAdvise/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
