<script setup>
import Header from "../components/Header.vue";

function artistCards(id) {
  fetch(`http://localhost:3000/artists/${id}`)
    .then((response) => {
      let info = response.json();
      return info;
    })

    .then((info) => {
      console.log(info);

      const cardParagraph = document.getElementById("paragraph");
      const cardLink = document.getElementById("link");
      const cardImage = document.getElementById("image");
      const cardArtist = document.getElementById("name");
      cardParagraph.innerHTML = info.bio;
      cardLink.href = info.spotify;
      cardImage.src = info.image;
      cardArtist.innerHTML = info.artist;
      cardLink.innerHTML = `Take a Look`;
    })

    .catch((error) => {
      console.log(error);
    });
}

function no() {
  document.getElementById("name").innerHTML = "";
  document.getElementById("image").src =
    "https://static.vecteezy.com/system/resources/previews/001/826/199/original/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg";
  document.getElementById("paragraph").innerHTML = "";
}
</script>

<template>
  <div class="main-container">
    <Header></Header>
    <div class="computer-container">
      <div class="border-container">
        <div class="container">
          <div class="card" id="card" @mouseleave="no()">
            <div class="face face1">
              <div class="content" id="content">
                <i class="fab fa-windows"></i>
                <h3 id="name">Want to see more?</h3>
                <img id="image" />
              </div>
            </div>
            <div class="face face2">
              <div class="content" id="content">
                <p id="paragraph"></p>
                <a id="link" type="button">Choose an Artist</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="keyboard-container">
      <div class="buttons">
        <button @click="artistCards(1)"></button>
        <button @click="artistCards(2)"></button>
        <button @click="artistCards(3)"></button>
        <button @click="artistCards(4)"></button>
        <button @click="artistCards(5)"></button>
        <button @click="artistCards(6)"></button>
        <button @click="artistCards(7)"></button>
        <button @click="artistCards(8)"></button>
        <button @click="artistCards(9)"></button>
        <button @click="artistCards(10)"></button>
        <button @click="artistCards(11)"></button>
        <button @click="artistCards(12)"></button>
        <button @click="artistCards(13)"></button>
        <button @click="artistCards(14)"></button>
        <button @click="artistCards(15)"></button>
        <button @click="artistCards(16)"></button>
        <button @click="artistCards(17)"></button>
        <button @click="artistCards(18)"></button>
        <button @click="artistCards(19)"></button>
        <button @click="artistCards(20)"></button>
        <button @click="artistCards(21)"></button>
        <button @click="artistCards(22)"></button>
        <button @click="artistCards(23)"></button>
        <button @click="artistCards(24)"></button>
        <button class="enter"></button>
        <button class="space"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  height: 100vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  border: solid 2px;
  align-items: center;
  row-gap: 10px;
}

.computer-container{
/* border:solid 2px black; */
display: flex;
height:500px;
width:1000px;
justify-content: center;
align-items:center;
}

.border-container{
  /* border:solid 2px black; */
  display:flex;
  height:410px;
  width: 950px;
  align-items: center;
  justify-content: center;
  background-color: #333;
}

.container {
  position: relative;
  display:flex;
  flex-wrap: wrap;
}

.container .card {
  position: relative;
}

.container .card .face {
  width: 925px;
  height: 200px;
  transition: 0.4s;
}
.face1 {
  overflow: hidden;
}

.container .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-content:center;
  align-items: center;
  z-index: 1;
  transform: translateY(0px);
}

.container .card:hover .face.face1 {
  transform: translateY(0);
  box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
    0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
  overflow: visible;
}

.container .card .face.face1 .content {
  opacity: 0.2;
  transition: 0.5s;
  text-align: center;
  font-size: 20px;
  position:relative;
  top:40px;
}
.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content i {
  font-size: 3em;
  color: white;
  display: inline-block;
}

.container .card .face.face1 .content h3 {
  color: white;
  position: relative;
  top: -40px;
}
.container .card .face.face1 .content img {
  position: relative;
  top: -40px;
  height: 200px;
  width: 400px;
}
.container .card .face.face1 .content img::before {
  overflow: hidden;
}
.container .card .face.face1 .content a {
  transition: 0.5s;
}

.face2{
  overflow: hidden;
}

.container .card .face.face2 {
  position: relative;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-200px);
}

.container .card:hover .face.face2 {
  transform: translateY(0);
}

.container .card .face.face2 .content p,
a {
  font-size: 20px;
  margin: 0;
  padding: 0;
  color: #333;
  position: relative;
  bottom: -30px;
}

.container .card .face.face2 .content a {
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  outline: 1px dashed #333;
  padding: 5px;
  margin: 15px 0 0;
  display: inline-block;
  position: relative;
  left: 350px;
  bottom:-20px;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: whitesmoke;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.keyboard-container{
 border:solid 2px;
 height:250px;
}

button {
  height: 50px;
  width: 75px;
  border-radius: 10px;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
  width: 950px;
  height: 320px;
  /* row-gap: 5px; */
  column-gap: 5px;
}
.enter {
  width: 310px;
}
.space {
  width: 1000px;
}
</style>
