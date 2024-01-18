<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import router from "@/router";
import { RouterLink } from "vue-router";

const tooltips = document.querySelectorAll('.all-tooltips .tooltip')
const container = document.querySelector('.container')
let timeoutId
let isTooltip = false


function contentPosition(){
    tooltips.forEach(tooltip => {
        const entry = tooltip.querySelector('.title')
        const content = document.getElementById('tooltip-content')
        content.style.left = entry.offsetLeft  + 'px'
    })
}



contentPosition()


function enableTooltips(tooltipindex){
    tooltips.forEach((tooltip, index) => {
        if(index != tooltipindex){
            tooltip.classList.add('enabled')
            tooltip.classList.remove('disabled')
        }
    })
}

function disableTooltips(tooltipindex){
    tooltips.forEach((tooltip, index) => {
        if(index != tooltipindex){
            tooltip.classList.add('disabled')
        tooltip.classList.remove('enabled')
        }
    }) 
}


tooltips.forEach((tooltip, index) =>{
    const entry = tooltip.querySelector('.title')
    const content = tooltip.querySelector('.tooltip-content')
    entry.addEventListener('mousemove', () => {
        if(isTooltip === false){
            tooltip.classList.add('active')
            isTooltip = true
            disableTooltips(index)
        } 
    })
    entry.addEventListener('mouseleave', () => {
        enableTooltips(index)
        timeoutId = setTimeout(() => {
            isTooltip = false
            tooltip.classList.remove('active')
            
        } ,100)
    })
    content.addEventListener('mousemove', () => {
        if(isTooltip === false){
            isTooltip = true
        clearTimeout(timeoutId)
        tooltip.classList.add('active');
        disableTooltips(index)
        }
    })
    content.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            isTooltip = false
            tooltip.classList.remove('active')
            enableTooltips(index)
        } ,100)
})
})
</script>

<template>
    <Header></Header>
    <div class="main-container">
        <div class="ear-container">
            <div class="handle-left"></div>
            <div class="ears-left"></div>
            <div class="ear-cushion-left"></div>
            <div class="container">
                <div class="all-tooltips">
                    <div class="divone cell" id="cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divtwo cell">
                <div class="tooltip tooltip-2"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divthree cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divfour cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divfive cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divsix cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divone cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divtwo cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divthree cell"><div class="tooltip tooltip-1"> 
                <h1 id="title" class="title">1</h1>
                <div class="tooltip-content" id="tooltip-content">
                    <div class="content">
                        <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                        <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                    </div>
                </div>
            </div></div>
            <div class="divfour cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divfive cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divsix cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divone cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divtwo cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divthree cell">
                <div class="tooltip tooltip-1"> 
                <h1 id="title" class="title">1</h1>
                <div class="tooltip-content" id="tooltip-content">
                    <div class="content">
                        <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                        <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                    </div>
                </div>
            </div></div>
            <div class="divfour cell">
                <div class="tooltip tooltip-1"> 
                <h1 id="title" class="title">1</h1>
                <div class="tooltip-content" id="tooltip-content">
                    <div class="content">
                        <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                        <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                        <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                    </div>
                </div>
            </div></div>
            <div class="divfive cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divsix cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divone cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divtwo cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divthree cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divfour cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divfive cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divsix cell">
                <div class="tooltip tooltip-1"> 
                    <h1 id="title" class="title">1</h1>
                    <div class="tooltip-content" id="tooltip-content">
                        <div class="content">
                            <img src="https://www.billboard.com/wp-content/uploads/media/childish-gambino-press-2013-650.jpg?w=650" alt="childish">
                            <p id="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, architecto accusamus. Amet, perferendis reprehenderit commodi eligendi natus atque mollitia. Illo!</p>
                            <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe"> <h1>Take A Listen!</h1> </a>
                        </div>
                    </div>
                </div>
            </div>
        


                </div>
            </div>
            <div class="ear-cushion-right"></div>
            <div class="ears-right"></div>
            <div class="handle-right"></div>
        </div>
    </div>












</template>

<style scoped>
.ear-container{
    display:flex; 
    justify-content:center;
   align-items: center;
}

.handle-left{
    border:solid 2px;
    width:90px;
    height:500px;
    border-radius: 50px 0px 50px 50px;
    display:flex;
    position: relative;
    top:160px;
}

.ears-left{
    position:relative;
    border: solid 2px black; 
    height: 300px; 
    width: 200px; 
    border-radius: 70px 10px 10px 70px; 
}

.ear-cushion-left{ 
    position: relative; 
    border: solid black 2px; 
    height: 300px; 
    width: 50px; 
    border-left:0px; 
    border-radius: 10px 10px 10px 10px;
}

.ears-right{ 
    position: relative; 
    border: solid 2px black; 
    height: 300px; 
    width:200px; 
    border-radius: 10px 70px 70px 10px; 
}

.ear-cushion-right{
    position: relative;
    border: solid black 2px; 
    height: 300px; 
    width: 50px; 
    border-right: 0px; 
    border-radius: 10px 10px 10px 10px; 
}

.handle-right{
    border:solid 2px black;
    height: 500px; 
    width:90px;
    border-radius: 0px 50px 50px 50px;
    display:flex;
    position: relative;
    top:160px;
}

.all-tooltips{
  /* position:absolute; */
    height: 700px;
    width: 1000px;
    display: grid;
    grid-template-columns: 225px 225px 225px 225px;
    grid-template-rows: 100px 100px 100px 100px 100px 100px;
    justify-content: center;
    align-content: end;
    
}
.tooltip-content{
  position: absolute;
  /* left:10px;
  top: 50px; */
  background-color: darkblue;
  color:white;
  box-shadow: 0px 0px 20px white;
  padding:30px;
  border-radius: 8px;
  width:20vw;
  height:25vw;
  opacity:0;
  z-index: 1;
}

.disabled{
  pointer-events: none;
}

.enabled{
  pointer-events: all;
}

.title:hover{
  animation: puls-effect .5s ease-in-out ;
  border:solid 2px black;
  background-color:black;
  color: white;
}

@keyframes puls-effect {
  0%{
    transform:scale(1);
    opacity: 1;
  }
  100%{
    transform: scale(3);
    opacity: 0;
  }
}
.content img{
  height:200px;
  width:300px;
}

.tooltip.active .tooltip-content{
  opacity:1;
  pointer-events:all;
}


.divone{
  /* background-color: red; */
}

.cell{
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px black;
}

.divtwo{
  /* background-color: blue; */
}

.divthree{
  /* background-color: yellow; */
}

.divfour{
  /* background-color: purple; */
}

.divfive{
  /* background-color: green; */
}

.divsix{
  /* background-color: orange; */
}

.tooltip{
  position:relative;

}


</style>