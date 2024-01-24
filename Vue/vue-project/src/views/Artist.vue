<script setup>
import Header3 from "../components/Header3.vue";
import  { ref } from "vue"

let artists = ref([])

function artistsCard(){
  fetch('http://localhost:3000/artists')
  .then((response) => {
    let info = response.json()
    return info
  })
  .then((info) => {
    console.log(info)
    artists.value.push(...info)
    console.log(artists)
  })

}
artistsCard()

</script>

<template>
    <div class="top-container">
      <Header3></Header3>
      <div class="intro">
        <p>Take a look at our Lineup for this year!</p>
        <p> We are featuring some big names, plus some local favs from Louisville, Ky!</p>
      </div>
    </div>
    <div class="main-container">
  
        <div class="container" v-for="artist in artists">
          <div class="card" id="card">
            <div class="face face1">
              <div class="content" id="content">
                <h3 id="name"> {{ artist.artist }}</h3>
                <img id="image" :src=artist.image >
              </div>
            </div>
            <div class="face face2">
              <div class="content" id="content">
                <p id="paragraph"> {{ artist.bio }}</p>
                <a id="link" :href=artist.spotify>Click to see more!</a>
              </div>
            </div>
          </div>
        </div> 
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.main-container{
  display: flex;
  flex-wrap: wrap;
 justify-content: center;
  column-gap: 80px;
  background-color:rgb(163, 4, 163);
  font-family:'Bebas Neue', sans-serif ;
}

.intro{
  border: solid 2px rgb(163, 4, 163);
  height: 60px;
  z-index: 0;
  background-color:rgb(163, 4, 163);
  text-align: center;
  font-family:'Bebas Neue', sans-serif ;
  font-size: 40px;
}
.container {
  position: relative;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  height:635px;
}

.container .card {
  position: relative;
}

.container .card .face {
  width: 700px;
  height: 350px;
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
  transform: translateY(150px);
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
  position:relative; 
}

.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content h3 {
  color: white;
  position: relative;
  top: 50px;
  font-size: 60px;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
}

.container .card .face.face1 .content img {
  height: 350px;
  width: 450px;
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
  background: rgb(62, 199, 199);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-200px);
  text-align: center;
}

.container .card:hover .face.face2 {
  transform: translateY(0);
  
}

.container .card .face.face2 .content p{
  font-size: 25px;
  position: relative;
  bottom:-30px;
}

.container .card .face.face2 .content a {
  text-decoration: none;
  color: black;
  padding: 5px;
  position: relative;
  font-size: 30px;
  bottom:-15px;
  border:solid 2px black;
  background-color: black;
  -webkit-text-stroke: white;
  -webkit-text-stroke-width: 1px;
  border-radius: 10px;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: whitesmoke;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
