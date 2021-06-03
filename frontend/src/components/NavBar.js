import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import CodeIcon from '@material-ui/icons/Code'
import { ButtonBase } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  brand: {
    marginRight: theme.spacing(4),
    padding: theme.spacing(2),
  },
  typography: {
    fontFamily: 'Balsamiq Sans',
    textDecoration: 'none',
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  navItem: {
    fontSize: 15,
    marginLeft: theme.spacing(4),
  },
}))

export default function NavBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <ButtonBase
            href="https://safcsp.org.sa/"
            target="_blank"
            rel="noreferrer noopener"
            className={classes.brand}
          >
            <Avatar
              edge="end"
              alt="Icon"
              src="https://raw.githubusercontent.com/tuwaiq-dotnet/json-parser-team-yaai/main/logo.png"
            />
            <Typography variant="h6" className={classes.typography}>
              Tuwaiq Acedmy
            </Typography>
          </ButtonBase>

          <ButtonBase
            className={classes.navItem}
            component={Link}
            to={'/Project02'}
          >
            <AccountBalanceIcon fontSize="small" />
            <Typography className={classes.typography}>Acedmy</Typography>
          </ButtonBase>

          <ButtonBase
            className={classes.navItem}
            href="https://tuwaiqacademyapi.azurewebsites.net/swagger/index.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CodeIcon fontSize="small" />
            <Typography className={classes.typography}>Swagger UI</Typography>
          </ButtonBase>
        </Toolbar>
      </AppBar>
    </div>
  )
}
