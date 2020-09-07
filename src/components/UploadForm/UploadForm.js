import React, { useState } from 'react'
import './UploadForm.scss'
import firebase from '../../util/firebase'

const UploadForm = () => {
  const [src, setSrc] = useState('')

  const handleOnChange = (e) => {
    e.target.value && setSrc(e.target.value)
  }

  const createData = () => {
    const imgRef = firebase.database().ref('Images');
    const img = {
      src,
      // width: 1,
      // height: 1,
    }

    img.src && imgRef.push(img);
    setSrc('');
  }

  return (
    <div className="form">
      <input type="text" placeholder="Enter image URL" onChange={handleOnChange} value={src} />
      <button onClick={createData}>Add image</button>
    </div>
  )
}

export default UploadForm;
