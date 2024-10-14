import { useState } from 'react'
import equilibriumLogo from './assets/image-equilibrium.jpg'
import ethereumIcon from './assets/icon-ethereum.svg'
import clockIcon from './assets/icon-clock.svg'
import imageAvatar from './assets/image-avatar.png'
import viewIcon from './assets/icon-view.svg'
import './App.css'

function App() {

  return (
    <main className='h-screen bg-main flex justify-center items-center font-outfit'>
      <div id="card" className='flex flex-col justify-center items-center rounded-lg bg-card w-80 p-5'>
      {/* Uso relative para que los elementos hijos se posicionen respecto a el. GROUP???*/}
        <div className="relative group cursor-pointer">
          <img src={equilibriumLogo} alt="Equilibrium" className='rounded-lg cursor-pointer' />

          <div className="absolute inset-0 bg-cyan opacity-0 rounded-lg group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <img
              src={viewIcon}
              alt="View Icon"
              className="w-10 h-10"
            />
          </div>
        </div>
        <div id="description" className='space-y-2.5 mt-4'>
          <h1 className='text-white font-semibold text-xl hover:text-cyan cursor-pointer'>Equilibrium #3429</h1>
          <p className='text-gray font-light'>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div id="extra-info" className='w-full flex flex-row justify-between mt-4'>
          <div id="eth" className='flex flex-row items-center space-x-2'>
            <img src={ethereumIcon} alt="Ethereum Icon" className='w-3 h-5' />
            <p className='text-cyan font-semibold text-sm'>0.041 ETH</p>
          </div>
          <div id="clock" className='flex flex-row items-center space-x-1'>
            <img src={clockIcon} alt="Clock Icon" className='w-4 h-4' />
            <p className='text-gray font-light text-sm'>3 days left</p>
          </div>
        </div>
        <hr className='h-px w-full text-line mt-4' />
        <div id="creator" className='w-full flex flex-row justify-start space-x-3 mt-3 mb-1 items-center'>
          <img src={imageAvatar} alt="avatar" className='w-8 h-8 rounded-full border border-white' />
          <p className='text-gray text-sm font-light'>Creation of <span className='text-white text-sm hover:text-cyan cursor-pointer'>Jules Wyvern</span></p>
        </div>
      </div>
    </main>
  )
}

export default App
