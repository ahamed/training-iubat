import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button';

function App() {
  return (
    <div>
      <Button type="reset">
        reset
      </Button>
      <Button>Another button</Button>
    </div>
  )
}

export default App
