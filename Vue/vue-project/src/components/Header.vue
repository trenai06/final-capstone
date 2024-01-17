<script setup>

</script>

<template>
<div class="navbar">
        <div class="menu left">
            <div class="left-dropdown">
                <div>Home</div>
                <div>General Info</div>
               <div>Artists</div>
                <div>Schedule</div>
                <div>Theme</div>
                <div>Sponsors</div>

            </div>
        </div>
        <div class="knob">
            <!-- <h3 class="knob-label">/</h3> -->
            <div class="knob-center">
                <h3 class="knob-label">/</h3>
            </div>
        </div>
        <div class="screen">
            <div class="screen-border"> <h1> SoWork Music Festival </h1></div>
        </div> 
        <div class="knob">
            <div class="knob-center">
                <h3 class="knob-label">/</h3>
            </div>
        </div>
        <div class="menu right"></div>

    </div>
</template>

<style scoped>
.navbar {
  border: solid 2px black;
  height: 200px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
}

.menu {
  border: solid 2px black;
  height: 100px;
  width: 100px;
  border-radius: 30px;
  margin-top: 10px;
  animation-name: light;
  animation-duration: 1s;
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
  top: 103px;
  left: 5px;
  flex-direction: column;
  z-index: 1;
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

.knob {
  border: solid 2px black;
  height: 75px;
  width: 75px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 68px;
  background-color: black;
}

.knob-center {
  border: solid 2px black;
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

/* Check the color. black border and gray/white screen. gray border with black screen. ?????*/
.screen {
  border: solid 2px black;
  width: 1000px;
  height: 150px;
  border-radius: 50px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
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
  color: greenyellow;
  background-color: darkgray;
}




</style>