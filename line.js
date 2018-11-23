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