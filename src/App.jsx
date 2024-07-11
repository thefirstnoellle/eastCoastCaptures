import { useState } from 'react'
import { Section } from './Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>East Coast Captures</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      <Section>Content</Section>
      <Section>About</Section>
      
    </>
  )
}

export default App
