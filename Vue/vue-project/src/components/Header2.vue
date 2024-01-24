<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbar">
    <div class="menu left">
      <p>MENU</p>
      <div class="left-dropdown">
        <div><RouterLink to="/">Home</RouterLink></div>
        <div><RouterLink to="/general">Registration</RouterLink></div>
        <div><RouterLink to="/artist">Artists</RouterLink></div>
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
      <div class="screen-border"><h1>Schedule</h1></div>
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
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.navbar {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  background-color: rgb(30, 30, 30);
}

.menu {
  border: solid 10px black;
  height: 70px;
  width: 70px;
  border-radius: 30px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 30px;
  background-color: gray;
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
  top: 75px;
  flex-direction: column;
  z-index: 1;
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
  color: #012638;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  font-family: "Pixelify Sans", sans-serif;
}

.left:hover .left-dropdown {
  display: block;
}

.knob-outer {
  background-color: black;
  border-radius: 50px;
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.knob {
  border: solid 2px lightgray;
  height: 55px;
  width: 55px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
}

.knob-center {
  border: solid 2px gray;
  height: 45px;
  width: 45px;
  border-radius: 50px;
  display: flex;
  background-color: lightgray;
}

.knob-label {
  position: relative;
  left: 15px;
  bottom: 25px;
  font-size: 35px;
}

.screen {
  border: solid 2px gray;
  width: 715px;
  height: 85px;
  border-radius: 50px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.screen-border {
  border: solid 2px black;
  height: 70px;
  width: 700px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pixelify Sans", sans-serif;
  color: white;
  background-color: gray;
  font-size: 40px;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
}
</style>
