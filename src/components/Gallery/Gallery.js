import React, { useState, useEffect } from 'react';
import UploadImage from '../UploadImage/UploadImage';
import Image from '../Image/Image';
import './Gallery.scss'

import firebaseDb from '../../firebase'

const Gallery = () => {

	const [photoUrls, setPhotoUrls] = useState({})

	useEffect(() => {
		firebaseDb
			.child('photos')
			.on('value', snapshot => {
				if (snapshot.val() !== null)
				setPhotoUrls({
					...snapshot.val()
				})
			})
	}, [])

	const addUrl = (url) => {
		firebaseDb
			.child('photos')
			.push(
				url
			)
	}

	return (
		<>
			<UploadImage addUrl={addUrl} />
			<br/>
			<div className='gallery-wrapper'>
				{
					Object.keys(photoUrls).map((id) => {
						return <div className="img-wrapper" key={id}>
							<Image src={photoUrls[id].url} />
						</div>
					})
				}
			</div>
		</>
	)
};

export default Gallery;