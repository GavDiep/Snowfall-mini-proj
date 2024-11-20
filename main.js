// Snowfall project

// snowflake stuff
let snowflakeArray = [];

for (i = 0; i < 150; i++) {
  snowflakeArray.push({
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    size: Math.random() * 2 + 1.5,
    downSpeed: Math.random() * 2 + 0.2,
    sideToSide: Math.random() * 1.1 + -0.5,
  });
}

let smokeArray = [];

for (i = 0; i < 30; i++) {
  smokeArray.push({
    x: 525 + Math.random() * 20 + 5,
    y: Math.random() * 340,
    size: 20,
    speed: Math.random() * 1 + 0.5,
  });
}

// Mouse handlers
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    snowflakeArray.push({
      x: Math.random() * cnv.width,
      y: -1,
      size: Math.random() * 2 + 1.5,
      downSpeed: Math.random() * 1 + 0.2,
      sideToSide: Math.random() * 1.1 + -0.5,
    });
  } else if (event.code == "ArrowLeft") {
    if (snowflakeArray.length >= 50) {
      snowflakeArray.splice(snowflakeArray.length - 1, 1);
    }
  } else if (event.code == "ArrowUp") {
    for (i = 0; i < snowflakeArray.length; i++) {
      if (snowflakeArray[i].downSpeed < 4) {
        snowflakeArray[i].downSpeed += 0.05;
      }
    }
  } else if (event.code == "ArrowDown") {
    for (i = 0; i < snowflakeArray.length; i++) {
      snowflakeArray[i].downSpeed -= 0.05;
      if (snowflakeArray[i].downSpeed < 0.5) {
        snowflakeArray[i].downSpeed = 0.5;
      }
    }
  } else if (event.code == "KeyR") {
    location.reload();
  }
}

console.log(snowflakeArray[1].downSpeed);
