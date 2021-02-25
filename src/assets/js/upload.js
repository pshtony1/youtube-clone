const fileLabel = document.getElementById("fileLabel");
const fileLabelSpan = document.getElementById("fileLabelSpan");
const fileLabelIcon = document.getElementById("fileLabelIcon");
const inputFile = document.getElementById("file");

const avatarLabel = document.getElementById("avatarLabel");
const avatarLabelSpan = document.getElementById("avatarLabelSpan");
const avatarLabelIcon = document.getElementById("avatarLabelIcon");
const avatarFile = document.getElementById("avatar");

function changeLabel(e) {
  fileLabel.classList.add("uploaded");
  fileLabel.classList.remove("not-uploaded");
  fileLabelIcon.classList.add("fas");
  fileLabelIcon.classList.remove("far");
  fileLabelSpan.innerText = e.target.files[0].name;
  fileLabel.style.border = "none";
  fileLabel.style.backgroundColor = "#ea232c";
  fileLabelSpan.style.color = "white";
  fileLabelIcon.style.color = "white";
}

function changeAvatarLabel(e) {
  avatarLabel.classList.add("uploaded");
  avatarLabel.classList.remove("not-uploaded");
  avatarLabelIcon.classList.add("fas");
  avatarLabelIcon.classList.remove("far");
  avatarLabelSpan.innerText = e.target.files[0].name;
  avatarLabel.style.border = "none";
  avatarLabel.style.backgroundColor = "#ea232c";
  avatarLabelSpan.style.color = "white";
  avatarLabelIcon.style.color = "white";
}

if (fileLabel) {
  inputFile.addEventListener("change", changeLabel);
}

if (avatarLabel) {
  avatarFile.addEventListener("change", changeAvatarLabel);
}
