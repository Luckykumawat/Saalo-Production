
tl.from('.v-card',{
    y:60,
duration:1.5,
opacity:0
},'a')


tl.from('.r-text',{
    y:60,
duration:1.5,
opacity:0
},'a')

gsap.from('.v-card_1',{
    y:60,
duration:1.5,
opacity:0,
scrollTrigger:'.v-card_1'
})

gsap.from('.v-card_2',{
    y:60,
duration:1.5,
opacity:0,
scrollTrigger:'.v-card_2'
})

gsap.from('.v-card_3',{
    y:60,
duration:1.5,
opacity:0,
scrollTrigger:'.v-card_3'
})

gsap.from('.v-card_4',{
    y:60,
duration:1.5,
opacity:0,
scrollTrigger:'.v-card_4'
})

gsap.from('.page_x .r-text',{
    y:60,
    duration:1.5,
    opacity:0,
scrollTrigger:'.r-text'
    
})

gsap.from('.page_2 .new',{
y:60,
duration:1.5,
delay:.1,
opacity:0,
scrollTrigger:'.page_2'
})

gsap.from('.card_1',{
y:60,
duration:1.5,
delay:.1,
opacity:0,
scrollTrigger:'.page_2 .card_1'
})

gsap.from('.card_2',{
    y:60,
    duration:1.5,
    delay:.1,
    opacity:0,
    scrollTrigger:'.page_2 .card_2'
    })

    gsap.from('.card_3',{
        y:60,
        duration:1.5,
        delay:.1,
        opacity:0,
        scrollTrigger:'.card_3'
        })

        gsap.from('.card_4',{
            y:60,
            duration:1.5,
            delay:.1,
            opacity:0,
            scrollTrigger:'.card_4'
            })

gsap.from('.page_3',{
y:60,
duration:1.5,
delay:.1,
opacity:0,
scrollTrigger:'.page_3'
})

gsap.from('footer  .left',{
x:-100,
opacity:0,  
duration:1.8,
scrollTrigger:".page_11"

})

gsap.from('footer  .right',{
x:100,
opacity:0,  
duration:1.8,
scrollTrigger:".page_4"

})
