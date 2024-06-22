
tl.from('.best',{
        y:60,
        opacity:0,
        duration:1
    },'a')

    tl.from('.page_1 .our',{
        y:60,
        duration:1,
        opacity:0,
        scrollTrigger:'.page_1'
        
    },'a') 

    tl.from('.page_1 .para',{
        y:60,
        duration:1,
        opacity:0,
        scrollTrigger:'.page_1'
        
    },'a')

    gsap.from('.page_2 .container',{
        y:60,
        duration:1,
        opacity:0,
        scrollTrigger:'.page_2'
        
    })

    gsap.from('.page-text',{
        y:60,
        duration:1,
        opacity:0,
        scrollTrigger:'.page-text '
        
    })

    gsap.from('.page_3 .new',{
        y:60,
        duration:1,
        opacity:0
    })

    gsap.from('.song .img1',{
        y:60,
        duration:1.2,
        opacity:0,
        delay:.3,
        stagger:.4,
        scrollTrigger:'.song .img1'
    })

    gsap.from('.song .img2',{
        y:60,
        duration:1.2,
        opacity:0,
        delay:.3,
        stagger:.4,
        scrollTrigger:'.song .img2'
    })
    gsap.from('.song .img3',{
        y:60,
        duration:1.2,
        opacity:0,
        delay:.3,
        stagger:.4,
        scrollTrigger:'.song .img3'
    })
    gsap.from('.song .img4',{
        y:60,
        duration:1.2,
        opacity:0,
        delay:.3,
        stagger:.4,
        scrollTrigger:'.song .img4'
    })
    gsap.from('.song .img5',{
        y:60,
        duration:1.2,
        opacity:0,
        delay:.3,
        stagger:.4,
        scrollTrigger:'.song .img5'
    })
    gsap.from('.song .img6',{
        y:60,
        duration:1.2,
        opacity:0,
        delay:.3,
        stagger:.4,
        scrollTrigger:'.song .img6'
    })
    
    gsap.from('.page_4 .new h1',{
        y:60,
        opacity:0,  
        duration:.7,
        scrollTrigger:".page_4"
        
    })


    gsap.from('.page_5 .inner .left',{
        x:-60,
        opacity:0,  
        duration:1.5,
        scrollTrigger:".page_5"
        
    })

    gsap.from('.page_4 .card_1 ',{
        y:60,
        opacity:0,  
        duration:1,
        delay:.3,
        scrollTrigger:".card_1"
        
    })

    gsap.from('.page_4 .card_2 ',{
        y:60,
        opacity:0,  
        duration:1,
        delay:.3,
        scrollTrigger:".card_2"
        
    })

    gsap.from('.page_4 .card_3 ',{
        y:60,
        opacity:0,  
        duration:1,
        delay:.3,
        scrollTrigger:".card_3"
        
    })

    gsap.from('.page_4 .card_4 ',{
        y:60,
        opacity:0,  
        duration:1,
        delay:.3,
        scrollTrigger:".card_4"
        
    })

    gsap.from('.page_5 .inner .right',{
        x:60,
        opacity:0,  
        duration:1.5,
        scrollTrigger:".page_5"
        
    })

    gsap.from('.page_6 .new',{
        y:60,
        opacity:0,  
        duration:1,
        stagger:1,
        scrollTrigger:".page_6"
        
    })

    gsap.from('.page_6 .card_1 ',{
        y:60,
        opacity:0,  
        duration:1,
        delay:.3,
        scrollTrigger:".page_6 .card_1"
        
    })

    gsap.from('.page_6 .card_2 ',{
        y:60,
        opacity:0,  
        duration:1,
        delay:.3,
        scrollTrigger:".page_6 .card_2"
        
    })

    gsap.from('.page_6 .card_3 ',{
        y:60,
        opacity:0,  
        duration:1,
        delay:.3,
        scrollTrigger:".page_6 .card_3"
        
    })

    gsap.from('.page_6 .card_4 ',{
        y:60,
        opacity:0,  
        duration:1,
        delay:.3,
        scrollTrigger:".page_6 .card_4"
        
    })

    gsap.from('.page_7 .new .meet',{
        y:60,
        opacity:0,  
        duration:1,
        scrollTrigger:".page_7"
    })
    gsap.from('.page_7 .new .para',{
        y:40,
        opacity:0, 
        delay:.3, 
        duration:.8,
        scrollTrigger:".page_7"
    })

    gsap.from('.page_8 .first-img',{
        y:60,
        opacity:0,
        duration:1,
        delay:.3,
        scrollTrigger:".first-img"
    })

    gsap.from('.page_8 .second-img',{
        y:60,
        opacity:0,
        duration:1,
        delay:.3,
        scrollTrigger:".second-img"
    })

    gsap.from('.page_8 .third-img',{
        y:60,
        opacity:0,
        duration:1,
        delay:.3,
        scrollTrigger:".third-img"
    })

    gsap.from('.btn',{
        y:60,
        opacity:0,
        duration:1,
        delay:.1,
        scrollTrigger:".btn"
    })

    gsap.from('.page_9 .s-card',{
        y:40,
        opacity:0,
        duration:1,
        delay:.5,
        scrollTrigger:".page_9"
    })

    gsap.from('.page_10 .left',{
        x:40,
        opacity:0,
        duration:1,
        delay:.4,
        scrollTrigger:".page_10"
    })

    gsap.from('.page_10 .right',{
        x:-40,
        opacity:0,
        duration:1,
        delay:.4,
        scrollTrigger:".page_10"
    })


    var video = document.querySelector('.h-video')
    var play1 = document.querySelector('.videos .row .img1')
    var play2 = document.querySelector('.videos .row .img2')
    var play3 = document.querySelector('.videos .row .img3')
    var play4 = document.querySelector('.videos .row .img4')
    var play5 = document.querySelector('.videos .row .img5')
    var play6 = document.querySelector('.videos .row .img6')

    var img1 = document.querySelector('.card1')
    var img2 = document.querySelector('.card2')
    var img3 = document.querySelector('.card3')

    var body = document.querySelector('body')


        // img1.addEventListener('mouseenter',function(){
        //     img1.style.scale = 1.1,
        //     img3.style.scale = 1

        // })

        // img1.addEventListener('mouseleave',function(){
        //     img1.style.scale = 1,
        //     img3.style.scale = 1

        // })

    img2.addEventListener('mouseenter',function(){
        img1.style.scale = 1,
        img2.style.width = '41%',
        img3.style.scale = 1
    })

    img3.addEventListener('mouseenter',function(){
        img3.style.scale = 1.1,
        img2.style.width = '33.34%',
        img1.style.scale = 1
    })

    play1.addEventListener('click',function(){
        video.style.display = 'flex';
        body.style.opacity = '.9'
    })
    play2.addEventListener('click',function(){
        video.style.display = 'flex';
        body.style.opacity = '.9'
    })
    play3.addEventListener('click',function(){
        video.style.display = 'flex';
        body.style.opacity = '.9'
    })
    play4.addEventListener('click',function(){
        video.style.display = 'flex';
        body.style.opacity = '.9'
    })
    play5.addEventListener('click',function(){
        video.style.display = 'flex';
        body.style.opacity = '.9'
    })
    play6.addEventListener('click',function(){
        video.style.display = 'flex';
        body.style.opacity = '.9'
    })

    remove.addEventListener('click',function(){
        video.style.display = 'none';
    
    })

    