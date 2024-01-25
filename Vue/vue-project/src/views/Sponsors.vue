<script setup>
import { ref } from "vue";
import Header5 from "../components/Header5.vue";

let sponsors = ref([])

fetch("http://localhost:3000/sponsors")
.then((response) => {
    let info = response.json()
    console.log(info)
    return info
})

.then((info) => {
    sponsors.value.push(...info)
})
.catch((error) => {
    console.log(error)
})
</script>

<template>
    <div class="main-container">
<Header5></Header5>
<div class="thanks">
<h1>A very special thank you to all of our sponsors! None of this would be possible without your support.</h1>
</div>

<div class="container" v-for="sponsor in sponsors" >
    <div class="image">
        <img :src=sponsor.logo>
    </div>
    <div class="company">
        <h1>{{ sponsor.company }}</h1>
    </div>
    <div class="motto">
        <p>{{ sponsor.motto }}</p>
    </div>
</div>
</div>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.main-container{
    display:flex;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 20px;
    justify-content: center;
    background-color: rgb(45, 43, 43);
    font-family: "Bebas Neue", sans-serif;
}
.thanks{
    text-align: center;
    width:100vw;
    font-size: 30px;
    padding-left:10px;
    padding-right: 10px;
    color:white; 
}
.container{
    display:flex;
    flex-direction: column;
    border:solid 10px black;
    width: 450px;
    height:460px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    overflow: hidden;
    flex-wrap: wrap;
    text-align: center;
    background-color: black;
}

img{
    height: 200px;
    width:350px;
    border-radius: 20px;
}

.company{
    font-size: 22px;
    color:white;
    -webkit-text-stroke-color:black;
    -webkit-text-stroke-width: .1px;
}

.motto{
    font-size: 26px;
    width:400px;
    color:lightgray;
}

</style>