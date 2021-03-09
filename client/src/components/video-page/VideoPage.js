import React, { useState } from 'react'

import { VideoPlayer } from '../../elements'
import { XIcon, RightArrowIcon, LeftArrowIcon } from '../../assets/icons/svg-paths'

export const VideoPage = ({ data, toggleHeader, textDetails, title }) => {
    const { fullGameRefs, firstName } = data

    const [currentIndex, setIndex] = useState(0);
    const [active, isVideoActive] = useState(false);
    const [playing, isVideoPlaying] = useState(false);


    const onSelectVideo = (index) => {
        setIndex(index)
        isVideoActive(true)
        toggleHeader()
    }

    const onDisableVideo = () => {
        isVideoActive(false)
        toggleHeader()
    }

    const onNextVideo = () => {
        if (currentIndex === (fullGameRefs.length - 1)) {
            return
        }
        setIndex(currentIndex + 1)
        isVideoPlaying(false)

    }

    const onPrevVideo = () => {
        if (currentIndex === 0) {
            return
        }
        setIndex(currentIndex - 1)
        isVideoPlaying(false)

    }

    const playVideo = () => {
        isVideoPlaying(true)
    }

    return (
        <div className="full-width full-height video-page">
            {(!active)
                ? <div>
                    <div className="header">
                        <h1>{title}</h1>
                        <p>{textDetails} {firstName}</p>
                    </div>

                    <div className="full-width">
                        <div className=" video-grid required grid">
                            {fullGameRefs.map((v, index) => (
                                <Box data={v} index={index} onClick={() => onSelectVideo(index)} />
                            ))}
                        </div>
                    </div>
                </div>
                : <div className="distribute distribute-center full-height">
                    <div className="text">
                        <h1 className="icon">
                            {(currentIndex + 1).toString()} of {fullGameRefs.length.toString()}
                        </h1>
                    </div>

                    <div className="left" onClick={onPrevVideo}>
                        <div className="icon">
                            <LeftArrowIcon color={'#757575'} />
                        </div>
                    </div>

                    <VideoPlayer
                        onPlay={() => playVideo()}
                        isVideoPlaying={playing}
                        currentIndex={currentIndex}
                        src={fullGameRefs} />
                    <div className="right" onClick={onNextVideo}>
                        <div className="icon">
                            <RightArrowIcon color={'#757575'} />
                        </div>
                    </div>

                    <div className="x" onClick={() => onDisableVideo()}>
                        <div className="icon">
                            <XIcon color={'#757575'} />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export const Box = ({ data, index, onClick }) => {
    const { videoId, url } = data

    const thumb = 'http://img.youtube.com/vi/' + videoId + '/0.jpg'
    return (
            <div className="video-container required br-1" onClick={onClick}>
                <div
                    className="video-thumbnail"
                    key={index}
                    style={{ backgroundImage: `url(${thumb})` }} />
            </div>
    )
}