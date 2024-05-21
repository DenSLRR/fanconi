import React from 'react'
import './video.css'
import headerVideo from '../assets/mainpage.MP4'

const Video = () => {
  return (
    <div className='video'>
        <div className="video__container">
            <video className='video-item' autoplay preload muted src={headerVideo}></video>
        </div>
    </div>
  )
}

export default Video