import React, { useState } from 'react'
import './index.css'
import { getResult } from './actions'
import { 
  case1, 
  case2, 
  case3,
  case4,
  case5,
  case6,
} from './constants'

const App = () => {
  const items = ['No items', 'Base', 'Custom1', 'Custom2']
  const [selected, setSelected] = useState('No items')
  
  const handleClick = event => {
  	setSelected(event.target.value)
  	if (event.target.value === 'Base') {
    	console.log(getResult(case1))
    	console.log(getResult(case2))
    	console.log(getResult(case3))
  	}
  	if (event.target.value === 'Custom1') {
    	console.log(getResult(case4))
  	}
  	if (event.target.value === 'Custom2') {
    	console.log(getResult(case5))
    	console.log(getResult(case6))
  	}
  }
  
  return (
    <div className="App">
        <h1>Expressions</h1>
              <div>
                  <select onClick={handleClick}>
                    {items.map(e => 
                      <option value={e} key={e}>{e}</option>
                    )}
                  </select>
                  <h2>{selected} selected</h2>
                  <p>Please, open js console to see results</p>
              </div>
    </div>
  )
}

export default App
