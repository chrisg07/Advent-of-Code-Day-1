const fs = require('fs')

fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const lines = data.split(/\r?\n/);

  let numGreater = 0;
  let currentNum = Number(lines[0]);
  let segment = [];
  console.log(`first line was ${currentNum}`)
  // print all lines
  lines.forEach((line) => {
    if (Number(line) && segment.length === 3) {
      let currentSegment = segment.reduce((a, b) => a + b);
      segment.push(Number(line));
      segment.shift();
      let nextSegment = segment.reduce((a, b) => a + b);
      if (currentSegment < nextSegment) {
        numGreater++;
      }
    } else {
      segment.push(Number(line));
    }
    console.log(segment)
  });

  console.log(`last line was ${currentNum}`)
  console.log(numGreater);
})