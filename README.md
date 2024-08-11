# tic-tac-toe-game 실습

---

1. 초기 환경 구성

- vite custom 템플릿 활용

  ```
  npx degit https://github.com/soyeonpaark/vite-custom.git react-homework
  ```

   </br>

- 타입스크립트 속성 검사 패키지 다운

  ```
  pnpm add @types/prop-types -D
  ```

   </br>

- 파일 구성 진행

📦src
┣ 📂styles
┃ ┗ 📜main.css
┣ 📂tic-tac-toe
┃ ┣ 📂components
┃ ┃ ┣ 📂Board
┃ ┃ ┃ ┗ 📜Board.jsx
┃ ┃ ┣ 📂History
┃ ┃ ┃ ┗ 📜History.jsx
┃ ┃ ┣ 📂Sqaures
┃ ┃ ┃ ┗ 📜Squares.jsx
┃ ┃ ┗ 📂Status
┃ ┃ ┗ 📜Status.jsx
┃ ┣ 📜Game.jsx
┃ ┗ 📜constants.js
┗ 📜main.jsx

   </br>
