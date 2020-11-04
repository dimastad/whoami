import React, { useEffect, useRef, useState } from 'react'
import UploadForm from '../UploadForm/UploadForm'
// import Image from '../Image/Image'
import firebase from '../../util/firebase'
import './ImageList.scss'

const ImageList = () => {
	const containerRef = useRef(null)
	const [photos, setPhotos] = useState([])
	const [containerWidth, setContainerWidth] = useState(null)

	useEffect(() => {
		if (containerRef.current) {
			setContainerWidth(containerRef.current.offsetWidth)
		}

		window.addEventListener('resize', event => {
			setContainerWidth(containerRef.current.offsetWidth)
		})
	}, [containerRef])

	useEffect(() => {
		const imgRef = firebase.database().ref('Images')
		imgRef.on('value', (snapshot) => {
			const image = snapshot.val();
			const _photos = [];
			for (const id in image) {
				_photos.push({ id, ...image[id] })
			}

			setPhotos(_photos)
		})
	}, [])

	const getRezizedImages = () => {
		const imgArr = []
		let lines = []
		let imgRatioSum = 0
		const linesRatio = containerWidth / 180

		photos.forEach((img, i) => {
			imgRatioSum += img.width / img.height
			lines[i] = {
				ratio: img.width / img.height,
				src: img.src
			}

			if (imgRatioSum > linesRatio) {
				lines.forEach(({ratio, src}) => {
					imgArr.push({
						width: containerWidth * ratio / imgRatioSum,
						src: src
					})
				})

				lines = []
				imgRatioSum = 0
			}

			if (i + 1 === photos.length) {
				lines.forEach(({ratio, src}) => {
					imgArr.push({
						width: containerWidth * ratio / linesRatio,
						src: src
					})
				})
			}
		})
		return imgArr
	}
	console.log(getRezizedImages())
	return (
		<>
			<UploadForm />
			<br/>
			{/* <p>click on the image for delete</p> */}
			<ul
				ref={containerRef}
				className='gallery gallery__wrapper'>
				{getRezizedImages()
						.map((item, index) => (
							<li
								className='gallery__item'
								style={{ width: item.width }}
								key={index}
							>
								<img
									className='gallery__img ph-picture'
									src={item.src}
									alt=''
									loading='lazy'
								/>
							</li>
							))}
			</ul>
		</>
	)
};

export default ImageList;