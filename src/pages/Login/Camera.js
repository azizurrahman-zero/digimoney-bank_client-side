import React, { useRef, useState, useEffect } from "react";

const Camera = () => {
  let videoRef = useRef(null);
  let photoRef = useRef(null);

  // getting user Camera

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        //attach the stream to the video tag
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // taking picture
  const takePicture = () => {
    const width = 200;
    const height = 150;

    let video = videoRef.current;

    let photo = photoRef.current;

    photo.width = width;

    photo.height = height;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, width, height);
  };

  // clear image
  const clearImage = () => {
    let photo = photoRef.current;

    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  return (
    <div>
      <div className="flex justify-center mt-16">
        <div class="card card-side bg-base-100 shadow-xl">
          <div class="card-body">
            <video ref={videoRef}></video>
            <div class="card-actions justify-end">
              <button onClick={takePicture} class="btn btn-primary">
                Snap
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* captured photo */}
      <div className="flex justify-center my-16">
        <div class="card card-side bg-base-100 shadow-xl">
          <div class="card-body">
            <canvas ref={photoRef}></canvas>
            <div class="card-actions justify-end">
              <button onClick={clearImage} class="btn btn-primary">
                clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
