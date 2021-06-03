import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import StoreIcon from '@material-ui/icons/Store'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline'
import CodeIcon from '@material-ui/icons/Code'
import { ButtonBase } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  brand: {
    marginRight: theme.spacing(4),
    padding: theme.spacing(1),
  },
  typography: {
    fontFamily: 'Orbitron',
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
              Tuwaiq Store
            </Typography>
          </ButtonBase>

          <ButtonBase className={classes.navItem} component={Link} to={'/'}>
            <StoreIcon fontSize="small" />
            <Typography className={classes.typography}>Store</Typography>
          </ButtonBase>

          <ButtonBase
            className={classes.navItem}
            component={Link}
            to={'/customers'}
          >
            <AccountBoxIcon fontSize="small" />
            <Typography className={classes.typography}>Customers</Typography>
          </ButtonBase>

          <ButtonBase
            className={classes.navItem}
            component={Link}
            to={'/orders'}
          >
            <DoneOutlineIcon fontSize="small" />
            <Typography className={classes.typography}>Orders</Typography>
          </ButtonBase>

          <ButtonBase
            className={classes.navItem}
            href="https://tuwaiqstoreapi.azurewebsites.net/swagger/index.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CodeIcon fontSize="small" />
            <Typography className={classes.typography}>Api</Typography>
          </ButtonBase>
        </Toolbar>
      </AppBar>
    </div>
  )
}
