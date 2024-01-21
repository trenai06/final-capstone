<script setup>

    import Header2 from "../components/Header2.vue";

</script>

<template>
<div class="main-container">
    <Header2></Header2>
    <div class="table">
        <div class="container">
            <h1> Interpolation</h1>
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
                    <td class="local">DJ Alli</td>
                    <td class="blank"></td>
                    <td class="local"> DJ Alli</td>
                </tr>
                <tr>
                    <td class="header">1:00 p.m.</td>
                    <td class="local">Trombone Alli Presents</td>
                    <td class="blank"></td>
                    <td class="local">Trombone Alli Presents</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="break">2:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="headliner">Durand Jones & The Indications</td>
                    <td class="blank"></td>
                    <td class="headliner">The CooLots</td>
                </tr>
                <tr>
                    <td class="header"> 3:00 p.m.</td>
                    <td colspan="4" class="break"> Break</td>
                </tr>
                <tr>
                    <td class="break">4:00 p.m.</td>
                    <td class="local">Dizzy Dreamer</td>
                    <td class="blank"></td>
                    <td class="local">Va Va Vixens</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">5:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local">The Jesse Lees</td>
                    <td class="blank"></td>
                    <td class="local">The Jesse Lees</td>
                </tr>
                <tr>
                    <td class="break">6:00 p.m.</td>
                    <td class="headliner">Thundercat</td>
                    <td class="blank"></td>
                    <td class="headliner">Steve Lacy</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">7:00 p.m.</td>
                    <td colspan="4" class="break">Break</td>
                </tr>
                <tr>
                    <td class="break">8:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local">Rhythm Science Sound</td>
                    <td class="blank"></td>
                    <td class="local">AfroPosh</td>
                </tr>
                <tr>
                    <td class="header">9:00 p.m. (2hr)</td>
                    <td class="headliner">Childish Gambino</td>
                    <td class="blank"></td>
                    <td class="headliner">Megan Thee Stallion</td>
                    <td class="blank"></td>
                </tr>

            </table>
        </div>
        <div class="container" id="two">
            <h1>Concatenation</h1>
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
                    <td class="local">DJ Bombshell</td>
                    <td class="blank"></td>
                    <td class="local">Rhythm Science Sound</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">1:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local">The Louisville Living Room</td>
                    <td class="blank"></td>
                    <td class="local">The Louisville Living Room</td>
                </tr>
                <tr>
                    <td class="break">2:00 p.m.</td>
                    <td class="headliner">The Seratones</td>
                    <td class="blank"></td>
                    <td class="headliner">BJ the Chicago Kid</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">3:00 p.m.</td>
                    <td colspan="4" class="break"> Break</td>  
                </tr>
                <tr>
                    <td class="break">4:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="local">Va Va Vixens</td>
                    <td class="blank"></td>
                    <td class="local">Kiana & the Sun Kings</td>
                </tr>
                <tr>
                    <td class="header">5:00 p.m.</td>
                    <td class="local">Kiana & the Sun Kings</td>
                    <td class="blank"></td>
                    <td class="local">FoxBat</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="break">6:00 p.m.</td>
                    <td class="blank"></td>
                    <td class="headliner">Leon Bridges</td>
                    <td class="blank"></td>
                    <td class="headliner">The Internet</td>
                </tr>
                <tr>
                    <td class="header">7:00 p.m.</td>
                    <td colspan="4" class="break">Break</td>
                </tr>
                <tr>
                    <td class="break">8:00 p.m.</td>
                    <td class="local">AfroPosh</td>
                    <td class="blank"></td>
                    <td class="local">DJ Syimone</td>
                    <td class="blank"></td>
                </tr>
                <tr>
                    <td class="header">9:00 p.m. (2hr)</td>
                    <td class="blank"></td>
                    <td class="headliner">H.E.R</td>
                    <td class="blank"></td>
                    <td class="headliner">Durand Bernarr</td>
                </tr>
            </table>
        </div>
    </div>         
    
</div>
</template>

<style scoped>

.main-container{
    display:flex;
    flex-direction: column;
    height:100vh;  
    background-color: black;
}

.table{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height:900px;
    background-color: rgb(50, 50, 139);
}

.container{
    color:white;
    display:flex;
    flex-direction: column;
    align-items: center;
    height:775px;
    width:850px;
    background-color:rgba(76, 0, 130, 0.485);
}
.Interpolation, .Concatenation{
    width:800px;
    height:650px;
    text-align:center;
}

td{
    font-size: 20px;
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