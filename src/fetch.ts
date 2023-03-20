
export let pi = 0;
// let rowLength = Math.floor(Math.random() * 10) + 10;
// let scrollInterval = null;
// export async function fetchPI(digits = 100000) {
//   let response = await fetch(
//     `https://uploadbeta.com/api/pi/?cached&n=${digits + 1}`
//   );
//   pi = await response.json();
//   let i = 1; //api zwraca 0 jako pierwszą cyfre - pomijamy
//   let interval: number = 0;
//   let ul = document.querySelector("ul");
//   ul!.style.width = `${40 * rowLength}px`;
//   let scrollingElement = document.scrollingElement || document.documentElement;
//   const printPIDigit = () => {
//     scrollingElement.scrollTop = document.body.scrollHeight;
//     let li = `<li style="background-color:#D4C6AC; border-color:${colors[pi[i]]
//       }"></li>`;
//     let temp = document.createElement("div");
//     temp.innerHTML = li;
//     ul.appendChild(temp.firstChild);
//     renderLine(i);
//     i++;
//     if (i == pi.length) {
//       window.clearInterval(interval);
//     }
//   }
//   fillHeader();
//   printPIDigit();
//   interval = window.setInterval(printPIDigit, 100);
// }

// function fillHeader() {
//   const header = "Colors of Π";
//   document.title = header;
//   const h1 = document.querySelector("h1");
//   const temp = document.createElement("div");
//   for (let i = 0; i < header.length; i++) {
//     temp.innerHTML = `<span style='color:${colors[Math.floor(Math.random() * 10)]
//       }'>${header[i]}</span>`;
//     h1.appendChild(temp.firstChild);
//   }
// }
// // fetchPI();
