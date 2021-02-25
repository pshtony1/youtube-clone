const profileCircle = document.querySelector(".header-profile-circle");
const profileInfo = document.querySelector(".profile-info");
const mediaSearchIcon = document.querySelector(".media-search-icon");
const mediaSearch = document.querySelector(".media-search-container");
const goBack = document.querySelector(".go-back");
const hoverContainers = document.querySelectorAll(
  ".videoBlock__hover-container"
);

const handleThumbnail = (e) => {
  console.log("thumb");
  const { target } = e;
  const video = target.querySelector("video");

  if (video.paused) video.play();
  else {
    video.pause();
    video.currentTime = 0;
  }
};

if (profileCircle) {
  profileCircle.addEventListener("click", () => {
    profileInfo.classList.toggle("no-active");
    profileInfo.classList.toggle("active");
  });
}

if (hoverContainers.length !== 0) {
  for (let i = 0; i < hoverContainers.length; i += 1) {
    hoverContainers[i].addEventListener("mouseenter", handleThumbnail);
    hoverContainers[i].addEventListener("mouseleave", handleThumbnail);

    const video = hoverContainers[i].querySelector("video");
    video.muted = true;
    video.defaultPlaybackRate = 1.3;
  }
}

mediaSearchIcon.addEventListener("click", () => {
  mediaSearch.classList.remove("no-active");
  mediaSearch.classList.add("active");
});

goBack.addEventListener("click", () => {
  mediaSearch.classList.add("no-active");
  mediaSearch.classList.remove("active");
});
