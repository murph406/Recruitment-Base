import React, { useState, useCallback } from 'react'

import { XIcon, LeftArrowIcon, RightArrowIcon } from '../../assets/icons/svg-paths'


export const PhotoPage = ({ data, toggleHeader }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const { photoRefs } = data

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
        toggleHeader()

    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
        toggleHeader()

    };

    return (
        <div className="photo-page full-width">
            {(!isViewerOpen)
                ? <div>
                    <div className="header">
                        <h1>Photos</h1>
                    </div>

                    <div className="full-width">
                        <div className=" photo-grid required grid">
                            {photoRefs.map((p, index) => (
                                <div className="photo-container required br-1" onClick={() => openImageViewer(index)}>
                                    <div
                                        className="image"
                                        key={index}
                                        style={{ backgroundImage: `url(${p.url})` }} />
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                : <div >
                    <PhotoViewer
                        src={photoRefs}
                        currentIndex={currentImage}
                        onClose={closeImageViewer} å />
                </div>

            }
        </div>
    )
}


const PhotoViewer = ({ src, currentIndex, onClose }) => {

    const [index, setIndex] = useState(currentIndex);
    const photoMax = src.length

    const onNextPhoto = () => {
        if (index === (photoMax - 1)) {
            return
        }
        setIndex(index + 1)
    }

    const onPrevPhoto = () => {
        if (index === 0) {
            return
        }
        setIndex(index - 1)
    }

    return (
        <div className="photo-viewer">
            <div className="distribute distribute-horizontal ">

                <div className="text">
                    <h1 className="icon">
                        {(index + 1).toString()} of {photoMax.toString()}
                    </h1>
                </div>

                <div className="left" onClick={onPrevPhoto}>
                    <div className="icon">
                        <LeftArrowIcon color={'#757575'} />
                    </div>
                </div>

                <div className="middle-contents">
                    <div className="photo">
                        <img src={src[index].url} />
                    </div>


                </div>

                <div className="right" onClick={onNextPhoto}>
                    <div className="icon">
                        <RightArrowIcon color={'#757575'} />
                    </div>
                </div>

                <div className="x" onClick={onClose}>
                    <div className="icon">
                        <XIcon color={'#757575'} />
                    </div>
                </div>
            </div>
        </div>
    )
}


