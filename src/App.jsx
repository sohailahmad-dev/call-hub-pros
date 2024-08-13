import { useEffect } from 'react'
import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import AppRouter from './config/AppRouter'

function App() {

  useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
