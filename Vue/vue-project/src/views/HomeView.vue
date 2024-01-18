<script setup>

import { ref } from "vue";
import Header from "../components/Header.vue";

function videoPlayer(id){
    fetch(`http://localhost:3000/video/${id}`)
    .then((response) => {
        console.log(id)
       let info = response.json()
       console.log(info)
       return info
    })
    .then((info) => {
        const videoPlayer = document.getElementById("dials")
        videoPlayer.innerHTML = ""
        const video = info.video
       const Player = document.createElement("iframe")
       Player.style.width = "750px";
       Player.style.border = "solid 10px gray"
       videoPlayer.appendChild(Player)
       Player.src = video
    })
    .catch((error) => {
        console.log(error)
    })
}
</script>

<template>
 <div class="main-container"> 
  <Header></Header>
  <div class="middle-container"> 
    <div class="deck">
        <div class="disk">
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
    <div class="board">
        <div class="dials" id="dials">
            
        </div>
    <div class="artists">
      <div class="board-lights">
       
        <div class="status"> 
                    <label class="switch">
                      
                        <input type="checkbox">
                        
                        <div class="slider round">
                          
                        </div>
                    </label>
        </div>
    
        <div class="lights"><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button><button></button></div>
        <div class="status"> 
                    <label class="switch">
                        <input type="checkbox">
                        <div class="slider round">
                         
                        </div>
                    </label>
        </div>
      </div>
      
      <div class="artist-button">
       <button class="one a button" @click="videoPlayer(1)"> <div class="cover"> <p>Childish Gambino</p></div> </button>
       <button class="two b button" @click="videoPlayer(2)"><div class="cover"><p>Durand Jones & the Indications</p></div></button>
       <button class="three c button" @click="videoPlayer(3)"><div class="cover"><p>Leon Bridges</p></div></button>
       <button class="four d button" @click="videoPlayer(4)"><div class="cover"><p>Thundercat</p></div></button>
       <button class="five e button" @click="videoPlayer(5)"><div class="cover"><p>H.E.R.</p></div></button>
       <button class="six f button" @click="videoPlayer(6)"><div class="cover"><p>Durand Bernarr</p></div></button>
       <button class="seven b button" @click="videoPlayer(7)"><div class="cover"><p>Steve Lacy</p></div></button>
       <button class="eight e button" @click="videoPlayer(8)"><div class="cover"><p>Megan Thee Stallion</p></div></button>
       <button class="nine c button" @click="videoPlayer(9)"><div class="cover"><p>The Internet</p></div></button>
       <button class="ten a button" @click="videoPlayer(10)"><div class="cover"><p>BJ the Chicago Kid</p></div></button>
       <button class="eleven d button" @click="videoPlayer(11)"><div class="cover"><p>The Seratones</p></div></button>
       <button class="twelve f button" @click="videoPlayer(12)"><div class="cover"><p>The CooLots</p></div></button>
       </div>
    </div>
    </div>
    <div class="deck">
        <div class="disk">
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

.main-container {
  /* height: 100vh; */
  
  display: flex;
  flex-direction: column;
  border: solid 5px black;
  background-color: rgba(0, 0, 0, 0.75);
}

.middle-container {
  display: flex;
  flex-direction: row;
  border: solid 5px black;
  height: 741px;
}

.deck {
  border: solid 2px darkgray;
  display: flex;
  flex-grow: 1.5;
  justify-content: center;
  align-items: center;
}


.board {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 741px;
  flex-basis: 800px;
}
.board-lights{
  display: flex;
  /* border:solid 2px darkgray; */
  justify-content: center;
  align-items: center;
  column-gap:20px;
  padding: 10px;
 
}

.cover{
  border:solid 2px black;
  height: 84px;
  width:160px;
  border-radius: 10px;
  background-color: black;
  display:flex; 
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap:0;
  color: white;
  font-size: 25px;
}

.cover p{
  display:none;
}

.cover:hover p{
  display: contents;

  
}
.dials {
  border: solid 10px black;
  height: 250px;
  display:flex; 
  align-content: center;
  justify-content: center;
  background-color: gray;
  
}

.artists {
  border: solid 2px darkgray;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  flex-wrap: wrap;
  height: 550px;
  /* row-gap: 50px; */
  justify-content: center;
 
}

.artist-button{
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

.knob{
  height: 70px;
  width: 70px;
  border-radius: 50px;
  border:solid 2px black;
  display:flex;
  justify-content: center;
  align-items: center;
}

.knob-center{
  border:solid 2px black;
  height:50px;
  width:50px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}

.knob-label{
  border: solid 2px black; 
  height: 40px;
  width:10px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.label-center{
  border:solid 2px black; 
  height: 33px;
  width: 4px;
  background-color: black;
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

.one {
font-size: 0;
}

.one:hover{
  font-size: 50px; 
}
.button{
  height: 100px;
  width: 175px; 
  border-radius: 10px;
  display:flex;
  justify-content: center;
  align-items: center;
}

button {
  height: 100px;
  width: 10px;
  background-color: greenyellow;
}

.panel {
  border: solid 2px darkgray;
  width: 200px;
  height: 500px;
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
  transition:transform 10s;
  background-color: black;
}

.disk:hover{
  transform:rotate(1080deg);
}

.sowork{
  display:flex;
  column-gap: 5px;
 position: relative;
 top:-30px;
}

.center {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: solid 2px darkgray;
  background-color:rgb(84, 83, 83);
}

.letter{
  display: flex;
  width: 30px;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  color: white;
  position: relative;
  top:-10px;
}

.outer{
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: solid 5px darkgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top:-10px;
  background-color: rgba(255, 0, 0, 0.66);
}

.lights{
  display:flex;
  justify-content: space-evenly;
  /* border:solid 2px; */
  flex-grow: 2;
}
.switch{
    position: relative; 
    display: flex;
    width: 100px; 
    height: 10px;
    border: solid 2px; 
    justify-content: center; 
}

.switch input{
    opacity: 0;
    width: 0; 
    height: 0; 
}

.slider{
    position: absolute;
    cursor: pointer; 
    top: 0;
    left: 0; 
    right: 0; 
    bottom: 0; 
    background-color: black; 
    -webkit-transition: .4s; 
    transition: .4s;  
}

.slider:before{
    position: absolute;
    content: "";
    height: 50px; 
    width: 12px; 
    left: 4px; 
    bottom: -20px; 
    background-color: lightgray;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider{
    background-color: yellowgreen;
}

input:focus + .slider{
    box-shadow: 0 0 1px black;
}

input:checked + .slider:before{
    -webkit-transform: translateX(70px);
    -ms-transform: translateX(70px);
    transform: translateX(70px);  
}

.slider-center{
  
  height: 20px;
}

/* some animation where the lights light up individually and some som animation on load that lights up all the lights and spins the disks */

</style>
