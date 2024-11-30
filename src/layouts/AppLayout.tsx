import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <>
      <Header/>
      <div className='main'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}
