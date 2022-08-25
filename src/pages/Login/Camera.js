import React, { useRef, useState, useEffect } from 'react';
import Webcam from "react-webcam";

const Camera = () => {
    const [imageSource, setImageSource] = useState();

    // let videoRef = useRef(null)
    // let photoRef = useRef(null)

    // // getting user Camere 

    // const getUserCamera = () => {
    //     navigator.mediaDevices.getUserMedia({
    //         video: true
    //     })
    //         .then((stream) => {
    //             //attach the stream to the video tag 
    //             let video = videoRef.current;
    //             video.srcObject = stream
    //             video.play()
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }

    // // taking picture 
    // const takePicture = () => {
    //     const width = 200
    //     const height = 150

    //     let video = videoRef.current

    //     let photo = photoRef.current

    //     photo.width = width

    //     photo.height = height

    //     let ctx = photo.getContext('2d')

    //     ctx.drawImage(video, 0, 0, width, height)

    // }

    // // clear image 
    // const clearImage = () => {
    //     let photo = photoRef.current

    //     let ctx = photo.getContext('2d')

    //     ctx.clearRect(0, 0, photo.width, photo.height)
    // }

    // useEffect(() => {
    //     getUserCamera()
    // }, [videoRef])

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };

    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImageSource(imageSrc)
        }, [webcamRef]
  );

    return (
        <div>

            {/* <div className='flex justify-center mt-16'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <video ref={videoRef}></video>
                        <div className="card-actions justify-end">
                            <button onClick={takePicture} className="btn btn-primary">Snap</button>
                        </div>
                    </div>
                </div>
            </div> */}
            
            {/* <div className='flex justify-center my-16'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <canvas ref={photoRef}></canvas>
                        <div className="card-actions justify-end">
                            <button onClick={clearImage} className="btn btn-primary">clear</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='flex justify-center mt-16'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Webcam
                            audio={false}
                            height={720}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={1280}
                            videoConstraints={videoConstraints}
                        />
                        <div className="card-actions justify-end">
                            <button onClick={capture} className="btn btn-primary">Snap</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* captured photo */}
            <div className='flex justify-center my-16'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={imageSource} alt="captured" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Camera;