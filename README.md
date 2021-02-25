# WeTube | Youtube Cloning Project

`Vanilla JS`로 유튜브의 핵심 기능들을 만들어보자!

[프로젝트 링크](https://tranquil-castle-40182.herokuapp.com/)

![image](https://user-images.githubusercontent.com/67461578/109142575-60f4df00-77a2-11eb-932c-ef5feb0a2f17.png)

---

Youtube Clone with `VanillaJS`, `NodeJS`, `ExpressJS`, `Pug`, `MongoDB`, `Webpack`

## 1. 프로젝트에서 느낀 것
- **Front-End**
  - `HTML`의 대용으로 사용한 `Pug`는 정말 신선했다. `layout`, `mixin`, `partials`, `module`등 기존 `HTML`에서는 알 수 없었던 많은 것들을 알게되었다.
  - `Pug`의 `layout`, `mixin` 덕분에 중복되는 코드들을 대폭으로 줄였고, 시간을 많이 절약할 수 있었다. 👍
  - `CSS`만 사용하다가 `SCSS`를 사용해보니 진짜 말도 안되게 편했다!
  - `Webpack`을 사용했는데, 아무런 배경지식 없이 밑바닥부터 `webpack.config.js`파일을 세팅하려니 정말 힘들었다 😭. `Webpack`세팅 자체만 대략 3일 걸린 것 같다. 그러나 직접 사용해보니 정말 프론트엔드에 있어서 안되는 도구라고 느꼈다.
  - Custom Video Player를 만들었는데, 막상 해보니 그저 스타일링만 하면 되었다. 상상이상으로 간단해서 놀랐다.
  - 모바일 환경을 잘 고려하지 못했던 점이 아쉬웠다. 모바일 환경을 정말 잘 고려해야 된다는 점을 각인시킨 계기가 되었다.
- **Back-End**
  - `Express.js` framework를 백엔드에 사용했다. 이전까지는 제대로 된 back-end를 구현해본적이 한 번도 없었기에 `Router`, `middleware` 등의 컨셉이 정말 생소했다.
  - `Router`를 사용해보면서 그동안 살면서 의문이었던 URL의 '/'로 구분지어진 것들의 정체가 `Router`라는 것을 알게되었다..
  - `middleware`는 정말 최고였다. request-response 사이에 내가 원하는 기능을 마음대로 넣을 수 있었는데, 이것이 정말 크게 다가왔다.
  - 개발하는데 있어서, 앱에 있어서 정말 좋은 `middleware`들이 오픈소스로 올려져 있었다. `helmet`, `bodyParser`, `morgan` 등을 정말 유용하게 사용했다.
  - `mongoDB`를 사용했다! 이전에는 `mysql`을 잠깐 만져본적이 있었는데, `SQL`과 `NOSQL`의 차이에 대해 알게되었다. 개인적으로 `NOSQL`이 정말 편한 것 같다. 😄
  - 로그인/회원가입 기능에는 `Passport.js`를 사용했는데, 너무나 충격적이었다. 로그인/회원가입 기능을 `PHP`를 잠깐 배울때 밑바닥부터 하드코딩한 기억이있는데, 그 괴로움에서 완전히 해방된 기분이었다.
  - `Facebook` 로그인 기능을 보안 문제때문에 사용하지 못했다는 점이 너무 아쉽다.
  - `Dotenv`라는 도구 자체가 정말 신기했다. 예상치 못했던 중요한 보안 문제를 정말 간단하게 해결해주었다.
- **Deploy**
  - Photo, Video 저장을 위해 `AWS S3`를 사용했다. 파일 저장하는데 있어서는 최고의 서비스인것 같다! ~무엇보다도 저렴하다~
  - 나머지 Comment, User 정보 등은 `MongoDB Atlas`를 사용했는데, JS 세팅에서 정말 애먹었다. 😭
  - 배포 자체는 `Heroku`를 이용했다. `Github`처럼 이용하면 되었기에 간단했다!

## Pages

- [x] Home
- [x] Join
- [x] Login
- [x] Search
- [x] User Detail
- [x] Edit Profile
- [x] Change Password
- [x] Upload
- [x] Video Detail
- [x] Edit Video

## Todo List

- [x] ~_Study little_ **`NodeJS`**~ **(Complete)**

- [x] ~_Using_ **`Babel`** _for_ **`ES6`**~ **(Complete)**

- [ ] Study and Using **`ExpressJS`**

  - [x] ~_Routers_~ **(Complete)**
  - [x] ~_Middlewares_~ **(Complete)**
  - [x] ~_Study and Using_ **`Pug`**~ **(Complete)**
    - [x] ~_Layouts_~ **(Complete)**
    - [x] ~_Partials_~ **(Complete)**
    - [x] ~_Local Variables_~ **(Complete)**
    - [x] ~_Template Variables_~ **(Complete)**
  - [ ] Study and Using **`MVC Pattern`**
    - [x] ~_Make Frame of Model_~ **(Complete)**
    - [x] ~_Make Frame of View_~ **(Complete)**
    - [x] ~_Make Frame of Controller_~ **(Complete)**
    - [ ] Complete creating Model
    - [x] ~_Complete creating View_~ **(Complete)**
    - [ ] Complete creating Controller
  - [ ] Session for Login

- [x] ~_Study and Using_~ **`MongoDB`** **(Complete)**

  - [x] ~_Connect to `MongoDB`_~ **(Complete)**
  - [x] ~_Upload & Create Video_~ **(Complete)**
  - [x] ~_Delete Video_~ **(Complete)**
  - [x] ~_Search Video Using Regular Expression_~ **(Complete)**

- [x] Study and Using **`Webpack`**

  - [x] What is `Webpack`???
  - [x] Apply `Webpack` to Project

- [x] User Authentication (maybe **`PassportJS`**)
  - [x] Github Login
  - [x] Facebook Login
- [x] Custom Video Player
  - [x] Play / Pause
  - [x] Mute / Unmute
  - [x] Fullscreen
  - [x] Timestamp
  - [x] Volume Bar
- [x] Video Recording

- [x] Comment

- [x] **PUBLISH!!**
