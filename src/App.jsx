import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import RecipeFilterApp from './Components/RecipeFilterApp'
import ZigzagString from './Components/ZigzagString'
import PaginatedBookmarkList from './Components/PaginatedBookmarkList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <RecipeFilterApp/> */}
    <PaginatedBookmarkList/>
    </>
  )
}

export default App
