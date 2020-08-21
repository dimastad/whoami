import React from 'react';
import UploadImage from '../UploadImage/UploadImage';
import Image from '../Image/Image';
import images from '../../images/gallery-images.json'
import './Gallery.scss'

const Gallery = () => {
	
	const urls = images.galleryImages;
	const photos = urls.map(url => <Image src={url.url} key={url.url.toString()} />)

	return (
		<>
			<UploadImage />
			
			<div className='gallery-wrapper'>
				{photos}
			</div>
		</>
	)
};

export default Gallery;