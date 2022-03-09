import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import HomeIcon from '@mui/icons-material/Home'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import useCountry from '../custom-hook/useCountry'
import { ThemeContext } from '../App'
import { AppTheme } from '../components/theme/AppTheme'
import ThemeToggle from '../components/theme/ThemeToggle'

function CountryPage() {
  const { name } = useParams()

  console.log(name)
  const [country, error] = useCountry(name as string)

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
  if (error) {
    return <p>Something went wrong</p>
  }
  if (!country) {
    return <p>Loading...</p>
  }
  return (
    <div style={themeStyle}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Box
          sx={{
            width: '500%',
            maxWidth: 400,
            border: 2,
            alignItems: 'center',
          }}
        >
          <Card
            sx={{ maxWidth: 450, backgroundColor: 'lightblue' }}
            variant="outlined"
          >
            <CardHeader />
            <CardActions>
              <Link to="/">
                <HomeIcon />
              </Link>
              <ThemeToggle />
            </CardActions>
            <CardContent>
              <Typography sx={{ fontSize: 20 }}>
                {country.name.common}
              </Typography>
            </CardContent>

            <CardMedia
              component="img"
              height="100"
              width="100"
              src={country.flags.png}
              alt="flag"
            />

            <CardContent>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Region</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{country.region}</Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>

            <CardContent>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Languages</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {country.languages &&
                      Object.values(country.languages).map(value => (
                        <p>{value}</p>
                      ))}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Country Borders </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {country.borders &&
                      Object.values(country.borders).map(borders => (
                        <p key={borders}>{borders}</p>
                      ))}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Currencies </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {country.currencies &&
                    Object.keys(country.currencies).length > 0
                      ? Object.values(country.currencies).map(x => x.name)
                      : 'N/A'}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </div>
  )
}

export default CountryPage
