import './App.css'

import SquareComp from './components/SquareComp'
import { useState } from 'react';

function App() {
  /* const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<string>('rgb(200,200,200)') */
  
  const [box, setBox] = useState({count: 0, color: 'rgb(200,200,200)'});

  const randomColor = (): string =>{
    const colors: number[] = [];
    for (let i = 0; i < 3; i++){
      colors.push(Math.floor(Math.random()*256))
    }
    return `rgb(${colors[0]},${colors[1]},${colors[2]})`
  }
  const incCount = () =>{setBox(prev=> ({...prev, count: prev.count + 1}))};
  const createColor = () => box.color = randomColor() // ÍGY NEM JÓ

  const reset = () =>{
    box.color = 'rgb(200,200,200)'
    box.count = 0
  }

  return (
    <>
      <header>
        <h1>Színes számláló doboz</h1>
        <h3>Színkód: <span>{box.color}</span></h3>
        <main>
          <SquareComp bgColor={box.color} SquareCount={box.count} incFn={incCount}/>
          <section>
            <button onClick={createColor}>Színez</button>
            <button onClick={reset}>Töröl</button>
          </section>
        </main>
      </header>
    </>
  )
}

export default App
