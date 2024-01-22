<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar">
    <div class="menu left">
      <div class="left-dropdown">
        <div><RouterLink to="/">Home</RouterLink></div>
        <div><RouterLink to="/general">General Info</RouterLink></div>
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
      <div direction="up" class="screen-border" scrollamount="5">
        <h1>SoWork Music Festival</h1>
    </div>
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

.navbar {
  border: solid 2px black;
  height: 200px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width:100vw;
  background-color: #074a6b;
}

.menu {
  border: solid 10px black;
  height: 100px;
  width: 100px;
  border-radius: 30px;
  margin-top: 10px;
  animation-name: light;
  animation-duration: 2s;
}

.left {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.left-dropdown {
  display: none;
  position: absolute;
  top: 118px;
  left: 5px;
  flex-direction: column;
  z-index: 3;
  cursor: pointer;
}

.left-dropdown div {
  display: block;
  border: solid 2px black;
  height: 100px;
  width: 200px;
  background-color: black;
  color: darkgray;
  font-size: 30px;
  text-align: center;
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
  height: 90px;
  width: 90px;
  display: flex;
  margin-top: 80px;
  justify-content: center;
  align-items: center;
}
.knob {
  border: solid 2px lightgray;
  height: 75px;
  width: 75px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
}

.knob-center {
  border: solid 2px gray;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  display: flex;
  font-size: 40px;
  background-color: lightgray;
}

.knob-label {
  position: relative;
  left: 20px;
  bottom: 31px;
}

.screen {
  border: solid 2px gray;
  width: 1000px;
  height: 150px;
  border-radius: 50px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.screen-border {
  border: solid 2px black;
  height: 130px;
  width: 980px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pixelify Sans", sans-serif;
  color:#012638;
  background-color: gray;
  font-size: 40px;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
}
</style>