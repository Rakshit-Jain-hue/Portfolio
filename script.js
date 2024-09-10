let menu = document.querySelector('.nav i')
let cross = document.querySelector('#full i')
let reverse = document.querySelector('#full .h4')
let whiteArea = document.querySelector('.page2')
let whiteAreaNav = document.querySelector('#full')
let cursorScaleUp = document.querySelector('.card-container')
let cursorScalingUp = document.querySelector('.email h1')
let cursorScaleUpforlinks = document.querySelector('.linksforcontact')

window.addEventListener('mousemove', function(dets){
    gsap.to('#cursor',{
        x:dets.x,
        y:dets.y,
        duration:0.8,
        ease:"back.out"
    })
})

whiteAreaNav.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        backgroundColor: 'black'
    })
})

whiteAreaNav.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        backgroundColor:"white"
    })
})

whiteArea.addEventListener('mouseenter',function(){
    gsap.to(cursor,{
        backgroundColor: 'black'
    })
})

whiteArea.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        backgroundColor:"white"
    })
})

cursorScaleUp.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        scale:3,
        backgroundColor:'rgba(255,255,255,0.5)'
    })
})
cursorScaleUp.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        scale:1,
        backgroundColor:'white'
    })
})

cursorScalingUp.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        scale:7,
        backgroundColor:'rgba(255,255,255,0.1)',
        zIndex: 0
    })
})
cursorScalingUp.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        scale:1,
        backgroundColor:'white',
        zIndex:1
    })
})

cursorScaleUpforlinks.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        scale:7,
        backgroundColor:'rgba(255,255,255,0.1)'
    })
})
cursorScaleUpforlinks.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        scale:1,
        backgroundColor:'white'
    })
})

let tl = gsap.timeline()

tl.to('#full',{
    top:'0%',
    duration:0.6,
    ease:'power2.out'
})

tl.from('#full .h4 h4',{
    y:100,
    duration:0.6,
    stagger:0.25,
    opacity:0
},'nav-anim')

tl.from('#full .h5 h5',{
    y:100,
    duration:0.6,
    stagger:0.2,
    opacity:0
},'nav-anim')

tl.from('#full i',{
    opacity:0
})

tl.pause()

menu.addEventListener('click',()=>{
    tl.play()
})

cross.addEventListener('click',()=>{
    tl.reverse()
})
reverse.addEventListener('click',()=>{
    tl.reverse()
})


let greet = document.querySelector('.greet')
let descript = document.querySelector('.descript')

greet.addEventListener('mouseenter',()=>{
    gsap.to('.greet h1, #bounce',{
        color: '#6F4BFF'
    })
})
greet.addEventListener('mouseleave',()=>{
    gsap.to('.greet h1, #bounce',{
        color: 'rgba(255, 255, 255, 0.5)'
    })
})

descript.addEventListener('mouseenter',()=>{
    gsap.to('.descript h1',{
        color: '#6F4BFF'
    })
})
descript.addEventListener('mouseleave',()=>{
    gsap.to('.descript h1',{
        color: 'rgba(255, 255, 255, 0.5)'
    })
})


let tl2 = gsap.timeline();

tl2.from('.nav h2',{
    x:-100,
    duration:0.6,
    opacity:0
},'nav')

tl2.from('.ri-menu-3-line',{
    x:100,
    duration:0.6,
    opacity:0
},'nav')

tl2.from('.greet h1',{
    y:-100,
    duration:0.6,
    opacity:0
},'greet')

tl2.from('#bounce',{
    y:-400,
    duration:1,
    ease:"bounce.out"
})

tl2.from('.descript h1',{
    x:-200,
    duration:0.6,
    opacity:0
},'greet')


gsap.to('.page2_div',{
    width: '100%',
    scrollTrigger:{
        trigger:'.page2_div',
        scroller: 'body',
        start:'top 100%',
        end:'top 50%',
        scrub:2
    }
})
gsap.from('.page2_div',{
    width: '100%',
    duration:1,
    scrollTrigger:{
        trigger:'.page3',
        scroller: 'body',
        start:'top 40%',
        end:'top 0%',
        scrub:2,
    }
})


let tl3 = gsap.timeline();

tl3.from('.about',{
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger: '.page2',
        scroller: 'body',
        start:'top 80%',
        end: 'top 50%',
        scrub:2
    }
})

tl3.from('.left p',{
    x:-50,
    duration:1,
    opacity:0,
    stagger: 0.7,
    scrollTrigger:{
        trigger:'.page2',
        scroller:'body',
        start: 'top 40%',
        end: 'top 10%',
        scrub:2
    }
},'leftright')

