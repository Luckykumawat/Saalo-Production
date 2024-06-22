tl.from('.page_1 .left',{
    y:60,
    duration:1,
    opacity:0,
    },'a')
    
    tl.from('.page_1 .right',{
        y:60,
        duration:1,
        opacity:0,
        },'a')
    
        gsap.from('.card_1',{
            y:60,
            duration:1.5,
            delay:.5,
            opacity:0,
            scrollTrigger:'.card_1'
            })

    gsap.from('.card_2',{
        y:60,
        duration:1.5,
        delay:.5,
        opacity:0,
        scrollTrigger:'.card_2'
        })
    
        gsap.from('.card_3',{
            y:60,
            duration:1.5,
            delay:.5,
            opacity:0,
            scrollTrigger:'.card_3'
            })
    
            gsap.from('.card_4',{
                y:60,
                duration:1.5,
                delay:.5,
                opacity:0,
                scrollTrigger:'.card_4'
                })

    gsap.from('.page_3',{
        y:60,
        duration:1.5,
        delay:.5,
        opacity:0,
        scrollTrigger:'.page_3'
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