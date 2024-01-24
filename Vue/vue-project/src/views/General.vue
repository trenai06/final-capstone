<script setup>
import { ref } from "vue";
import Header4 from "../components/Header4.vue";

import image from "../assets/My_MP3_Code.jpg";

let forms = ref([])

function formSubmission() {
  let firstname = document.getElementById("firstname").value
  let lastname = document.getElementById("lastname").value
  let email = document.getElementById("email").value
  let phone = document.getElementById("phone").value
  let city = document.getElementById("city").value
  let state = document.getElementById("state").value
  forms.value.push(firstname)
  forms.value.push(lastname)
  forms.value.push(email)
  forms.value.push(phone)
  forms.value.push(city)
  forms.value.push(state)
  console.log(forms)
}

function qR() {
  let container = document.getElementById("container");
  let imageContainer = document.getElementById("qr");
  let summaryContainer = document.getElementById("summary")
  container.classList.add("hide");
  imageContainer.classList.remove("hide");
  // imageContainer.classList.add("display");
  imageContainer.classList.add("summary")
  summaryContainer.classList.remove("hide");
  summaryContainer.classList.add("summary")
}
</script>

<template>
  <div class="main-container">
    <Header4></Header4>
     
    <div class="container" id="container">
        <div class="name">
            <div class="first">
                <label for="firstname"> First Name </label>
                <input type="text" id="firstname" />
            </div>
            <div class="last">
                <label for="lastname"> Last Name </label>
                <input type="text" id="lastname" />
            </div>
        </div>
        <div class="details">
            <div class="email">
                <label for="email">Email Address</label>
                <input type="text" id="email">
            </div>
            <div class="phone">
                <label for="phone">Phone Number</label>
                <input type="text" id="phone">
            </div>

        </div>
            <div class="address">
                <div class="city">
                    <label for="city">City</label>
                    <input type="text" id="city">
                </div>
                <div class="state">
                    <label for="state"> State</label>
                    <input type="text" id="state">
                </div>
            </div>
        
      <button @click="qR(),formSubmission()">Register</button>
    </div>
    <div class="hide" id="summary" >
      <div class="sum-one">
        <h1> {{ forms[0] }} {{ forms[1] }}</h1>
      </div>
      <div class="sum-two">
        <h1>{{ forms[2] }}</h1> 
      </div>
      <div>
        <h1>{{ forms[3] }}</h1>
      </div>
      <div class="sum-three">
        <h1>{{ forms[4] }} {{ forms[5] }} </h1> 
      </div>
      <div class="hide" id="qr">
        <h1>Thank you for registering {{ forms[0] }}!</h1>
        <h1>Scan the code for a little treat!</h1>
      <img :src="image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.main-container {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  font-size: 30px;
  height:100vh;
  background-image:linear-gradient(to right, rgb(163, 8, 163) 40%, rgb(0, 153, 255), rgb(23, 214, 211));
  padding-bottom: 30px;
  font-family: 'Bebas Neue', sans-serif;
}
.container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 1000px;
  height: 700px;
  background-color:white;
  color: black;
  font-family: 'Bebas Neue', sans-serif;
}
.container input {
  height: 30px;
  border: 5px solid #494eea;
  outline: 0;
  padding: 10px;
  margin: 10px 0 20px;
  border-radius: 5px;
  width: 300px;
  font-size: 20px;
}
.container button {
  width: 60%;
  height: 50px;
  background: black;
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 20px 0;
  font-size: 30px;
  font-family: 'Bebas Neue', sans-serif;
}

img {
  height: 350px;
  width: 350px;
  border: solid 10px black;
  border-radius: 100px;
}

.hide {
  display: none;
}

.name, .details, .address{
    display:flex;
    column-gap:50px;
}

.first, .last, .email, .phone, .city, .state{
    display:flex;
    flex-direction: column;
    column-gap: 20px;
    align-items: center;
}
.sum-three{
  display:flex;
  flex-direction: row;
}
.summary{
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  background-color: white;
  padding: 10px;
}


</style>
