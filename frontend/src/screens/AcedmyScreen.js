import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Loader from '../components/LinearIndeterminate'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'

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
    backgroundColor: '#121212',
  },
  typography: {
    fontFamily: 'Balsamiq Sans',
    color: 'white',
    paddingBottom: theme.spacing(3),
  },
}))

const AcedmyScreen = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const deleteStudent = (id) => {
    setLoading(true)
    const studentsList = products
    studentsList.filter((student) => {
      return student.id !== id
    })
    axios
      .delete(`/api/student/${id}`)
      .then(function (response) {
        if (response.status === 200) {
          setProducts(studentsList)
          setTimeout(() => {
            setLoading(false)
          }, 500)
          toast.success('تم حذف الطالب من قاعدة البيانات 👌.', {
            style: { fontFamily: 'Changa' },
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    //FETCH all products from the database
    axios
      .get('/api/student')
      .then(function (response) {
        const productsArray = []

        response.data.forEach((product) => {
          const image = 'https://robohash.org/' + product.name
          productsArray.push({
            id: product.id,
            name: product.name,
            major: product.major,
            grade: product.grade,
            email: product.email,
            phone: product.phone,
            image: image,
          })
        })

        setProducts(productsArray)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [products])

  return (
    <Container component="main" maxWidth="lg">
      <Paper elevation={20} className={classes.paper}>
        <Typography className={classes.typography} component="h2" variant="h2">
          Students
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {loading ? (
              <Loader />
            ) : (
              <List>
                {products.map((product, i) => {
                  return (
                    <ListItem key={i}>
                      <ListItemAvatar style={{ marginRight: 50 }}>
                        <Avatar
                          style={{ width: 128, height: 128 }}
                          src={product.image}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        style={{ color: 'white' }}
                        primary={product.id}
                      />
                      <ListItemText
                        style={{ color: 'white' }}
                        primary={product.name}
                      />
                      <ListItemText
                        style={{ color: 'white' }}
                        primary={product.major}
                      />
                      <IconButton style={{ color: '#2a3eb1' }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => deleteStudent(product.id)}
                        style={{ color: '#b2102f' }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  )
                })}
              </List>
            )}
          </Grid>
        </Grid>
      </Paper>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  )
}

export default AcedmyScreen
