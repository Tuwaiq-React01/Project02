import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import axios from 'axios'

const PRODUCTS_API_URL = 'https://tuwaiqstoreapi.azurewebsites.net/api/products'

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

const StoreScreen = () => {
  const classes = useStyles()
  const [products, setProducts] = useState([
    {
      id: 74256,
      name: 'Monkey D Luffy Paramount War',
      price: 615.0,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71saELHU3DL._AC_SL1500_.jpg',
    },
    {
      id: 32354,
      name: 'One Piece Brotherhood',
      price: 159.35,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51verxrxP0L._AC_.jpg',
    },
    {
      id: 11254,
      name: 'Modern Long Sword',
      price: 189.88,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61N09EdUW7L._AC_SL1000_.jpg',
    },
    {
      id: 48565,
      name: 'Samsung Galaxy M11',
      price: 425.0,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/714OQELGz%2BL._AC_SL1500_.jpg',
    },
    {
      id: 65235,
      name: 'Innoo Tech PS4',
      price: 102.38,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61fUK-MiHNL._AC_SL1000_.jpg',
    },
    {
      id: 41235,
      name: 'Namco Tekken 7',
      price: 79.99,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81tk896p%2BVL._AC_SL1500_.jpg',
    },
    {
      id: 69696,
      name: 'Jaguar Classic Black',
      price: 48.7,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51T4ovuKu-L._AC_SL1091_.jpg',
    },
  ])

  useEffect(() => {
    //FETCH all products from the database
    axios
      .get(PRODUCTS_API_URL)
      .then(function (response) {
        const productsArray = []

        response.data.forEach((product) => {
          productsArray.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
          })
        })

        if (productsArray.length >= 1) {
          setProducts(productsArray)
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
          Products
        </Typography>
        <div className={classes.divider} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List>
              {products.map((product, i) => {
                return (
                  <ListItem key={i}>
                    <ListItemAvatar style={{ marginRight: 50 }}>
                      <Avatar
                        style={{ width: 84, height: 84 }}
                        src={product.image}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      style={{ color: '#00695f' }}
                      primary={product.name}
                      secondary={'SAR ' + product.price}
                    />
                    <IconButton style={{ color: '#00695f' }}>
                      <ShoppingCartIcon />
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

export default StoreScreen
