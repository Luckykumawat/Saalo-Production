tl.from('.page_1',{
    y:60,
    duration:1,
    opacity:0,
    stagger:1
},'a')

gsap.from('.page_2',{
        y:60,
        opacity:0,
        duration:1,
        scrollTrigger:'.page_2'
    })

    gsap.from('.page_3 ',{
        y:60,
        duration:1,
        opacity:0,
        scrollTrigger:'.page_3'
        
    }) 

    gsap.from('.page_4 ',{
        y:60,
        duration:1,
        opacity:0,
        scrollTrigger:'.page_4'
        
    })

    gsap.from('.page_5 ',{
        y:60,
        duration:1,
        opacity:0,
        delay:.3,
        scrollTrigger:'.page_5'
        
    })

    gsap.from('footer  .left',{
        x:60,
        opacity:0,  
        duration:1.5,
        scrollTrigger:".page_11"
        
    })

    gsap.from('footer  .right',{
        x:-60,
        opacity:0,  
        duration:1.5,
        scrollTrigger:".page_11"
        
    })

