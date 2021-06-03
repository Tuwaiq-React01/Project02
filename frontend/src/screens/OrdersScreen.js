import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios'

const ORDERS_API_URL = 'https://tuwaiqstoreapi.azurewebsites.net/api/orders'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    padding: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#4096A6',
    borderRadius: theme.spacing(2),
  },
  divider: {
    borderBottom: 'solid',
    borderWidth: '1px',
    color: '#00695f',
    padding: '0.5rem',
    margin: 'auto',
    width: '1.5rem',
  },
  typography: {
    fontFamily: 'Orbitron',
  },
}))

const OrderScreen = () => {
  const classes = useStyles()
  const [orders, setorders] = useState([
    {
      id: 1,
      orderPlaced: '2021-05-27',
      customerId: 2,
    },
    {
      id: 2,
      orderPlaced: '2021-03-12',
      customerId: 2,
    },
    {
      id: 3,
      orderPlaced: '2021-06-03',
      customerId: 1,
    },
    {
      id: 4,
      orderPlaced: '2021-04-23',
      customerId: 3,
    },
    {
      id: 5,
      orderPlaced: '2019-05-27',
      customerId: 5,
    },
  ])

  useEffect(() => {
    //FETCH all orders from the database
    axios
      .get(ORDERS_API_URL)
      .then(function (response) {
        const ordersArray = []

        response.data.forEach((order) => {
          ordersArray.push({
            id: order.id,
            orderPlaced: order.orderPlaced,
            customerId: order.customerId,
          })
        })

        if (ordersArray.length >= 1) {
          setorders(ordersArray)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={20} className={classes.paper}>
        <Typography className={classes.typography} component="h2" variant="h2">
          Orders
        </Typography>
        <div className={classes.divider} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>
              {orders.map((order, i) => {
                return (
                  <ListItem key={i}>
                    <ListItemAvatar
                      style={{ color: '#00695f', marginRight: 50 }}
                    >
                      <LocalShippingIcon style={{ width: 84, height: 84 }} />
                    </ListItemAvatar>
                    <ListItemText
                      style={{ color: '#00695f' }}
                      primary={order.orderPlaced}
                      secondary={'Order Id: ' + order.id}
                    />
                    <IconButton style={{ color: '#DC143C' }}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                )
              })}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default OrderScreen
