<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar">
    <div class="menu left">
      <p> MENU </p>
      <div class="left-dropdown">
        <div><RouterLink to="/">Home</RouterLink></div>
        <div><RouterLink to="/general">Registration</RouterLink></div>
        <div><RouterLink to="/artist">Artists</RouterLink></div>
        <div><RouterLink to="/schedule">Schedule</RouterLink></div>
        <div><RouterLink to="/sponsors">Sponsors</RouterLink></div>
      </div>
    </div>
    <div class="knob-outer">
      <div class="knob">
        <div class="knob-center">
          <h3 class="knob-label">/</h3>
        </div>
      </div>
    </div>
    <div class="screen">
      <marquee direction="up" class="screen-border" scrollamount="5">
        <h1>SoWork Music Festival</h1>
        <h1>January 25 - 28, 2024</h1></marquee>
    </div>
    <div class="knob-outer">
      <div class="knob">
        <div class="knob-center">
          <h3 class="knob-label">/</h3>
        </div>
      </div>
    </div>
    <div class="menu right"></div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pixelify+Sans&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.navbar {
  border: solid 2px darkgray;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  width:100vw;
}

.menu {
  border: solid 10px black;
  height: 85px;
  width: 85px;
  border-radius: 30px;
  animation-name: light;
  animation-duration: 2s;
  font-family:'Bebas Neue', sans-serif;
  font-size: 45px;
}

.left {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-content: center;
  align-items: center;
}

.left-dropdown {
  display: none;
  position: absolute;
  top: 85px;
  left: 5px;
  flex-direction: column;
  z-index: 3;
  cursor: pointer;
}

.left-dropdown div {
  display: flex;
  flex-direction: column;
  border: solid 2px black;
  height: 75px;
  width: 200px;
  border-radius: 50px;
  background-color: gray;
  color: black;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  font-family: "Pixelify Sans", sans-serif;
}

.left:hover .left-dropdown {
  display: block;
}

.left,
.right {
  background-color: rgb(131, 14, 76);
}

.left:hover,
.right:hover {
  background-color: rgb(241, 24, 183);
}

@keyframes light {
  from {
    background-color: rgb(131, 14, 76);
  }
  to {
    background-color: rgb(241, 24, 183);
  }
}

.knob-outer {
  background-color: black;
  border-radius: 50px;
  height: 75px;
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.knob {
  border: solid 2px lightgray;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
}

.knob-center {
  border: solid 2px gray;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  display: flex;
  font-size: 40px;
  background-color: lightgray;
}

.knob-label {
  position: relative;
  left: 15px;
  bottom: 28px;
  font-size: 40px;
}

.screen {
  border: solid 2px gray;
  width: 725px;
  height: 125px;
  border-radius: 50px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.screen-border {
  border: solid 2px black;
  height: 100px;
  width: 700px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pixelify Sans", sans-serif;
  color: rgb(172, 255, 47);
  background-color: gray;
  font-size: 30px;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
}
</style>
