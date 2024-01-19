<script setup>
    import { ref } from "vue";
    import Header from "../components/Header.vue";

    function getSchedule(){
        fetch("http://localhost:3000/schedule")
        .then((response) => {
           let info = response.json()
            return info
        })
        .then((info) => {
            console.log(info)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function byDay(day){
        
        fetch(`http://localhost:3000/schedule/${day}`)
        .then((response) => {
            let info = response.json()
            return info
        })

        .then((info) => {
            const container = document.getElementById("interpolation")
            
            const artist = document.createElement("h1")
          const time = document.createElement("p")
           const stage = document.createElement("p")

           artist.innerHTML = info[5].artist
           time.innerHTML = info[5].time
           stage.innerHTML - info[5].stage

           container.appendChild(artist)
           container.appendChild(time)
           container.appendChild(stage)
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    function byStage(stage){
        fetch(`http://localhost:3000/${stage}/stage`)
        .then((response) => {
            let info = response.json()
            return info
        })

        .then((info) => {
            console.log(info)
        })

        .catch((error) => {
            console.log(error)
        })
    }

    function getType(type){
        fetch(`http://localhost:3000/schedule/${type}`)
        .then((response) => {
            let info = response.json()
            return info
        })
        .then((info) => {
            console.log(info)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    // I need to just display boxes on click and then create a function to
    // display the day schedule 
    
    function displayDays(){
        const dayContainer = document.getElementById("day")
        const thursday = document.createElement("button")
        const friday = document.createElement("button")
        const saturday = document.createElement("button")
        const sunday = document.createElement("button")
        const topCont = document.createElement("div")
        const bottomCont = document.createElement("div")

    
        thursday.classList.add("button")
        friday.classList.add("button")
        saturday.classList.add("button")
        sunday.classList.add("button")
        topCont.classList.add("topCont")

        thursday.style.height = "50px"
        friday.style.height = "50px"
        saturday.style.height = "50px"
        sunday.style.height = "50px"

        thursday.style.width = "100px"
        friday.style.width = "100px"
        saturday.style.width = "100px"
        sunday.style.width = "100px"
       
        thursday.setAttribute('onclick', 'addclick()') 
      
        friday.onclick = byDay("Friday")
        saturday.onclick = byDay("Saturday")
        sunday.onclick = byDay("Sunday")
        
        dayContainer.innerHTML = ""
        thursday.innerText = "Thursday"
        friday.innerText = "Friday"
        saturday.innerText = "Saturday"
        sunday.innerText = "Sunday"

        topCont.appendChild(thursday)
        topCont.appendChild(friday)
        bottomCont.appendChild(saturday)
        bottomCont.appendChild(sunday)

        dayContainer.appendChild(topCont)
        dayContainer.appendChild(bottomCont)
    }

    function addClick(){
        byDay("Thursday")
    }
    

</script>

<template>
<div class="main-container">
    <Header></Header>

    <div class="stage-container">
        <div class="Interpolation" id="interpolation">
            <h1>Interpolation</h1>
        </div>

        

        <div class="Concatenation" id="concatenation">
            <h1>Concatenation</h1>

        </div>
    </div>
    <div class="choices">
            <div class="top">
                <div class="day" id="day" @click="displayDays()"> <p>By Day</p></div>
                <div class="stage" id="stage"> <p>By Stage</p></div>
            </div>
            <div class="bottom">
                <div class="headliner" id="headliner"> By Headliner</div>
                <div class="local" id="local"> By Local</div>
            </div>

        </div>


</div>


</template>

<style scoped>

.main-container{
    display:flex;
    flex-direction: column;
    height:100vh;
}

.stage-container{
    display:flex;
    justify-content: center;
    column-gap: 50px;
    
}
.Interpolation{
    border:solid 2px;
    height: 500px;
    width: 500px;

}

.choices{
    /* border: solid 2px black; */
    height:800px;
    width:1785px;
    display:flex;
    flex-direction: column;
    row-gap: 10px;
    
}

.top{
    /* border:solid 2px; */
    height: 150px;
    display:flex;
    justify-content: center;
    column-gap: 10px;
  
}
.day{
    border:solid 2px;
    height:150px;
    width:250px;
    display:flex;
    flex-direction: column;
    row-gap: 10px;
    
    justify-content: center;
    align-items: center;
}

.stage{
    display: flex;
    border:solid 2px;
    height: 150px;
    width: 250px;
    justify-content: center;
    align-items: center;
}
.bottom{
    /* border:solid 2px; */
    height:150px;
    display:flex;
    justify-content: center;
    column-gap: 10px;
}

.headliner{
    display:flex;
    border: solid 2px;
    height:150px;
    width: 250px;
    justify-content: center;
    align-items: center;
}

.local{
    display:flex;
    border:solid 2px; 
    height: 150px;
    width: 250px;
    justify-content: center;
    align-items: center;
}
.Concatenation{
    border:solid 2px;
    height: 500px; 
    width: 500px;
}





</style>