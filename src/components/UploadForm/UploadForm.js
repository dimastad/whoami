import React, { useState } from 'react'
import './UploadForm.scss'
import firebase from '../../util/firebase'

const UploadForm = () => {
  const [src, setSrc] = useState('')
  const [size, setSize] = useState({})

  const handleOnChange = (e) => {
    e.target.value && setSrc(e.target.value)
  }

  const onLoad = ({target:img}) => {
    setSize({
      width: img.offsetWidth,
      height: img.offsetHeight
    })
  }

  const createData = (e) => {
    e.preventDefault();
    const imgRef = firebase.database().ref('Images');
    const {width, height} = size;
    const img = {
      src,
      width,
      height,
    }

    img.src && imgRef.push(img);
    setSrc('');
  }

  return (
    <>
    <form
      onSubmit={createData}
      className="form">
      <input type="text" placeholder="Enter image URL" onChange={handleOnChange} value={src} />

      <input
        type='submit'
        value='add image'
        className='button' />
    </form>
    <img className="preview" onLoad={onLoad} src={src} alt="" />
    </>
  )
}

export default UploadForm;
