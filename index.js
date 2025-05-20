// import { toggleMenu } from "./partials/menu/menu.js";

// async function loadMenu(){
//     try {
//         const response = await fetch("partials/menu/menu.html");
//         if (!response.ok) throw new Error("Network response was not ok");
//         const html = await response.text();
//         document.getElementById("menu-placeholder").innerHTML = html;

//         const script = document.createElement("script");
//         script.src = "partials/menu/menu.js"; 
//         document.body.appendChild(script);
//     } catch (error) {
//         console.error("Failed to load menu:", error);
//     }
// }

// loadMenu();

// import { toggleMenu } from "./partials/menu/menu.js";

// async function loadMenu(){
//     try {
//         const response = await fetch("partials/menu/menu.html");
//         if (!response.ok) throw new Error("Network response was not ok");

//         const html = await response.text();
//         document.getElementById("menu-placeholder").innerHTML = html;

//         // Wait until next tick to ensure DOM is updated
//         const button = document.querySelector(".menu .container");
//         if (button) {
//             button.addEventListener("pointerdown", () => toggleMenu(button));
//         }
//         // requestAnimationFrame(() => {
//         // });

//     } catch (error) {
//         console.error("Failed to load menu:", error);
//     }
// }

// loadMenu();




// scripts.js
// window.addEventListener('load', () => {
//   gsap.registerPlugin(ScrollTrigger);

//   const tl = gsap.timeline();

//   tl.from('#line1', { width: 0, duration: 1, ease: 'power2.inOut' })
//     .from('#line2', { width: 0, duration: 1, ease: 'power2.inOut' }, '-=0.7')
//     .to(['#line1', '#line2'], { x: -150, duration: 1, ease: 'power2.inOut' })
//     .from('#heroImage', { y: 100, opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.5')
//     .from('#services span', { x: -50, opacity: 0, stagger: 0.2, duration: 0.8, ease: 'power2.out' }, '-=0.5');

//   gsap.to('#hero', {
//     scrollTrigger: {
//       trigger: '#hero',
//       start: 'bottom top',
//       end: 'bottom+=100 top',
//       scrub: true
//     },
//     y: -100,
//     opacity: 0
//   });

//   gsap.to('#about', {
//     scrollTrigger: {
//       trigger: '#about',
//       start: 'top bottom',
//       end: 'center center',
//       scrub: true
//     },
//     opacity: 1,
//     y: 0,
//     duration: 1
//   });

//   gsap.to('#aboutText', {
//     scrollTrigger: {
//       trigger: '#about',
//       start: 'top bottom',
//       end: 'top center',
//       scrub: true
//     },
//     clipPath: 'inset(0% 0% 0% 0%)',
//     duration: 1
//   });
// });


window.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("hero-name");
  const imageEl = document.getElementById("title-image");
  const whatIDoEl = document.getElementById("what-i-do");

  // Start after 3.2s (duration of animate-title)
  setTimeout(() => {
    const tl = gsap.timeline();

    tl.to(nameEl, {
      x: '40vw',            // Move right
      scale: 0.4,           // Shrink size
      duration: 1.5,
      ease: 'power2.inOut'
    })

    .to(imageEl, {
        x: '40vw',
      opacity: 1,
      duration: 1.5,
      ease: 'power2.inOut'
    })

    .to(whatIDoEl, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, "-=1.0"); // show what I do slightly after image fade starts
  }, 3200);
});
