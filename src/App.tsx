import { VenlyConnect } from '@venly/connect'
import React from 'react'
import Functions from './Functions';

type AppProps = {
  venlyConnect: VenlyConnect;
}

function App({venlyConnect}: AppProps) {

  return (
    <div>
      <div className='border-b-2 border-indigo-700 rounded-b-lg shadow-xl py-2'>
        <h1 className='text-center text-xl font-bold'>Venly React Integration Demo</h1>
      </div>
      <div className='mt-4 mx-4 flex'>
        <button className='mx-auto border border-indigo-700 rounded-xl py-2 px-4 hover:scale-105 transition-all ease-in-out 0.7s'>Venly Wallet Login</button>
      </div>
      <div className='mt-4 mx-4'>
        <Functions />
      </div>
    </div>
  )
}

export default App
