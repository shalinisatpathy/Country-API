import React, { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TableContainer from '@mui/material/TableContainer'
import { Box, Table } from '@mui/material'
import TableHead from './TableHead'
import SearchBar from '../components/searchBar'
import { useEffect } from 'react'
import { fetchAllCountries } from '../redux/action/countriesA'
import TableBody from './TableBody'
import AppBar from '../components/AppBar'
import { InitialAllState } from '../redux/store'
import { Country } from '../types'
import { ThemeContext } from '../App'
import { AppTheme } from '../components/theme/AppTheme'

const CountryTable = () => {
  const dispatch = useDispatch()
  const allCountries = useSelector(
    (state: InitialAllState) => state.countries.countriesData
  )
  const error = useSelector((state: InitialAllState) => state.countries.error)
  const [search, setSearch] = useState<string>('')

  //fetching countries
  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])
  // theme
  const { theme } = useContext(ThemeContext)
  const headerStyle: AppTheme = {
    dark: {
      backgroundColor: 'gray',
      color: 'white',
    },
    light: {
      backgroundColor: '#e0e0e0',
      color: 'black',
    },
    common: {
      transition: 'all 1s ease',
    },
  }
  const themeStyle = {
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
    ...headerStyle.common,
  }
  // error
  if (error) {
    return <p>loading problem check localstore</p>
  }
  const searchHandler = (event: any) => {
    setSearch(event.target.value)
  }
  //searching country from search bar
  const filteredCountries = allCountries?.filter((item: Country) => {
    if (search === '') {
      return item
    } else if (item.name.common.toLowerCase().includes(search.toLowerCase())) {
      return item
    }
  })
  return (
    <div className="tableindex" style={themeStyle}>
      <AppBar />

      <SearchBar onChange={searchHandler} />

      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead />
          <TableBody filteredCountries={filteredCountries} />
        </Table>
      </TableContainer>
    </div>
  )
}

export default CountryTable
