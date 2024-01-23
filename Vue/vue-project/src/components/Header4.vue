<template>
     <div class="navbar">
    <div class="menu left">
      <div class="left-dropdown">
        <div><RouterLink to="/">Home</RouterLink></div>
        <div><RouterLink to="/artist">Artists</RouterLink></div>
        <div><RouterLink to="/schedule">Schedule</RouterLink></div>
        <div><RouterLink to="/sponsors">Sponsors</RouterLink></div>
      </div>
    </div>
    <div class="screen">
        <h1>REGISTRATION</h1>
    </div>
    <div class="menu right"></div>
  </div>

</template>

<style scoped>
.navbar {
  height: 200px;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width:100vw;
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
  top: 110px;
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
  background-color: black;
  color: darkgray;
  font-size: 30px;
  justify-content: center;
  align-items: center;
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

.screen {
  font-size: 50px;
  width: 1200px;
  height: 150px;
  border-radius: 50px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-text-stroke-color: white;
  -webkit-text-fill-color:transparent;
  -webkit-text-stroke-width: 2px;
}
</style>