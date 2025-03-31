import React from 'react'
import Buttons from '../home/header/Buttons'
import GalleryMain from './GalleryMain/GalleryMain'
import GalleryPacks from './galleryPacks/GalleryPacks'
const Gallery = () => {
  return (
    <div>
      <Buttons/>
      <GalleryMain/>
      <GalleryPacks/>
    </div>
  )
}

export default Gallery