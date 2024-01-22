<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";

import image from "../assets/My_MP3_Code.jpg";
// function qrCode(){
//     const reqBody = {
//         "frame_name": "bottom-frame",
//         "qr-code-text": "www.google.com",
//         "image_format": "SVG"
//     }
//   fetch("https://api.qr-code-generator.com/v1/create?access-token=asUuN2YZIA42MrvPAFfjdQqErcD_0FQVGt0veF05YpvR0qZgGh5VPuC9mbFKUc0L", {
//     headers: {
//         body: JSON.stringify(reqBody),
//         method: "POST",

//     }
//   })
//   .then((response) => {
//   let info = response.json()
//     console.log(info)
//   return info
//   })
// }

function qR() {
  let container = document.getElementById("container");
  let imageContainer = document.getElementById("qr");
  container.classList.add("hide");
  imageContainer.classList.remove("hide");
  imageContainer.classList.add("display");
}
</script>

<template>
  <div class="main-container">
    <Header></Header>
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
        
      <button @click="qR()">Register</button>
    </div>
    <div class="hide" id="qr">
      <h1>Thank you for registering. Scan the code for a little treat!</h1>
      <img :src="image" />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: white;
}


.hide {
  display: none;
}

.container input {
  height: 30px;
  border: 1px solid #494eea;
  outline: 0;
  padding: 10px;
  margin: 10px 0 20px;
  border-radius: 5px;
  width: 500px;
  font-size: 20px;
}
.container button {
  width: 100%;
  height: 50px;
  background: #494eea;
  color: #fff;
  border: 0;
  outline: 0;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 20px 0;
  font-weight: 500;
}

img {
  height: 500px;
  width: 500px;
}

.display {
  display: flex;
  flex-direction: column;
  align-items: center;
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



</style>
