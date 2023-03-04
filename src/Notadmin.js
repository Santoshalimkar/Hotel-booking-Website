import React from 'react'
import { Button } from 'rsuite'

const Notadmin = () => {
  return (
    <div><h4>you are not admin </h4>
    <Button onClick={()=>window.location.href="/"}>back to home</Button>
    </div>

  )
}

export default Notadmin