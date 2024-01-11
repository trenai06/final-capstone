/* onclick to each button to pull up embedded video - do i need to make separate onclick functions. */
const tooltips = document.querySelectorAll('.all-tooltips .tooltip')
const container = document.querySelector('.container')
let timeoutId

function dGlover() {
    const videoPlayer = document.getElementById("dials")
    videoPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/VYOjWnS4cMY?autoplay=1&mute=1">`  
}

function contentPosition(){
    tooltips.forEach(tooltip => {
        const entry = tooltip.querySelector('.title')
        const content = document.getElementById('tooltip-content')
        content.style.left = entry.offsetLeft  + 'px'
    })
}

contentPosition()

tooltips.forEach(tooltip =>{
    const entry = tooltip.querySelector('title')
    const content = tooltip.querySelector('.tooltip-content')
    entry.addEventListener('mousemove', () => {
        tooltip.classList.add('active');
    })
    entry.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            tooltip.classList.remove('active')
        } ,100)
    })
    content.addEventListener('mousemove', () => {
        clearTimeout(timeoutId)
        tooltip.classList.add('active');
    })
    content.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
            tooltip.classList.remove('active')
        } ,100)
})
})

/* Artists (Headliners)
1. Childish Gambino 
2. durand jones
3. Leon Bridges
4. Moonchild 
5. H.E.R
6. Durand Bernarr
7. Steve Lacy
8. Megan the Stallion
9. The Internet
10. BJ the Chicago Kid
11. The Seratones
12. The Coolots


(Local)
1. Foxbat
2. Dizzy Dreamer 
3. Poet series
4. DJ Alli 
5. DJ Bombshell
6. Rythym Science Sound 
7. Salem Vytch Tryells
8. Va Va Vixens
9. Kiana and the Sun Kings 
10. The Jesse Lees
11. Open mic hour
12. Dj doro & Dj Exklusive

*/