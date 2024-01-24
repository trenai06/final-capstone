<script setup>
    import { ref } from "vue"
    import Header2 from "../components/Header2.vue";

    let schedule = ref([])

    fetch("http://localhost:3000/schedule")
    .then ((response) => {
      let info = response.json()
        console.log(info)
        return info
    })
    .then ((info) => {
        schedule.value.push(...info)
        console.log(schedule)
    })

    .catch ((error) => {
        console.log(error)
    })
    

</script>

<template>
<div class="main-container">
    <Header2></Header2>
    <div class="table">
        <div class="container">
            <h1> Interpolation Stage</h1>
            <table class="Interpolation">
                <tr> 
                    <th class="blank"></th>
                    <th class="header"> Thursday </th>
                    <th class="break"> Friday </th>
                    <th class="header"> Saturday </th>
                    <th class="break"> Sunday </th>
                </tr>

                <tr>
                    <th></th>
                    <th colspan="4"></th> 
                </tr>
                <tr>
                    <td class="break">12:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[16].artist }}</td>
                    <td class="blank"></td>
                    <td class="local"> {{schedule[31].artist}}</td>
                </tr>
                <tr>
                    <td class="header">1:00 p.m.</td>
                    <td class="local">{{schedule[9].artist}}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[39].artist}}</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="break">2:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[18].artist }}</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[33].artist }}</td>
                </tr>
                <tr>
                    <td class="header"> 3:00 p.m.</td>
                    <td colspan="4" class="break"> Break</td>
                </tr>
                <tr>
                    <td class="break">4:00 p.m.</td>
                    <td class="local">{{schedule[11].artist}}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[26].artist }}</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">5:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[20].artist }}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[35].artist }}</td>
                </tr>
                <tr>
                    <td class="break">6:00 p.m.</td>
                    <td class="headliner">{{ schedule[13].artist }}</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[28].artist }}</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">7:00 p.m.</td>
                    <td colspan="4" class="break">Break</td>
                </tr>
                <tr>
                    <td class="break">8:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[22].artist }}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[37].artist }}</td>
                </tr>
                <tr>
                    <td class="header">9:00 p.m. (2hr)</td>
                    <td class="headliner">{{ schedule[15].artist }}</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[30].artist }}</td>
                    <td class="blank"></td>
                </tr>

            </table>
        </div>
        <div class="container" id="two">
            <h1>Concatenation Stage</h1>
            <table class="Concatenation">
                <tr>
                    <th class="blank"></th>
                    <th class="header">Thursday</th>
                    <th class="break"> Friday </th>
                    <th class="header"> Saturday </th>
                    <th class="break"> Sunday </th>
                </tr>
                <tr>
                    <th></th>
                    <th colspan="4"></th>
                </tr>
                <tr>
                    <td class="break">12:00 p.m.</td>
                    <td class="local">{{ schedule[8].artist }}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[24].artist }}</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">1:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[17].artist }}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[32].artist }}</td>
                </tr>
                <tr>
                    <td class="break">2:00 p.m.</td>
                    <td class="headliner">{{ schedule[10].artist }}</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[25].artist }}</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">3:00 p.m.</td>
                    <td colspan="4" class="break"> Break</td>  
                </tr>
                <tr>
                    <td class="break">4:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local"> {{ schedule[19].artist }}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[34].artist }}</td>
                </tr>
                <tr>
                    <td class="header">5:00 p.m.</td>
                    <td class="local">{{ schedule[12].artist }}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[27].artist }}</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="break">6:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[21].artist }}</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[36].artist }}</td>
                </tr>
                <tr>
                    <td class="header">7:00 p.m.</td>
                    <td colspan="4" class="break">Break</td>
                </tr>
                <tr>
                    <td class="break">8:00 p.m.</td>
                    <td class="local">{{ schedule[14].artist }}</td>
                    <td class="blank"></td>
                    <td class="local">{{ schedule[29].artist }}</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">9:00 p.m. (2hr)</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[23].artist }}</td>
                    <td class="blank"></td>
                    <td class="headliner">{{ schedule[38].artist }}</td>
                </tr>
            </table>
        </div>
    </div>         
    
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.main-container{
    display:flex;
    flex-direction: column;
    height:100vh;  
    background-color:rgb(30, 30, 30);
    font-family: 'Bebas Neue', sans-serif;
}

.table{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height:900px;
   
}

.container{
    color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    height:800px;
    width:850px;
    background-color:black;
    
}

.container h1{
     font-size: 40px;
}
.Interpolation, .Concatenation{
    width:825px;
    height:680px;
    text-align:center;
}

td{
    font-size: 30px;
}

th{
    font-size: 30px;
}

h1{
    font-size:40px;
}

.headliner{
    background-color:#7270DD;
}
.local{
    background-color: #50bfdbe3;
}
.break{
    background-color: #6F9CDC;
    color:black;
}

.header{
    background-color: #3173D7;
    color:black;
}

.blank{
    background-color: #A6E4DD;
}
</style>