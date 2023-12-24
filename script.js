var tl = gsap.timeline()



tl.from('.page1 .right',{
    x:-1000,
    y:-300,
    duration:1.2,
    scale:.001
})
tl.from('.page1 .l',{
    
    x:-600,
    duration:.3,
   
})
tl.from('.page1 .r',{
    
    x:600,
    duration:.3,
   
})
tl.from('.page1 .inner1 .text',{
    
    scale:.000001,
    duration:.5,
   
})
tl.from('.page2',{
  opacity:0,
  scale:0,
  duration:.3,
scrollTrigger:{
    trigger:'.page2',
    scroller: 'body',
scrub:5,
    // markers:true,
    start:'top 150%',
}

})
tl.from('.left3',{
    
    scale:0,
    
    duration:.5,
    
  scrollTrigger:{
      trigger:'.page3 .left3',
      scroller: 'body',
  scrub:5,
    //   markers:true,
      start:"top 160%"
  }
  
  })

  tl.from('.right3',{
    
    scale:0,
    
    duration:.5,
    
  scrollTrigger:{
      trigger:'.page3 .right3',
      scroller: 'body',
  scrub:5,
    //   markers:true,
      start:"top 160%"
  }
  
  })
  tl.from('.nav4 h1',{
    x:-1500,
    opacity:0,
    delay:.2,
  scrollTrigger:{
      trigger:'.page3',
      scroller: 'body',
   
  scrub:5,
    //   markers:true,
      start:"top 100%"
  }
  
  })
  tl.from('.main5 h1',{
    scale:0,
    opacity:0,
    duration:1,
  scrollTrigger:{
      trigger:'.page5',
      scroller: 'body',
   
  scrub:5,
    //   markers:true,
      start:"start 100%"
      ,end:"start 50%"
  }
  
  })
  tl.from('.main5 h3',{
    y:800,
    scale:0,
    opacity:0,
    duration:1.5,
    delay:1,
  scrollTrigger:{
      trigger:'.page5',
      scroller: 'body',
   
  scrub:5,
    //   markers:true,
      start:"start 100%"
      ,end:"start 50%"
  }
  
  })
  tl.from('.main5 h5',{
    scale:0,
    y:800,
    opacity:0,
    duration:1.5,
    delay:1,
  scrollTrigger:{
      trigger:'.page5',
      scroller: 'body',
   
  scrub:5,
    //   markers:true,
      start:"start 100%"
      ,end:"start 50%"
  }
  
  })