import { VenlyConnect } from '@venly/connect'
import React from 'react'

type AppProps = {
  venlyConnect: VenlyConnect;
}

function App({venlyConnect}: AppProps) {

  return (
    <div>
      <div className='border-b-2 border-indigo-700 rounded-b-lg shadow-xl py-2'>
        <h1 className='text-center'>Venly React Integration Demo</h1>
      </div>
      <div className='mt-4 mx-4'>
        <button className=''>Venly Wallet Login</button>
      </div>
    </div>
  )
}

export default App
