import React from 'react'
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Addblog = () => {
    const { register, handleSubmit} = useForm();
    const createCourse=(val) => {
        alert('form submitted');
        axios.post("http://localhost:5000/course/create",val).then((res)=>{
          alert(`Course Successfully Created`);
        })
      }

  return (
    <div>
      <Stack
      component="form"
      sx={{
        marginTop:'90px',
        marginLeft:'550px',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='userId'
      {...register('userId')}
        hiddenLabel
        id="filled-hidden-label-small"
        label = "Blog Name"
        variant="outlined"
       
      />
      <TextField
        hiddenLabel
        name='courseDesc'
        {...register('courseDesc')}
        id="filled-hidden-label-normal"
        label ="Description"
        variant="outlined"
      />

      <TextField
        hiddenLabel
        name='courseDuration'
        {...register('courseDuration')}
        id="filled-hidden-label-normal"
        label ="Author Name"
        variant="outlined"
      />
      
      <Button variant='contained' onClick={handleSubmit(createCourse)}>Add Blog</Button>
    </Stack>
    </div>
  )
}

export default Addblog
