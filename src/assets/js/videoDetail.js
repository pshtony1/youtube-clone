// href = routes.editVideo(video.id);

import routes from "../../routes";

const editBtn = document.getElementById("video-editBtn");
const descBtn = document.querySelector(".video__desc-btn");
const desc = document.querySelector(".video__description");
const id = document.getElementById("video__hidden-id");

function init1() {
  editBtn.addEventListener("click", () => {
    window.location.href = routes.editVideo(id.innerText);
  });
}

function init2() {
  descBtn.addEventListener("click", () => {
    if (desc.classList.contains("hide")) {
      descBtn.innerText = "Hide";
    } else {
      descBtn.innerText = "More";
    }

    desc.classList.toggle("hide");
  });
}

if (descBtn) {
  init2();
}

if (editBtn) {
  init1();
}
