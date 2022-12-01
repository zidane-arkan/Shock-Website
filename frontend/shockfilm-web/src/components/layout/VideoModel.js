import React, { useState } from 'react';
import ReactDom from 'react-dom';

const Video = ({ embedId, isBackdrop, backdropHandler }) => {
    let dummy = '_o5WVCCONsA';
    return (
        <>
            {
                isBackdrop &&
                <div onClick={backdropHandler} class="modal-video" tabindex="-1" role="dialog" aria-label="You just opened the modal video">
                    <div class="modal-video-body">
                        <div class="modal-video-inner" style={{ "width": "1733px" }}>
                            <div class="modal-video-movie-wrap" style={{ "paddingBottom": "56.25%" }}>
                                <button class="modal-video-close-btn" aria-label="Close the modal by clicking here"></button>
                                <iframe width="460" height="230" src="//www.youtube.com/embed/L61p2uyiMSo?mute=1&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" tabindex="-1" __idm_id__="417793"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};
const Backdrop = ({ embedId, isBackdrop, backdropHandler }) => {
    return (
        <>
            {
                isBackdrop &&
                <section onClick={backdropHandler} className="backdrop"></section>
            }
        </>
    );
};
const VideoModel = ({ embedId, isBackdrop, backdropHandler }) => {
    return (
        <>
            {ReactDom.createPortal(
                <Video
                    embedId={embedId}
                    isBackdrop={isBackdrop}
                    backdropHandler={backdropHandler}
                />, document.getElementById('video__modals'))
            }

        </>
    );
};

export default VideoModel;