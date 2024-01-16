/* onclick to each button to pull up embedded video - do i need to make separate onclick functions. */
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

function videoPlayer(id){
    fetch(`/video/${id}`)
    .then((response) => {
        console.log(id)
       info = response.json()
       console.log(info)
       return info
    })
    .then((info) => {
      
        const videoPlayer = document.getElementById("dials")
        const video = info.video
       const Player = document.createElement("iframe")
       videoPlayer.appendChild(Player)
       Player.src = video
      
    })

    .catch((error) => {
        console.log(error)
    })
}