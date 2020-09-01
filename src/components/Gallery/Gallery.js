import React, { useEffect, useState } from 'react'
import UploadForm from '../UploadForm/UploadForm'
import Image from '../Image/Image'
import firebase from '../../util/firebase'
import './Gallery.scss'

const Gallery = () => {
	const [photos, setPhotos] = useState()
	
	useEffect(() => {
		const imgRef = firebase.database().ref('Images')
		imgRef.on('value', (snapshot) => {
			const image = snapshot.val();
			const photos = [];
			for (const id in image) {
				photos.push({ id, ...image[id] })
			}
			setPhotos(photos)
		})
	}, [])
	
	return (
		<>
			<UploadForm />
			<br/>
			<p>click on the image for delete</p>
			<div className='gallery-wrapper'>
				{photos 
					? photos.map((item, index) => <Image src={item} key={index}/>)
					: ""}
			</div>
		</>
	)
};

export default Gallery;