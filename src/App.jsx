import { useState } from 'react'
import './components/style.css';

import Princ from './components/Princ';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        
        <Princ/>
    </div>
    </>
)
}

export default App