import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Registration from './Registration'

const Home = () => {
  return (

    <>
      <Routes>
        <Route path="/" element={  <Navbar />} />
        <Route path="/registration" element={ <Registration />} />
      </Routes>
    </>
  )
}

export default Home

