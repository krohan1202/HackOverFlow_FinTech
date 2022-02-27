import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  Grid,
  TextField,
  TextareaAutosize,
  Paper,
  useMediaQuery,
  Button,
} from '@mui/material'
import { useStyles } from '../../../styles/CreateIdea/ideaForm/ideaForm.style'
import { useMoralis, useNewMoralisObject } from 'react-moralis'
import { useRouter } from 'next/router'

const IdeaForm = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width:600px)')
  const router = useRouter()


  const [formData, setFormData] = useState({
    title: '',
    description: '',
    threshold: '',
    fund: '',
    idea: '',
    amountRaised: 0,
    totalContributions: 0,
    createdBy: ''
  })

  const { authenticate, isAuthenticated, isAuthenticating, logout, user } = useMoralis()
  const { isSaving, error, save } = useNewMoralisObject('Idea')

  const handleChange = (e) => {
    e.preventDefault()
    setFormData((f) => ({
      ...f,
      [e.target.name]: e.target.value,
      createdBy: user && user.id
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    save(formData)
    console.log(error ? error : formData)
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={'14'} component='main'>
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={0}>
          <form className={classes.form} onSubmit={submitHandler}>
            <label>Title of your idea</label>
            <TextField
              variant='outlined'
              name='title'
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
            <label>Short description</label>
            <TextField
              variant='outlined'
              name='description'
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
            <label>Minimum amount threshold</label>
            <TextField
              variant='outlined'
              name='threshold'
              value={formData.threshold}
              onChange={(e) => handleChange(e)}
            />
            <label>Total fund required</label>
            <TextField
              variant='outlined'
              name='fund'
              value={formData.fund}
              onChange={(e) => handleChange(e)}
            />
            <label>Your idea in detail</label>
            <TextareaAutosize
              minRows={3}
              className={classes.textarea}
              name='idea'
              value={formData.idea}
              onChange={(e) => handleChange(e)}
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            // sx={{
            //   fontFamily: "'Euclid Circular A', sans-serif",
            //   borderRadius: "100rem",
            //   fontSize: "1.16vw",
            //   padding: "0.50vw 2.1vw",
            //   margin: "3",
            //   color: '#fff',
            // }}
            >
              Submit Idea
            </Button>
          </form>
        </Grid>
        <Grid item xs={false} sm={false} md={6}>
          <Image
            src='/assets/desktop/LoginImg.png'
            alt='vector'
            width={800}
            height={800}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default IdeaForm