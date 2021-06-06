import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Loader from '../components/LinearIndeterminate'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import GoogleLogin from 'react-google-login'

const proxy = 'https://tuwaiqacademyapi.azurewebsites.net'

const useStyles = makeStyles((theme) => ({
  home: {
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
  editing: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    padding: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#4096A6',
    borderRadius: theme.spacing(2),
    backgroundColor: 'white',
  },
  typography: {
    fontFamily: 'Balsamiq Sans',
    color: 'white',
    paddingBottom: theme.spacing(3),
  },
  typography2: {
    fontFamily: 'Balsamiq Sans',
    color: '#121212',
    paddingBottom: theme.spacing(3),
  },
}))

const AcedmyScreen = () => {
  const classes = useStyles()
  const [login, setLogin] = useState(true)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [insert, setInsert] = useState(false)
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [major, setMajor] = useState('')
  const [grade, setGrade] = useState(0)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedStudent, setSelectedStudent] = useState({})
  const [students, setStudents] = useState([])

  useEffect(() => {
    axios
      .get(`${proxy}/api/student`)
      .then(function (response) {
        const studentsArray = []

        response.data.forEach((product) => {
          const image = 'https://robohash.org/' + product.name
          studentsArray.push({
            id: product.id,
            name: product.name,
            major: product.major,
            grade: product.grade,
            email: product.email,
            phone: product.phone,
            image: image,
          })
        })

        setStudents(studentsArray)
      })
      .catch(function (error) {
        console.log(error)
      })

    return () => {
      // console.log('The component has unmounted')
    }
  }, [students, selectedStudent])

  const deleteStudent = (id) => {
    setLoading(true)
    const studentsList = students
    studentsList.filter((student) => {
      return student.id !== id
    })
    axios
      .delete(`${proxy}/api/student/${id}`)
      .then(function (response) {
        if (response.status === 200) {
          setStudents(studentsList)
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

  const toggleEditMode = (student) => {
    setSelectedStudent(student)
    setId(student.id)
    setName(student.name)
    setMajor(student.major)
    setGrade(student.grade)
    setEmail(student.email)
    setPhone(student.phone)
    setEditing(true)
  }

  const editStudent = () => {
    setLoading(true)
    const student = {
      id: id,
      name: name,
      major: major,
      grade: grade,
      email: email,
      phone: phone,
    }
    axios
      .put(`${proxy}/api/student/${id}`, student)
      .then(function (response) {
        if (response.status === 200) {
          setStudents(students)
          setTimeout(() => {
            setLoading(false)
          }, 500)
          toast.success('تم تعديل معلومات الطالب بنجاح ✌.', {
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
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    setEditing(false)
  }

  const insertStudent = () => {
    setLoading(true)
    const student = {
      id: id,
      name: name,
      major: major,
      grade: grade,
      email: email,
      phone: phone,
    }
    axios
      .post(`${proxy}/api/student`, student)
      .then(function (response) {
        if (response.status === 201) {
          setStudents(students)
          setTimeout(() => {
            setLoading(false)
          }, 500)
          toast.success('تمت إضافة الطالب بنجاح 👍.', {
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
    setInsert(false)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <Container component="main" maxWidth="lg">
      {login ? (
        <Paper elevation={20} className={classes.editing}>
          <Typography
            className={classes.typography2}
            component="h3"
            variant="h3"
          >
            Sign In
          </Typography>
          <Grid container spacing={2}>
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={'Username'}
                  value={'younes.alturkey@tuwaiq.edu.sa'}
                  variant="filled"
                  autoFocus={true}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={'younes.alturkey@tuwaiq.edu.sa'}
                  type="password"
                  label="Password"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <Button
                  onClick={() => {
                    setLogin(false)
                    setTimeout(() => {
                      setLoading(false)
                    }, 3000)
                  }}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  <Typography>Sign In</Typography>
                </Button> */}
                <GoogleLogin
                  clientId="725272891211-91k1nnlo4acgfh53qac4rpkt52h2k5ol.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={() => {
                    setLogin(false)
                    setTimeout(() => {
                      setLoading(false)
                    }, 3000)
                  }}
                  onFailure={() => {
                    toast.fail('عمليو تسجيل دخول غير صحيه', {
                      style: { fontFamily: 'Changa' },
                      position: 'top-right',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    })
                  }}
                />
              </Grid>
            </>
          </Grid>
        </Paper>
      ) : editing ? (
        <Paper elevation={20} className={classes.editing}>
          <Typography
            className={classes.typography2}
            component="h2"
            variant="h2"
          >
            Modify {selectedStudent.name} Info
          </Typography>
          <Grid container spacing={2}>
            {loading ? (
              <Loader />
            ) : (
              <>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    fullWidth
                    label="Student Id"
                    defaultValue={selectedStudent.id}
                    onChange={(e) => setId(e.target.value)}
                    variant="filled"
                    autoFocus={true}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                    label="Student Name"
                    defaultValue={selectedStudent.name}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    onChange={(e) => setMajor(e.target.value)}
                    label="Student Major"
                    defaultValue={selectedStudent.major}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    onChange={(e) => setGrade(e.target.value)}
                    label="Student Grade"
                    defaultValue={selectedStudent.grade}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    onChange={(e) => setEmail(e.target.value)}
                    label="Student Email"
                    defaultValue={selectedStudent.email}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    onChange={(e) => setPhone(e.target.value)}
                    label="Student Phone"
                    defaultValue={selectedStudent.phone}
                    variant="filled"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={() => editStudent()}
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    <EditIcon />
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Paper>
      ) : insert ? (
        <Paper elevation={20} className={classes.editing}>
          <Typography
            className={classes.typography2}
            component="h2"
            variant="h2"
          >
            Add a Student
          </Typography>
          <Grid container spacing={2}>
            <>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Student Id"
                  onChange={(e) => setId(e.target.value)}
                  variant="filled"
                  autoFocus={true}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                  label="Student Name"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  onChange={(e) => setMajor(e.target.value)}
                  label="Student Major"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  onChange={(e) => setGrade(e.target.value)}
                  label="Student Grade"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  label="Student Email"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  onChange={(e) => setPhone(e.target.value)}
                  label="Student Phone"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => insertStudent()}
                  fullWidth
                  variant="contained"
                  color="secondary"
                >
                  <PersonAddIcon />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  onClick={() => setInsert(false)}
                  fullWidth
                  variant="contained"
                >
                  <CloseIcon />
                </Button>
              </Grid>
            </>
          </Grid>
        </Paper>
      ) : (
        <Paper elevation={20} className={classes.home}>
          <Typography
            className={classes.typography}
            component="h3"
            variant="h3"
          >
            Students
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {loading ? (
                <Loader />
              ) : (
                <>
                  <List>
                    {students.map((product, i) => {
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
                          <IconButton
                            onClick={() => toggleEditMode(product)}
                            style={{ color: '#2a3eb1' }}
                          >
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
                  <Grid item xs={12}>
                    <Button
                      onClick={() => setInsert(true)}
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      <PersonAddIcon />
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Paper>
      )}
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
