/* onclick to each button to pull up embedded video - do i need to make separate onclick functions. */
const tooltips = document.querySelectorAll('.all-tooltips .tooltip')
const container = document.querySelector('.container')
let timeoutId
let isTooltip = false

function dGlover() {
    const videoPlayer = document.getElementById("dials")
    videoPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/hZ0y76RQiuQ?si=vDuCarsgWCnrU545?autoplay=1&mute=1">`  
}

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


/* Artists (Headliners)
1. Childish Gambino 
   youtube: https://www.youtube.com/embed/VYOjWnS4cMY?autoplay=1&mute=1
   spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO4aKvZe
   image: https://media.wired.com/photos/5af2247165806b269bfe8dee/16:9/w_1612,h_907,c_limit/Glover_ProtestMusic_FA-TA.jpg
   bio: Childish Gambino is the alter ego of multi-hyphenate American entertainer Donald Glover, who is also known for acting roles on television shows like Community and Atlanta, 
    As Childish Gambino, Glover refined his off-kilter brand of hip-hop on his 2013 breakthrough album Because the Internet, before making a sharp turn toward R&B-inspired funk"

2. durand jones and the indications
   youtube: "https://www.youtube.com/embed/hZ0y76RQiuQ?si=vDuCarsgWCnrU545?autoplay=1&mute=1"
   spotify: https://open.spotify.com/playlist/37i9dQZF1DZ06evO450XKy
   image: https://www.independent.com/wp-content/uploads/2018/03/20/durandjones_andindeications.jpg
   bio: Durand Jones & The Indications are equally beloved for their energetic, joyous shows, dual lead singers, and thoughtful songwriting. From an Indiana basement 
   (where the band recorded their 2016 self-titled debut LP as college students), the band has catapulted into the soul limelight and onto an international stage.

3. Leon Bridges
youtube:src="https://www.youtube.com/embed/MTrKkqE9p1o?si=C0rSD9mLATiMknTQ?autoplay=1&mute=1" 
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO1ZjEyc
image:https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2020/02/Leon-Bridges-WEB.jpg
bio: Leon Bridges' first strides as a soul inspired R&B artist prompted comparisons to legends like Sam Cooke
    and Otis Redding, but he quickly came into his own as a top ten, Grammy Award winning, global touring artist. 

4.ThunderCat
youtube:https://www.youtube.com/embed/ormQQG2UhtQ?si=DDMIP5zgcSwX5pjO?autoplay=1&mute=1
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO2u2JnG
image:https://wsuguardian.com/wp-content/uploads/2020/05/thundercat-2.jpg
bio: Thundercat is the virtuoso bassist & singer Stephen Bruner, a mercurial talent and multi-GRAMMY award winner. 
The name Thundercat refers to the cartoon he's loved since childhood and an extension of his wide-eyed, vibrant, often superhuman approach to his craft.

5. H.E.R
youtube:https://www.youtube.com/embed/PAFAfhod9TU?si=HwbtQwivvCRRCj_e?autoplay=1&mute=1
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO2jCwrS
image:https://www.rappler.com/tachyon/2021/06/her-back-of-my-mind-june-album.jpg
bio: One of the most acclaimed R&B artists since 2016, the year her first EP found a rapt audience, H.E.R. has been celebrated for vulnerable yet assured 
love ballads and sharp protest songs alike. The singer/songwriter maximizes the power of her honeyed vocals as a simultaneously poetic and straightforward lyricist, 
shifts to convincing MC mode on a dime, and is also a guitarist and producer.

6. Durand Bernarr
youtube:https://www.youtube.com/embed/SX_mS60jaw8?si=D2rB5e71tQpRFizn&amp;start=10?autoplay=1&mute=1
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO1g1g3K
image:https://www.wepluggoodmusic.com/wp-content/uploads/2022/10/durand-bernarr-wanderlust.jpeg
bio:Born in Cleveland , Ohio, and based in Los Angeles, Durand has built a career performing with Erykah Badu and collaborating with the likes of the Internet, Anderson. Paak, 
Ari Lennox and Teedra Moses. His larger-than-life range is wrapped in a buttery-smooth voice that leaves you wanting just one (or one hundred) more sensual vocal runs.

7. Steve Lacy
youtube:https://www.youtube.com/embed/RC8u7RJe-TE?si=keY5aUFTNrFQD2wO&amp?autoplay=1&mute=1
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO30zJ7i
image:https://media.gq.com/photos/62b36cfc29911a9a17ab0aab/3:2/w_3227,h_2151,c_limit/STEVE_LACY_EDITED_v.crop-055.jpg
bio: Alternative R&B artist Steve Lacy is in a presumably small class of musicians who have co-produced a Grammy-nominated album while still in high school. Foremost a guitarist, 
singer, songwriter, and producer and A native of Compton, California, Lacy became interested in the guitar while attending church. His mother obliged him by buying him his first instrument and lining up lessons.


8. Megan the Stallion
youtube:https://www.youtube.com/embed/n5LWsc-qCdA?si=c73OSYKSk4pVWgkp&amp?autoplay=1&mute=1
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO0BEOzm
image:https://www.instyle.com/thmb/yeWJlnV28qS4IJBRuAYtGOaeTJE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MeganTheeStallionRevlonColorStay1-0c3a363933bc404392dab055f284a519.jpg
bio: Hailing from Houston, Megan Thee Stallion is a three-time GRAMMY-winning recording artist, actor, philanthropist and entrepreneur.
Most recently, Megan made history in Nov. 2022, becoming the first Black woman to appear on the cover of Forbes’ prestigious Under 30 issue.

9. The Internet
youtube:https://www.youtube.com/embed/zmY8mG4_3j4?si=Mqtoh5QyjAdDFnbn&amp?autoplay=1&mute=1
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO4ypOXm
image:https://ew.com/thmb/PLPra7QS1kQHcK-zkMXqFrVFEQA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-internet-1-2000-c443195ff0814bd0a4c17cf9f5a36827.jpg
bio:Originally presented as an Odd Future splinter project, alternative R&B band the Internet conversely distinguished themselves with their debut album Purple Naked Ladies (2011), not only as they relate to the 
collective in which they are rooted, but to their genre at large. All along, they've deviated significantly from hit-seeking commercial R&B with a creative mix of played and programmed instrumentation, understated vocals, and modes.

10. BJ the Chicago Kid
youtube:https://www.youtube.com/embed/255XGQT9BmU?si=0GpS-kAfocyWvyEo&amp?autoplay=1&mute=1
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evNZZRwdj
image:https://media.npr.org/assets/img/2015/08/17/bjtck-13_wide-cc9bc948d27dda67c3cdfefd4bafcb26141d3f46-s1100-c50.jpg
bio:the singer and songwriter had been developing his streetwise mix of vintage and modern R&B styles for nearly a decade, gathering experience as a background singer, guest vocalist, and songwriter

11. The Seratones
youtube:www.youtube.com/embed/uSgJbqaYS74?si=kNrNwJjXf-aHi_jv&amp?autoplay=1&mute=1
spotify:https://open.spotify.com/playlist/37i9dQZF1DZ06evO4wefQs
image:https://imgix.bustle.com/nylon/20544852/origin.jpg?w=1200&h=1000&fit=crop&crop=faces&auto=format%2Ccompress
bio:Love & Algorhythms is an interstellar synthesis of astral Soul, R&B, and sci-fi Funk. Each song hovers and pulsates in the wide, dark matter—constellations guiding a journey through the subtle body, the vast 
fullness of the human experience and the irresistible potential of liberation.

12. The Coolots
youtube:https://www.youtube.com/embed/G8jtUgYwaE8?si=j5ybaVDSIZEETa_D&amp?autoplay=1&mute=1
spotify: https://open.spotify.com/album/0yVNh5fq577edvhEQWXWKB
image:https://f4.bcbits.com/img/a0159631965_2.jpg
bio:The CooLots are not here to fit in. They refuse to be bound by industry standards and societal expectations; rather, they use their platform to inspire personal evolution and growth. They are here to indulge 
the hip grinders, the lyrically inclined, the head bangers, and the soul sisters. After listening to The CooLots, you will imagine yourself unlimited.


(Local)
1. Foxbat
youtube:https://www.youtube.com/embed/f6ZYbguzVfI?si=NsBVqZAIkVGNDRkM&amp?autoplay=1&mute=1
spotify:https://open.spotify.com/album/4gJ3Suu6iswaZmEmeYH2yb
image:https://npr.brightspotcdn.com/dims4/default/ca1cf4b/2147483647/strip/true/crop/1920x1414+0+0/resize/880x648!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fwp-content%2Fuploads%2F2022%2F10%2F08272022_Drop-Out-Fest_Foxbat.jpg
bio: Hailing from Louisville, Ky, Foxbat released their sophomore record and comic book Due South in April 2022. 
Foxbat are carving their own niche in the music industry by ensuring neck wrecking riffs and unapologetic vocals fill every nook and cranny of their songs.

2. Dizzy Dreamer 
youtube:https://www.youtube.com/embed/TKDkoCRW_p8?si=LzCgWvwN_lSxHzwX&amp?autoplay=1&mute=1
spotify:https://open.spotify.com/artist/25K11bL6rF2pEXkGO3r0Wa/discography/all
image:https://retrosynthrecords.com/wp-content/uploads/2023/09/dizzy-dreamer-void-boy-retrosynth.jpg
bio:Electronic rock project based out of Louisville, Ky. Producer T Pharo (Tyler Pritchett), has created an outfit of expressing introspection along with being an advocate for mental health. This project is a consolidation of the negative thoughts & feelings we all feel in life

3. The Louisville Living Room 
youtube:
spotify: facebook.com/TheLouisvilleLivingRoom
image:https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/311639870_113281178227305_1297985666904095094_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=ZPQkC2jXjmAAX-9MzoB&_nc_ht=scontent-ord5-2.xx&oh=00_AfDZVp438qRNbEzhX1ASLkEhMukMUYNlwGBMH09qTtdOmg&oe=65A658C5
bio: A local collective of singers, poets, musicians and comedians.

4. Trombone Alli presents
youtube:
spotify:
image:
bio:

5. DJ Bombshell
youtube:
spotify:
image:
bio:

6. Rythym Science Sound 
youtube:
spotify:
image:
bio:

7. Salem Vytch Tryells
youtube:
spotify:
image:
bio:

8. Va Va Vixens
youtube:
spotify:
image:
bio:

9. Kiana and the Sun Kings
 youtube:
spotify:
image:
bio:

10. The Jesse Lees
youtube:
spotify:
image:
bio:

11. Open mic hour
youtube:
spotify:
image:
bio:

12. Dj doro & Dj Exklusive
youtube:
spotify:
image:
bio:

*/