import { Button, TextField } from '@mui/material'
import React from 'react'

const TopicForm = ({buttonText}) => {
  return (
    <div className=" gap-5 flex flex-col">
      <TextField fullWidth label="Topic Title" id="fullWidth" />
      <TextField fullWidth label="Topic Description" id="fullWidth" />
      <Button variant="contained" className="text-text bg-background hover:bg-background w-40 p-2  m-auto">{buttonText}</Button>
    </div>
  )
}

export default TopicForm