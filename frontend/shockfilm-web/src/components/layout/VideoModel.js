import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Video = ({ embedId }) => {
    // let dummy = '_o5WVCCONsA';
    return (
            <div className="modal-video-body">
                <div className="modal-video-inner" style={{ "width": "1733px" }}>
                    <div className="modal-video-movie-wrap">
                        <button className="modal-video-close-btn" aria-label="Close the modal by clicking here"></button>
                        <iframe width="300" height="130" src={`//www.youtube.com/embed/${embedId}?mute=0&amp;autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="1" tabIndex="-1" __idm_id__="417793"></iframe>
                    </div>
                </div>
            </div>
    );
};
const Modals = ({ backdropHandler }) => {
    return (
        <>
            {
                <div onClick={backdropHandler} className="modal-video" tabIndex="-1" role="dialog" aria-label="You just opened the modal video" />
            }
        </>
    );
};
const VideoModel = ({ embedId, backdropHandler }) => {
    return (
        <>
            {createPortal(
                <Modals
                    backdropHandler={backdropHandler}
                />, document.getElementById('video__modals'))
            }
            {createPortal(
                <Video
                    embedId={embedId}
                />,
                document.getElementById('video__overlay')
            )}
        </>
    );
};

export default VideoModel;