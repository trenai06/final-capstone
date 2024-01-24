<script setup>
import Header from "../components/Header.vue";

function videoPlayer(id) {
  fetch(`http://localhost:3000/video/${id}`)
    .then((response) => {
      console.log(id);
      let info = response.json();
      console.log(info);
      return info;
    })
    .then((info) => {
      const videoPlayer = document.getElementById("dials");
      videoPlayer.innerHTML = "";
      const video = info.video;
      const Player = document.createElement("iframe");
      Player.style.width = "775px";
      Player.style.height = "325px";
      Player.style.border = "solid 10px gray";
      videoPlayer.appendChild(Player);
      Player.src = video;
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<template>
  <div class="main-container">
    <Header></Header>
    <div class="middle-container">
      <div class="deck">
        <div class="disk" id="disk">
          <div class="sowork">
            <span class="letter">S</span>
            <span class="letter">o</span>
            <span class="letter">W</span>
            <span class="letter">o</span>
            <span class="letter">R</span>
            <span class="letter">K</span>
            <span class="letter">!</span>
          </div>
          <div class="outer">
            <div class="center"></div>
          </div>
        </div>
      </div>
      <div class="board">
        <div class="dials" id="dials"> 
          <h1>Featured Headliners</h1>
        <p>Click a button below to hear a sample!</p>
        </div>
        <div class="artists">
          <div class="board-lights">
            <div>
              <label class="switch">
                <input type="checkbox" />
                <div class="slider"></div>
              </label>
            </div>

            <div class="lights">
              <button></button><button></button><button></button>
              <button></button><button></button><button></button>
              <button></button><button></button><button></button>
              <button></button><button></button><button></button>
            </div>
            <div>
              <label class="switch">
                <input type="checkbox" />
                <div class="slider"></div>
              </label>
            </div>
          </div>

          <div class="artist-button">
            <button class="a button" @click="videoPlayer(1)">
              <div class="cover"><p>Childish Gambino</p></div>
            </button>
            <button class="b button" @click="videoPlayer(2)">
              <div class="cover"><p>Durand Jones & the Indications</p></div>
            </button>
            <button class="c button" @click="videoPlayer(3)">
              <div class="cover"><p>Leon Bridges</p></div>
            </button>
            <button class="d button" @click="videoPlayer(4)">
              <div class="cover"><p>Thundercat</p></div>
            </button>
            <button class="e button" @click="videoPlayer(5)">
              <div class="cover"><p>H.E.R.</p></div>
            </button>
            <button class="f button" @click="videoPlayer(6)">
              <div class="cover"><p>Durand Bernarr</p></div>
            </button>
            <button class="b button" @click="videoPlayer(7)">
              <div class="cover"><p>Steve Lacy</p></div>
            </button>
            <button class="e button" @click="videoPlayer(8)">
              <div class="cover"><p>Megan Thee Stallion</p></div>
            </button>
            <button class="c button" @click="videoPlayer(9)">
              <div class="cover"><p>The Internet</p></div>
            </button>
            <button class="a button" @click="videoPlayer(10)">
              <div class="cover"><p>BJ the Chicago Kid</p></div>
            </button>
            <button class="d button" @click="videoPlayer(11)">
              <div class="cover"><p>The Seratones</p></div>
            </button>
            <button class="f button" @click="videoPlayer(12)">
              <div class="cover"><p>The CooLots</p></div>
            </button>
          </div>
        </div>
      </div>
      <div class="deck">
        <div class="disk" id="disk">
          <div class="sowork">
            <span class="letter" id="s">S</span>
            <span class="letter" id="o">o</span>
            <span class="letter" id="w">W</span>
            <span class="letter" id="O">o</span>
            <span class="letter" id="r">R</span>
            <span class="letter" id="k">K</span>
            <span class="letter" id="l">!</span>
          </div>
          <div class="outer">
            <div class="center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.main-container {
  display: flex;
  flex-direction: column;
  border: solid 5px black;
  background-color:rgba(0, 0, 0, 0.904);
  height:100vh;
  font-family: 'Bebas Neue', sans-serif;
}

.middle-container {
  display: flex;
  flex-direction: row;
  border: solid 5px black;
  height:840px;
  
}

.deck {
  border: solid 2px darkgray;
  display: flex;
  flex-grow: 1.5;
  justify-content: center;
  align-items: center;
}

.disk {
  border: 2px solid darkgray;
  height: 400px;
  width: 400px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 10s;
  background-color: black;
  animation-name: spin;
  animation-duration: 5s;
}

.disk:hover {
  transform: rotate(500deg);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.sowork {
  display: flex;
  column-gap: 5px;
  position: relative;
  top: -30px;
}

.letter {
  display: flex;
  width: 30px;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  color: white;
  position: relative;
  top: -10px;
}

.outer {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: solid 5px darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -10px;
  background-color: rgba(255, 0, 0, 0.66);
}

.center {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: solid 2px darkgray;
  background-color: rgb(40, 39, 39);
}

.board {
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex-basis: 800px;
}

.dials {
  border: solid 10px black;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
}

.dials h1{
  font-size: 50px;
}

.artists {
  border: solid 2px darkgray;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  flex-wrap: wrap;
  justify-content: center;
}
.board-lights {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  padding: 10px;
}

.switch {
  position: relative;
  display: flex;
  width: 100px;
  height: 5px;
  border: solid 2px;
  justify-content: center;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 12px;
  left: 4px;
  bottom: -10px;
  background-color: lightgray;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: yellowgreen;
}

input:focus + .slider {
  box-shadow: 0 0 1px black;
}

input:checked + .slider:before {
  -webkit-transform: translateX(70px);
  -ms-transform: translateX(70px);
  transform: translateX(70px);
}

.lights {
  display: flex;
  justify-content: space-evenly;
  flex-grow: 2;
}

button {
  height: 40px;
  width: 15px;
  background-color: greenyellow;
}

.artist-button {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 10px;
  column-gap: 10px;
  border: solid 3px black;
  padding: 10px;
  height: 400px;
  align-items: center;
}

.a {
  background-color: darkblue;
}

.a:hover {
  background-color: rgb(39, 157, 248);
}

.b {
  background-color: green;
}

.b:hover {
  background-color: greenyellow;
}

.c {
  background-color: goldenrod;
}
.c:hover {
  background-color: yellow;
}

.d {
  background-color: darkred;
}

.d:hover {
  background-color: red;
}

.e {
  background-color: rgb(131, 14, 76);
}

.e:hover {
  background-color: rgb(241, 24, 183);
}

.f {
  background-color: goldenrod;
}

.f:hover {
  background-color: yellow;
}

.button {
  height: 100px;
  width: 175px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover {
  border: solid 2px black;
  height: 84px;
  width: 160px;
  border-radius: 10px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 0;
  color: white;
  font-size: 21px;
}
</style>