tl3.from('#img1',{
    x:50,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'.page2',
        scroller:'body',
        start: 'top 50%',
        end: 'top 20%',
        scrub:2
    }
},'leftright')

tl3.from('.left p',{
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:'.page3',
        scroller:'body',
        start: 'top 60%',
        end: 'top 30%',
        // markers:true,
        scrub:2
    }
})

let hover_color1 = document.querySelector('.p1')
let hover_color2 = document.querySelector('.p2')

hover_color1.addEventListener('mouseenter',()=>{
    gsap.to('.p1, #bounce',{
        color: '#6F4BFF'
    })
})
hover_color1.addEventListener('mouseleave',()=>{
    gsap.to('.p1, #bounce',{
        color: 'black'
    })
})

hover_color2.addEventListener('mouseenter',()=>{
    gsap.to('.p2',{
        color: '#6F4BFF'
    })
})
hover_color2.addEventListener('mouseleave',()=>{
    gsap.to('.p2',{
        color: 'black'
    })
})


tl3.from('#img1',{
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:'.page3',
        scroller:'body',
        start: 'top 60%',
        end: 'top 30%',
        scrub:2
    }
})

gsap.from('.projects h1',{
    opacity:0,
    scrollTrigger:{
        trigger:'.page3',
        scroller: 'body',
        scrub:true,
        start:'top 80%',
        end:'top 50%'
    }
})
gsap.to('.projects h1',{
    y:600,
    scrollTrigger:{
        trigger:'.page3',
        scroller:'body',
        // markers:true,
        scrub: true,
        start: 'top 50%',
        end: 'top -50%'
    }
})

let kills = document.querySelector('.projects h1')
kills.addEventListener('mouseenter',()=>{
    gsap.to('.page3 img',{
        x:-600,
        y:-128,
        rotate:-15,
        opacity:1,
    })
})
kills.addEventListener('mouseleave',()=>{
    gsap.to('.page3 img',{
        x:0,
        y:0,
        rotate:0,
        opacity:0
    })
})

function string_svg_animation(){
let initialPath = `M 10 100 Q 500 100 990 100`

let finalPath = `M 10 100 Q 500 100 990 100`

var string = document.querySelector('#string')

string.addEventListener('mousemove', function(dets) {
    let boundingRect = string.getBoundingClientRect();
    let relativeX = dets.clientX - boundingRect.left;
    let relativeY = dets.clientY - boundingRect.top;
    let path = `M 10 100 Q ${relativeX} ${relativeY} 990 100`;

    gsap.to('svg path', {
        attr: { d: path },
        duration: 0.3,
        ease: 'power3.out'
    });
    console.log(`X: ${relativeX}, Y: ${relativeY}`);
});

string.addEventListener('mouseleave', () => {
    gsap.to('svg path', {
        attr: { d: finalPath },
        duration: 1.2,
        ease: 'elastic.out(1, 0.2)'
    });
});
}
string_svg_animation()

