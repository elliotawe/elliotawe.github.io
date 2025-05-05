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

import { toggleMenu } from "./partials/menu/menu.js";

async function loadMenu(){
    try {
        const response = await fetch("partials/menu/menu.html");
        if (!response.ok) throw new Error("Network response was not ok");

        const html = await response.text();
        document.getElementById("menu-placeholder").innerHTML = html;

        // Wait until next tick to ensure DOM is updated
        const button = document.querySelector(".menu .container");
        if (button) {
            button.addEventListener("pointerdown", () => toggleMenu(button));
        }
        // requestAnimationFrame(() => {
        // });

    } catch (error) {
        console.error("Failed to load menu:", error);
    }
}

loadMenu();
