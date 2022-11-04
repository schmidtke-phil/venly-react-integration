import { SecretType, VenlyConnect } from '@venly/connect'
import React, { useState } from 'react'
import Functions from './Functions';

type AppProps = {
  venlyConnect: VenlyConnect;
}

function App({venlyConnect}: AppProps) {
  const [authenticated, setAuthenticated] = useState(false)

  async function connectWallet() {
    venlyConnect.flows.authenticate().then((res) => {
      if(res.isAuthenticated) {
        setAuthenticated(true)
      }
    })
  }

  return (
    <div>
      <div className='border-b-2 border-indigo-700 rounded-b-lg shadow-xl py-2'>
        <h1 className='text-center text-xl font-bold'>Venly React Integration Demo</h1>
      </div>
      <div className='mt-4 mx-4 flex'>
        <div className='mx-auto'>
          <button onClick={() => connectWallet()} className='border border-indigo-700 rounded-xl py-2 px-4 hover:scale-105 transition-all ease-in-out 0.7s'>Venly Wallet Login</button>
          {authenticated ? <div className="text-center">Logged In</div> : <></>}
        </div>
      </div>
      <div className='mt-4 mx-4'>
        <Functions venlyConnect={venlyConnect} />
      </div>
    </div>
  )
}

export default App
