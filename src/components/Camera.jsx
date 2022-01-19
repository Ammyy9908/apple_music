import React from 'react'
import "./Camera.css"
import {MdOutlineClear} from "react-icons/md"
import { connect } from 'react-redux';
import * as faceapi from 'face-api.js';
function Camera({setCamera}) {
    // const [video,setVideo] = React.useState(false);
    const [emotion,setEmotion] = React.useState(false);
    function OpenCamera(){
        var video = document.querySelector("#videoElement");
        


        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models')
        ]).then(startVideo)

        function startVideo(){
          if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
              .then(function (stream) {
                video.srcObject = stream;
              })
              .catch(function (error) {
                  console.log( error);
                console.log("Something went wrong!");
              });
          }
        }


        video.addEventListener('play', () => {
          const canvas = faceapi.createCanvasFromMedia(video)
          video.append(canvas)
          const displaySize = { width: 230, height: 345 }
          faceapi.matchDimensions(canvas, displaySize)
          setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
           
            const {expressions} = detections.length>0 && detections[0];
            console.log(expressions)
            const neutral = expressions ? expressions.neutral:0;
            const sad = expressions ? expressions.sad:0;
            const angry = expressions ? expressions.angry:0;
            const happy = expressions ? expressions.happy:0;
            const surprised = expressions ? expressions.surprised:0;
            const fearful = expressions ? expressions.fearful:0;

            const response = {happy:Math.round(happy),neutral:Math.round(neutral),sad:Math.round(sad),angry:Math.round(angry),surprised:Math.round(surprised),fearful:Math.round(fearful)};
            console.log(response)
            setEmotion(response)
           
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
            faceapi.draw.drawDetections(canvas, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
          }, 1000)
        })
    }

    React.useEffect(()=>{
        OpenCamera();
    },[])


    function stopCamera(){
     
        var video = document.querySelector("#videoElement");
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
              .then(function (mstream) {
                mstream.getTracks().forEach(function(track) {
                    track.stop();
                    video.srcObject = null;
                  });
                setCamera(false);
              })
              .catch(function (error) {
                  console.log( error);
                console.log("Something went wrong!");
              });
          }
    }
    return (
        <div className='camera'>
            <button className='camera_close' onClick={stopCamera}><MdOutlineClear/></button>
            <div className='emotion'>
                <span>{emotion && emotion.sad && "😥" || emotion.angry && "😠" || emotion.happy && "🤗" || emotion.neutral && "😐" || emotion.surprised && "😮" || emotion.response && "😱"}</span>
              </div>
            <video autoPlay playsInline muted id="videoElement">
              
            </video>
     
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setCamera:(is_camera)=>dispatch({type:'SET_CAMERA',is_camera})
})
export default connect(null,mapDispatchToProps)(Camera)
