(()=>{"use strict";function e(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","intro");const n=document.createElement("h3");n.innerHTML="Puppy loves chasing <br /> CHIPMONKS";const c=document.createElement("img");c.setAttribute("src","https://lh3.googleusercontent.com/pw/AM-JKLUPneoCLIqj4lJ6yv0w3p6o7aI5eSXfT0_mrDh9lRCRZHiAu5psijZ5GztfTa3rs6SRxH1SeSPR71vmVBPvhj9QHW-d2-mmlrvGjnT2xe4wQru9rS7-t7VgqUYQDJeeJu7M6dcNFv7RLFhMzQ6gCFiW7w=w697-h929-no?authuser=2"),t.append(n,c),e.appendChild(t)}const t=document.querySelectorAll("#tabs li");function n(n){t.forEach((e=>e.classList.remove("current"))),n.target.classList.add("current"),n.target.classList.contains("menu")?e():n.target.classList.contains("locations")?function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","intro");const n=document.createElement("h1");n.innerHTML="Choose from one of our epic locations";const c=document.createElement("h3");c.innerHTML="Hoboken";const o=document.createElement("h3");o.innerHTML="Aruba";const r=document.createElement("h3");r.innerHTML="Red Bank",t.append(n,c,o,r),e.appendChild(t)}():n.target.classList.contains("contact")&&function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","intro");const n=document.createElement("h3");n.innerHTML="Im sorry to inform you<br /> This place does not exist";const c=document.createElement("iframe");c.setAttribute("src","https://www.youtube.com/watch?v=dQw4w9WgXcQ"),t.append(n,c),e.appendChild(t)}()}t.forEach((e=>{e.addEventListener("click",n)})),e()})();