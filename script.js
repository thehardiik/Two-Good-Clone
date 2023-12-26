const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function introAnimation (){
    const tl = gsap.timeline();

    tl.from("#page1 h1" , {

        y: 50 ,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.2

    })

    tl.from("#videoContainer" , {

        y: 50 ,
        opacity: 0,
        duration: 0.8,

    })
}

introAnimation();

 function videoAnimation () {
    const cursor = document.querySelector("#cursor");
    const container = document.querySelector('#videoContainer');
    
    container.addEventListener("mouseenter" , (e)=>{
       
       gsap.to("#cursor" , {
           scale: 1 ,
           opacity: 1 ,
           top: e.y - 350,
           left: e.x - 50
         })
   
    })
   
    container.addEventListener("mouseleave" , ()=>{
       
       gsap.to("#cursor" , {
           scale: 0 ,
           opacity: 0
         })
    })
   
    container.addEventListener("mousemove" , (e)=>{
       gsap.to("#cursor" , {
           top: e.y - 350,
           left: e.x-50
   
       })
    })
 }

 videoAnimation();

 function productAnimation () {
    const cursor = document.querySelector("#cursor2");
    const container = document.querySelectorAll(".imageContainer");

    
    container[0].addEventListener("mouseenter" , (e)=>{
       console.log("trigger")
        gsap.to("#cursor2" , {
            scale: 1 ,
            opacity: 1 ,
            top: e.y ,
            left: e.x ,
            translate: "-50% -50%" ,
            backgroundColour: "#cdcecf"
    
          })
    
     })

     container[0].addEventListener("mouseleave" , ()=>{
       
        gsap.to("#cursor2" , {
            scale: 0 ,
            opacity: 0
          })
     })
    
     container[0].addEventListener("mousemove" , (e)=>{
        gsap.to("#cursor2" , {
            top: e.y,
            left: e.x,
            translate: "-50% -50%" ,
            backgroundColour: "#cdcecf"
    
        })
     })

     container[1].addEventListener("mouseenter" , (e)=>{
        console.log("trigger")
         gsap.to("#cursor2" , {
             scale: 1 ,
             opacity: 1 ,
             top: e.y ,
             left: e.x ,
             translate: "-50% -50%" ,
             backgroundColour: "#cdcecf"
     
           })
     
      })
 
      container[1].addEventListener("mouseleave" , ()=>{
        
         gsap.to("#cursor2" , {
             scale: 0 ,
             opacity: 0
           })
      })
     
      container[1].addEventListener("mousemove" , (e)=>{
         gsap.to("#cursor2" , {
             top: e.y,
             left: e.x,
             translate: "-50% -50%" ,
             backgroundColour: "#cdcecf"
     
         })
      })

      container[2].addEventListener("mouseenter" , (e)=>{
        console.log("trigger")
         gsap.to("#cursor2" , {
             scale: 1 ,
             opacity: 1 ,
             top: e.y ,
             left: e.x ,
             translate: "-50% -50%" ,
             backgroundColour: "#cdcecf"
     
           })
     
      })
 
      container[2].addEventListener("mouseleave" , ()=>{
        
         gsap.to("#cursor2" , {
             scale: 0 ,
             opacity: 0
           })
      })
     
      container[2].addEventListener("mousemove" , (e)=>{
         gsap.to("#cursor2" , {
             top: e.y,
             left: e.x,
             translate: "-50% -50%" ,
             backgroundColour: "#cdcecf"
     
         })
      })
 
      container[3].addEventListener("mouseenter" , (e)=>{
         console.log("trigger")
          gsap.to("#cursor2" , {
              scale: 1 ,
              opacity: 1 ,
              top: e.y ,
              left: e.x ,
              translate: "-50% -50%" ,
              backgroundColour: "#cdcecf"
      
            })
      
       })
  
       container[3].addEventListener("mouseleave" , ()=>{
         
          gsap.to("#cursor2" , {
              scale: 0 ,
              opacity: 0
            })
       })
      
       container[3].addEventListener("mousemove" , (e)=>{
          gsap.to("#cursor2" , {
              top: e.y,
              left: e.x,
              translate: "-50% -50%" ,
              backgroundColour: "#cdcecf"
      
          })
       })
 }
 
 productAnimation()