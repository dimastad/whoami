import React, { useEffect, useState } from 'react'
import UploadForm from '../UploadForm/UploadForm'
// import Image from '../Image/Image'
import firebase from '../../util/firebase'
import './ImageList.scss'
import Loader from '../Loader/Loader'
import Gallery from 'react-photo-gallery'
// import {photos} from '../../images/gallery-images'

const ImageList = () => {
	const [photos, setPhotos] = useState()
	
	useEffect(() => {
		const imgRef = firebase.database().ref('Images')
		imgRef.on('value', (snapshot) => {
			const image = snapshot.val();
			const photos = [];
			for (const id in image) {
				photos.push({ id, ...image[id] })
			}
			photos
					// .map((item, index) => <Image src={item} key={index}/>)
					.reverse()
			setPhotos(photos)
		})
	}, [])


	
	return (
		<>
			<UploadForm />
			<br/>
			{/* <p>click on the image for delete</p> */}
			<div className='gallery-wrapper'>
				{photos 
					// ? photos
					// 	.map((item, index) => <Image src={item} key={index}/>)
					// 	.reverse()
					? <Gallery 
						photos={photos} />
					: <Loader />}
			</div>
		</>
	)
};

export default ImageList;