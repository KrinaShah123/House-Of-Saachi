/*==================================================
            HOUSE OF SAACHI
             Landing Page - Temporary
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    createParticles();

    revealOnScroll();

    floatingCards();

    buttonRipple();

    mouseParallax();

});

/*==================================================
        Floating  Particles
==================================================*/

function createParticles(){

    const container=document.querySelector(".particles");

    if(!container) return;

    for(let i=0;i<35;i++){

        const particle=document.createElement("span");

        particle.classList.add("particle");

        particle.style.left=Math.random()*100+"%";

        particle.style.top=Math.random()*100+"%";

        particle.style.animationDuration=
        (6+Math.random()*8)+"s";

        particle.style.animationDelay=
        Math.random()*5+"s";

        particle.style.opacity=
        (0.2+Math.random()*0.5);

        particle.style.transform=
        `scale(${0.4+Math.random()})`;

        container.appendChild(particle);

    }

}

/*==================================================
        Scroll Reveal
==================================================*/

function revealOnScroll(){

    const items=document.querySelectorAll(

        ".category,.hero-content,.footer-logo,.social-links"

    );

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";

                    entry.target.style.transform="translateY(0)";

                }

            });

        },

        {

            threshold:0.15

        }

    );

    items.forEach(item=>{

        item.style.opacity="0";

        item.style.transform="translateY(50px)";

        item.style.transition="all .8s ease";

        observer.observe(item);

    });

}

/*==================================================
        Floating Category Cards
==================================================*/

function floatingCards(){

    const cards=document.querySelectorAll(".category");

    cards.forEach((card,index)=>{

        card.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-8px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3500+(index*250),

            iterations:Infinity

        });

    });

}

/*==================================================
        Mouse Background Movement
==================================================*/

function mouseParallax(){

    document.addEventListener("mousemove",(e)=>{

        const x=e.clientX/window.innerWidth;

        const y=e.clientY/window.innerHeight;

        document.querySelectorAll(".bg-circle")

        .forEach((circle,index)=>{

            const move=(index+1)*18;

            circle.style.transform=

            `translate(${x*move}px,${y*move}px)`;

        });

    });

}

/*==================================================
       Ripple Effect
==================================================*/

function buttonRipple(){

    document.querySelectorAll(".btn")

    .forEach(button=>{

        button.addEventListener("click",function(e){

            const circle=document.createElement("span");

            const diameter=Math.max(

                this.clientWidth,

                this.clientHeight

            );

            circle.style.width=diameter+"px";

            circle.style.height=diameter+"px";

            circle.style.left=

            e.offsetX-diameter/2+"px";

            circle.style.top=

            e.offsetY-diameter/2+"px";

            circle.className="ripple";

            this.appendChild(circle);

            setTimeout(()=>{

                circle.remove();

            },700);

        });

    });

}

/*==================================================
        Page Fade In
==================================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="opacity .8s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

});

/*==================================================
        Smooth Scroll
==================================================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(

            this.getAttribute("href")

        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});

/*==================================================
        Footer Social Hover
==================================================*/

document.querySelectorAll(".social-links a")

.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="translateY(-8px) scale(1.15)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="translateY(0) scale(1)";

    });

});

/*==================================================
        Console Signature
==================================================*/

console.log(

"%cHouse of Saachi",

"color:#C8A15A;font-size:24px;font-weight:bold;"

);

console.log(

"%cLuxury Jewellery Landing Page Loaded Successfully",

"color:#7D2945;font-size:14px;"

);