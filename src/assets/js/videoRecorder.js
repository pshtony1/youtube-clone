const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const pauseBtn = document.getElementById("jsPauseBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = (e) => {
  const { data: videoFile } = e;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

const stopRecording = () => {
  videoRecorder.stop();
  streamObject.getTracks().forEach((track) => track.stop());
  recordBtn.removeEventListener("click", stopRecording);
  pauseBtn.removeEventListener("click", handlePause);
  recordBtn.addEventListener("click", getVideo);
  recordBtn.innerHTML = '<i class="fas fa-circle"></i>';
  pauseBtn.style.display = "none";
};

const handlePause = () => {
  if (videoRecorder.state === "recording") {
    videoRecorder.pause();
    pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else if (videoRecorder.state === "paused") {
    videoRecorder.resume();
    pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
  pauseBtn.addEventListener("click", handlePause);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    videoPreview.srcObject = stream;
    videoPreview.play();
    videoPreview.muted = true;
    recordBtn.innerHTML = '<i class="fas fa-stop"></i>';
    pauseBtn.style.display = "block";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = '<i class="fas fa-bug"></i>';
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
};

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}
