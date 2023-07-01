# Coconut Music 🎵
<div align="center">
<img width="220px" src="https://github.com/eee0930/coconut/assets/37135523/4848eff1-217c-4fc7-a163-675c2ab26a0a" />
</div>



## Deployment
**github pages:** [https://eee0930.github.io/coconut](https://eee0930.github.io/coconut)

<br><br>



## Project Info
### Coconut Music을 만든 사람

|[송화연](https://github.com/eee0930)|TMI|
| :-: | - |
|<img src="https://avatars.githubusercontent.com/u/37135523?v=4" width=150px><br />|- 프론트엔드 개발자를 지망하고 있습니다 👩‍💻<br />- 바닐라 자바스크립트로 코딩하는 것을 좋아합니다 🍨 <br />- 그림그리기와 영상찍기가 취미입니다 🎨<br />- 사람들과 잘 어울리는 INTP 😙<br />- 물리학을 전공했습니다 🐈‍⬛<br />- 새로운 지식과 문제를 분석하는 것을 좋아합니다 🔍|

### 개발 기획안
[https://placid-tortoise-06c.notion.site/Coconut-Music-17582c5e421b4e1ca283498e224d8dec?pvs=4](https://placid-tortoise-06c.notion.site/Coconut-Music-17582c5e421b4e1ca283498e224d8dec?pvs=4)

### 목표
<ol>
  <li>유튜브에서 듣고싶은 음악을 검색하여 영상으로 음악을 듣는대신 나의 플레이리스트를 만들어 영상없이 원하는 음악을 들을 수 있도록 구현</li>
  <li>다른 사람이 만든 플레이리스트로 주제별 음악을 들을 수 있도록 구현</li>
  <li>검색을 통해 원하는 음악, 가수, 앨범을 찾을 수 있도록 구현</li>
  <li>나의 플레이리스트를 직접 만들어 다른 사람들이 나의 음악을 들을 수 있도록 구현</li>
  <li>Reactjs 프론트엔드 페이지와 Nodejs를 이용한 서버 연결 연습</li>
  <li>API와 DB를 모두 이용하여 데이터를 출력하기 연습</li>
</ol>

### 작업기간
- **기획:** 2023-06-21 ~ 2023-06-25 
- **개발:** 2023-06-25 ~ 
- **업데이트 및 버그수정:** 


<br><br>



## Getting Started 🏃‍♀️
### Requirements
For building and running the application you need:
- [npm](https://www.npmjs.com/package/npm/v/9.2.0)

### Installation
``` bash
$ git clone https://github.com/eee0930/coconut.git
$ cd netflix_clone
$ code .
```

### How to run
- Change the `REACT_APP_MOVIE_API_KEY` on the `.env.example` file.
- Click on `View` -> `Terminal`.
- Run 
```
$ npm install
$ npm start
```

### How to deploy
- Change the `homepage` on the `package.json` file.
```
$ npm run deploy
```


<br><br>



## Stacks 📚
### Libraries & Languages
<div>
<img src="https://img.shields.io/badge/TypeScript-444444?style=for-the-badge&logo=typescript&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/React-333333?style=for-the-badge&logo=React&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-018EF5?style=for-the-badge&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white"/>
<img src="https://img.shields.io/badge/Framer Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white"/>
</div>

### Config
<div>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
</div>

### Environment
<div>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</div>

### Management & Communication
<div>
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>
</div>

<br><br>



## Screens and Key Features 🎬
<div>
<h3>전세계적으로 인기있는 음악들을 매일 제공</h3>
<div>
<h4>skills & issues</h4>
<ol>
  <li>movies, tv show, weekly trends 화면에서 재사용할 수 있도록 slider를 compoenent로 나눔</li>
  <li>component가 destroy되거나 render 될 떄 효과를 줄 수 있는 AnimationPresence를 이용하여 slider가 넘어가는 효과를 줌. 
  slider의 key를 index라는 number type으로 주고 slider를 넘기는 버튼을 클릭하면 index가 변화되도록 함. 
  index가 바뀌면 reactjs는 새로운 slider가 생성되었다고 생각하여 slider 애니메이션 효과를 줄 수 있음.</li>
  <li>slider 버튼을 빠르게 두번 클릭하면 slider가 destroy 되기 전에 새로운 slider가 render 되어 버려서 component contents가 꼬여버리는 버그가 생김.
  slider가 움직이고 있다는 의미를 가진 leaving이라는 state를 정의하고, AnimatePresence의 onExitComplete prop을 사용하여 leaving이 true인 동안은 버튼이 동작하지 않게 구현
  </li>
  <li>화면을 리렌더링했을 때 components가 render 되어서 버튼을 클릭하지 않았는데도 slider 애니메이션 효과가 나타나는 버그가 생김.
  AnimatePresence에 initial prop을 이용하여 initail 값을 false로 설정하여 해결함.
  </li>
</ol>
</div>

<h3>나만의 플레이리스트로 랜덤, 한곡 플레이 등 있을 건 다 있는 플레이어</h3>
<div></div>

<h3>다른 사람이 만든 플레이리스트로 주제별 음악을 들을 수 있음</h3>
<div></div>

<h3>검색을 통해 원하는 음악, 가수, 앨범을 찾을 수 있음</h3>
<div></div>

<h3>귀엽고 키치한 디자인 ✨</h3>
<div></div>
</div>
<br><br>



## Architecture

### Directory structure
```bash
 ┣ apis : 데이터를 가져올 api 페치 파일들
 ┣ components
 ┃ ┗ mixins : 데이터 값을 넣어야하며 여러 페이지에서 사용할 컴포넌트들
 ┣ layout : 레이아웃
 ┣ routes : route 변경에 따라 가져올 컴포넌트 페이지들
 ┣ services : DB 또는 api에서 가져온 데이터들을 가공하는 코드 파일들
 ┣ utils
 ┃ ┣ components : 공통적으로 사용할 컴포넌트 스타일
 ┃ ┣ data : default로 화면에 보여줄 데이터들
 ┃ ┗ screens : route 페이지 스타일
 ┣ App.tsx
 ┣ Router.tsx
 ┣ atoms.tsx
 ┗ index.tsx
 ```