function mouse_hover_enlarge_img(){
let mouse_hover1 = document.querySelector('.card1');
let mouse_hover2 = document.querySelector('.card2');
let mouse_hover3 = document.querySelector('.card3');
let mouse_hover4 = document.querySelector('.card4');
let mouse_hover5 = document.querySelector('.card5');
let mouse_hover6 = document.querySelector('.card6');
let mouse_hover7 = document.querySelector('.card7');
let mouse_hover8 = document.querySelector('.card8');
let mouse_hover9 = document.querySelector('.card9');
let mouse_hover10 = document.querySelector('.card10');
mouse_hover1.addEventListener('mouseenter',()=>{
    gsap.to('.card1 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover1.addEventListener('mouseleave',()=>{
    gsap.to('.card1 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover2.addEventListener('mouseenter',()=>{
    gsap.to('.card2 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover2.addEventListener('mouseleave',()=>{
    gsap.to('.card2 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover3.addEventListener('mouseenter',()=>{
    gsap.to('.card3 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover3.addEventListener('mouseleave',()=>{
    gsap.to('.card3 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover4.addEventListener('mouseenter',()=>{
    gsap.to('.card4 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover4.addEventListener('mouseleave',()=>{
    gsap.to('.card4 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover5.addEventListener('mouseenter',()=>{
    gsap.to('.card5 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover5.addEventListener('mouseleave',()=>{
    gsap.to('.card5 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover6.addEventListener('mouseenter',()=>{
    gsap.to('.card6 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover6.addEventListener('mouseleave',()=>{
    gsap.to('.card6 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover7.addEventListener('mouseenter',()=>{
    gsap.to('.card7 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover7.addEventListener('mouseleave',()=>{
    gsap.to('.card7 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover8.addEventListener('mouseenter',()=>{
    gsap.to('.card8 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover8.addEventListener('mouseleave',()=>{
    gsap.to('.card8 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover8.addEventListener('mouseenter',()=>{
    gsap.to('.card8 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover8.addEventListener('mouseleave',()=>{
    gsap.to('.card8 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover9.addEventListener('mouseenter',()=>{
    gsap.to('.card9 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover9.addEventListener('mouseleave',()=>{
    gsap.to('.card9 img',{
        scale:1,
        duration:0.5
    })
})
mouse_hover10.addEventListener('mouseenter',()=>{
    gsap.to('.card10 img',{
        scale:1.2,
        duration:0.5
    })
})
mouse_hover10.addEventListener('mouseleave',()=>{
    gsap.to('.card10 img',{
        scale:1,
        duration:0.5
    })
})
}
mouse_hover_enlarge_img()

gsap.to(".scrolling-text", {
    x: '-80%', 
    ease: "none",
    scrollTrigger: {
        trigger: ".page5",
        scroller:'body',
        start: "top 0%",
        end: "top -250%",
        scrub: true, 
        pin: true,
    }
});

function timeline4(){
    tl4 = gsap.timeline();

    tl4.from('.page6 .right',{
        opacity:0,
        y:-200,
        scrollTrigger:{
            trigger:'.page6',
            scroller:'body',
            start: 'top 25%',
            end: 'top -25%',
            scrub: 2
        }
    })

    tl4.from('.page6 .left-text',{
        opacity:0,
        x:-200,
        scrollTrigger:{
            trigger:'.page6',
            scroller:'body',
            start:'top 10%',
            end:'top -40%',
            scrub:2
        }
    })
}

timeline4();

function timeline5(){
    tl5 = gsap.timeline();

    tl5.from('.page7 .right',{
        opacity:0,
        y:-250,
        scrollTrigger:{
            trigger:'.page7',
            scroller:'body',
            start: 'top 25%',
            end: 'top -25%',
            scrub: 2
        }
    })

    tl5.from('.page7 .left-text',{
        opacity:0,
        x:200,
        scrollTrigger:{
            trigger:'.page7',
            scroller:'body',
            start:'top 10%',
            end:'top -40%',
            scrub:2
        }
    })
}
timeline5();

function timeline6(){
    tl5 = gsap.timeline();

    tl5.from('.page8 .right',{
        opacity:0,
        y:-200,
        scrollTrigger:{
            trigger:'.page8',
            scroller:'body',
            start: 'top 25%',
            end: 'top -25%',
            scrub: 2
        }
    })

    tl5.from('.page8 .left-text',{
        opacity:0,
        x:-200,
        scrollTrigger:{
            trigger:'.page8',
            scroller:'body',
            start:'top 10%',
            end:'top -40%',
            scrub:2
        }
    })
}
timeline6();

cursorScalingUp.addEventListener('mouseenter',()=>{
    gsap.to('.email h1 a',{
        color:'#6f4bff',
        duration: 0.5
    })
})
cursorScalingUp.addEventListener('mouseleave',()=>{
    gsap.to('.email h1 a',{
        color:'#ffffff',
        duration: 0.5
    })
})

let addColortolink1 = document.querySelector('#a1')
let addColortolink2 = document.querySelector('#a2')
addColortolink1.addEventListener('mouseenter',()=>{
    gsap.to('#a1 a',{
        color:'#6f4bff',
        duration: 0.5,
    })
})
addColortolink1.addEventListener('mouseleave',()=>{
    gsap.to('#a1 a',{
        color:'#ffffff',
        duration: 0.5,
    })
})
addColortolink1.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        zIndex:0
    })
})
addColortolink1.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        zIndex:1
    })
})

addColortolink2.addEventListener('mouseenter',()=>{
    gsap.to('#a2 a',{
        color:'#6f4bff',
        duration: 0.5,
    })
})
addColortolink2.addEventListener('mouseleave',()=>{
    gsap.to('#a2 a',{
        color:'#ffffff',
        duration: 0.5
    })
})
addColortolink2.addEventListener('mouseenter',()=>{
    gsap.to(cursor,{
        zIndex:0
    })
})
addColortolink2.addEventListener('mouseleave',()=>{
    gsap.to(cursor,{
        zIndex:1
    })
})

gsap.from('.contact-page',{
    opacity:0,
    y:200,
    duration:1,
    stagger: 0.5,
    scrollTrigger:{
        trigger:'.page9',
        scroller:'body',
        start:'top 30%',
        end: 'top 0%',
        scrub: 2,
    }
})