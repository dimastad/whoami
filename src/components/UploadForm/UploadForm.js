import React, { useState } from 'react'
import './UploadForm.scss'
import firebase from '../../util/firebase'

const UploadForm = () => {
  const [src, setSrc] = useState('')

  const handleOnChange = (e) => {
    setSrc(e.target.value)
  }

  const createData = () => {
    const imgRef = firebase.database().ref('Images');
    const img = {
      src,
      width: 1,
      height: 1,
    }

    imgRef.push(img);
    setSrc('');
  }

  return (
    <div className="form">
      <input type="text" onChange={handleOnChange} value={src} />
      <button onClick={createData}>Add image</button>
    </div>
  )
}

export default UploadForm;
