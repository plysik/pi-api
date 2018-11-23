let pi = 0;
let rowLength = 17;
async function fetchPI(digits = 100000) {
  let response = await fetch(
    `https://uploadbeta.com/api/pi/?cached&n=${digits + 1}`
  );
  pi = await response.json();
  let i = 1; //api zwraca 0 jako pierwszą cyfre - pomijamy
  let interval = null;
  let ul = document.querySelector("ul");
  ul.style.width = `${40 * rowLength}px`;
  function printPIDigit() {
    let li = `<li style="background-color:#D4C6AC; border-color:${
      colors[pi[i]]
    }"></li>`;
    let temp = document.createElement("div");
    temp.innerHTML = li;
    ul.appendChild(temp.firstChild);
    renderLine(i);
    i++;
    if (i == pi.length) window.clearInterval(interval);
  }
  fillHeader();
  printPIDigit();
  interval = setInterval(printPIDigit, 10);
}
function fillHeader() {
  const header = "Colors of Π";
  document.title = header;
  const h1 = document.querySelector("h1");
  const temp = document.createElement("div");
  for (let i = 0; i < header.length; i++) {
    temp.innerHTML = `<span style='color:${
      colors[Math.floor(Math.random() * 10)]
    }'>${header[i]}</span>`;
    h1.appendChild(temp.firstChild);
  }
}
function renderLine(index) {
  let pairs = findPairs(index);
  let liEls = Array.from(document.querySelectorAll("li"));
  for (let i = 0; i < pairs.length; i++) {
    let [a, b] = pairs[i];
    a = absolutePosition(liEls[a - 1]);
    b = absolutePosition(liEls[b - 1]);
    drawLine(a, b, colors[pi[index]]);
  }

  function findPairs(index) {
    let searched = pi[index];
    let pairs = [];
    let searchedIndexes = [
      index - rowLength - 1,
      index - rowLength,
      index - rowLength + 1,
      index - 1
    ];
    for (let i = 0; i < searchedIndexes.length; i++) {
      if (
        searchedIndexes[i] > 0 &&
        pi[searchedIndexes[i]] != undefined &&
        pi[searchedIndexes[i]] === searched &&
        !(
          (index % rowLength === 1 && searchedIndexes[i] % rowLength === 0) ||
          (index % rowLength === 0 && searchedIndexes[i] % rowLength === 1)
        )
      ) {
        pairs.push([index, searchedIndexes[i]]);
      }
    }
    return pairs;
  }
  function drawLine(a, b, bgColor) {
    let xa = (a.right + a.left) / 2;
    let ya = (a.bottom + a.top) / 2;
    let xb = (b.right + b.left) / 2;
    let yb = (b.bottom + b.top) / 2;
    let distance = Math.sqrt((xa - xb) * (xa - xb) + (ya - yb) * (ya - yb));
    let xm = (xa + xb) / 2;
    let ym = (ya + yb) / 2;
    let angleInRadian = Math.atan2(ya - yb, xa - xb);
    let angleInDegrees = (angleInRadian * 180) / Math.PI;
    let line = document.createElement("div");
    line.classList.add("line");
    line.style.width = `${distance}px`;
    line.style.top = `${ym}px`;
    line.style.left = `${xm - distance / 2 - 2}px`;
    line.style.transform = `rotate(${angleInDegrees}deg)`;
    line.style.borderColor = bgColor;
    line.style.backgroundColor = bgColor;
    document.body.appendChild(line);
  }
}
fetchPI();
