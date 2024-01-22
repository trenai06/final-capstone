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
    <Header3></Header3>
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
                <a id="link" :href=artist.spotify>Take a Look!!</a>
              </div>
            </div>
          </div>
        </div> 
    </div>
</template>

<style scoped>

.main-container{
  display: flex;
  flex-wrap: wrap;
 justify-content: center;
  column-gap: 80px;
  background-color:rgb(163, 4, 163);
  
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
  width: 700px;
  height: 400px;
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
  transform: translateY(200px);
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

.container .card .face.face1 .content h3 {
  color: white;
  position: relative;
  top: 20px;
  font-size: 30px;
}
/* https://qrco.de/bejK25 */

.container .card .face.face1 .content img {
  position: relative;
  top: 20px;
  height: 450px;
  width: 550px;
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
  background: teal;
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
  color: #012638;
  position: relative;
  bottom: -50px;
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
  font-size: 30px;
  text-align: center;
  width:300px;
  left: 175px;
  bottom:-80px;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: whitesmoke;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
