import { useState } from 'react'

import './App.scss'
import 'modern-normalize/modern-normalize.css'

import SignUp from './components/SignUp'
import LoginSuccess from './components/LoginSuccess'

function App() {
  const [data, setData] = useState([])

  const onSignUp = (info) => {
    setData([...data, ...info])
  }

  return (
    <div className="App">
      {data.length > 0 ? (
        <LoginSuccess data={data} />
      ) : (
        <SignUp onSubmit={onSignUp} />
      )}
    </div>
  )
}

export default App
