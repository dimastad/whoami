import React from 'react'
import firebase from '../../util/firebase'

const Image = ({ src }) => {
  const deleteImage = () => {
    const imgRef = firebase.database().ref('Images').child(src.id);
    imgRef.remove();
  }
  
  return (
    <button onClick={deleteImage}>
      <img src={src.src} alt='' />
    </button>
    
  )
}

export default Image