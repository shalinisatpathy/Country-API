import './App.css'
import { Route, Routes } from 'react-router-dom'

//import Country from './page not re/country/Country'
//import Favorites from './page not re/fav/Favorites'
import CountryTable from './Table'
import CountryPage from './country/countryindex'
import Favorites from './components/favPage'
import { useState } from 'react'
import React from 'react'

interface IThemeContext {
  theme: string
  setTheme: any
}

export const ThemeContext = React.createContext({} as IThemeContext)
function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<CountryTable />} />
          <Route path="/country/:name" element={<CountryPage />} />

          <Route path="/country/fav" element={<Favorites />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
