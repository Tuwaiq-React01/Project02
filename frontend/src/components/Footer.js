import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: 'Balsamiq Sans',
    color: '#121212',
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <Typography
      className={classes.typography}
      style={{ marginTop: '2rem', marginBottom: '2rem' }}
      align="center"
    >
      Tuwaiq .NET Bootcamp &copy; {new Date().getFullYear()}
    </Typography>
  )
}

export default Footer
