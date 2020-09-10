import React from 'react'
import './Image.scss'
import firebase from '../../util/firebase'

const Image = ({ src }) => {
  const deleteImage = () => {
    const imgRef = firebase.database().ref('Images').child(src.id);
    imgRef.remove();
  }
  
  return (
    <>
      <img onClick={deleteImage} src={src.src} alt='' />
    </>    
  )
}

export default Image