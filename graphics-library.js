// GRAPHICS LIBRARY

// FUNCTION LIST
// canvasSize(width, height)
// background(color)
// stroke(color)
// fill(color)
// lineWidth(width)
// font(fontSetting)
// rect(x, y, w, h, mode)
// line(x1, y1, x2, y2)
// circle(x, y, r, mode)
// triangle(x1, y1, x2, y2, x3, y3, mode)
// polygon(points, mode)
// text(message, x, y, mode)
// ellipse(x, y, xRadius, yRadius, rotation, mode)
// image(img, x, y, w, h)
// imageClip(img, xc, yc, wc, hc, x, y, w, h)

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 700;
cnv.height = 600;

// Variables
let snowA = 0;
let treeSnowA = 0;

// Type your examples from the notes below this line.

// Animation Example
requestAnimationFrame(draw);

function draw() {
  // backdrop
  ctx.fillStyle = "darkBlue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // ground
  ctx.fillStyle = "white";
  ctx.fillRect(0, 500, cnv.width, 100);

  // Moon

  ctx.fillStyle = "lightGrey";
  ctx.beginPath();
  ctx.arc(25, 25, 100, 0, 2 * Math.PI);
  ctx.fill();

  // Log cabin
  // main part
  ctx.fillStyle = "rgb(110, 52, 16)";
  ctx.fillRect(400, 400, 200, 125);

  ctx.beginPath();
  ctx.moveTo(300, 400);
  ctx.lineTo(400, 400);
  ctx.lineTo(400, 525);
  ctx.lineTo(300, 525);
  ctx.lineTo(300, 400);
  ctx.fill();
  // roof
  ctx.beginPath();
  ctx.moveTo(350, 400);
  ctx.lineTo(400, 400);
  ctx.lineTo(375, 350);
  ctx.lineTo(300, 400);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(375, 350);
  ctx.lineTo(550, 350);
  ctx.lineTo(600, 400);
  ctx.lineTo(400, 400);
  ctx.fill();

  // Firewood storage
  ctx.fillRect(310, 450, 10, 65);
  ctx.fillRect(345, 450, 10, 65);

  ctx.beginPath();
  ctx.moveTo(330, 425);
  ctx.lineTo(380, 425);
  ctx.lineTo(360, 460);
  ctx.lineTo(305, 460);
  ctx.lineTo(330, 425);
  ctx.fill();

  // snow on roof
  ctx.fillStyle = `rgb(255, 255, 255, ${snowA})`;
  ctx.beginPath();
  ctx.moveTo(375, 350);
  ctx.lineTo(550, 350);
  ctx.lineTo(570, 370);
  ctx.lineTo(330, 380);
  ctx.lineTo(375, 350);
  ctx.fill();

  // Outlines

  // Main body outline
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.strokeRect(400, 400, 200, 125);
  ctx.beginPath();
  ctx.moveTo(300, 400);
  ctx.lineTo(400, 400);
  ctx.lineTo(400, 525);
  ctx.lineTo(300, 525);
  ctx.lineTo(300, 400);
  ctx.stroke();

  // Firewood storage outline
  ctx.strokeRect(310, 460, 10, 65);
  ctx.strokeRect(345, 460, 10, 65);
  ctx.beginPath();
  ctx.moveTo(330, 425);
  ctx.lineTo(380, 425);
  ctx.lineTo(360, 460);
  ctx.lineTo(305, 460);
  ctx.lineTo(330, 425);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(380, 425);
  ctx.lineTo(380, 435);
  ctx.lineTo(365, 460);
  ctx.lineTo(360, 460);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(320, 460);
  ctx.lineTo(325, 460);
  ctx.lineTo(325, 525);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(355, 460);
  ctx.lineTo(360, 460);
  ctx.lineTo(360, 525);
  ctx.stroke();

  // roof outline

  ctx.beginPath();
  ctx.moveTo(350, 400);
  ctx.lineTo(400, 400);
  ctx.lineTo(375, 350);
  ctx.lineTo(300, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(375, 350);
  ctx.lineTo(550, 350);
  ctx.lineTo(600, 400);
  ctx.lineTo(400, 400);
  ctx.stroke();

  // Trees
  ctx.fillStyle = "rgb(110, 52, 16)";
  ctx.fillRect(150, 350, 20, 200);
  ctx.strokeRect(150, 350, 20, 200);

  ctx.fillStyle = "darkGreen";
  triangle(160, 325, 120, 400, 200, 400, "fill");
  triangle(160, 350, 110, 450, 210, 450, "fill");
  triangle(160, 390, 100, 490, 220, 490, "fill");

  // snow on tree
  ctx.fillStyle = `rgba(255, 255, 255, ${treeSnowA})`;
  ctx.beginPath();
  ctx.moveTo(160, 325);
  ctx.lineTo(120, 400);
  ctx.lineTo(145, 380);
  ctx.lineTo(160, 390);
  ctx.lineTo(175, 380);
  ctx.lineTo(200, 400);
  ctx.fill();

  // Details
  // windows

  ctx.fillStyle = "lightBlue";
  ctx.beginPath();
  ctx.moveTo(525, 425);
  ctx.lineTo(575, 425);
  ctx.lineTo(575, 475);
  ctx.lineTo(525, 475);
  ctx.fill();

  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(525, 425);
  ctx.lineTo(575, 425);
  ctx.lineTo(575, 475);
  ctx.lineTo(525, 475);
  ctx.lineTo(525, 425);
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(550, 425);
  ctx.lineTo(550, 475);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(525, 450);
  ctx.lineTo(575, 450);
  ctx.stroke();

  // Door
  ctx.fillStyle = "rgb(102, 50, 20)";
  ctx.beginPath();
  ctx.moveTo(430, 430);
  ctx.lineTo(490, 430);
  ctx.lineTo(490, 520);
  ctx.lineTo(430, 520);
  ctx.lineTo(430, 430);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(430, 430);
  ctx.lineTo(490, 430);
  ctx.lineTo(490, 520);
  ctx.lineTo(430, 520);
  ctx.lineTo(430, 430);
  ctx.stroke();
  // Doorknob
  ctx.fillStyle = "rgb(255, 221, 0)";
  ctx.beginPath();
  ctx.arc(480, 480, 5, 0, 2 * Math.PI);
  ctx.fill();

  // Chimney Smoke
  for (i = 0; i < smokeArray.length; i++) {
    ctx.fillStyle = "rgba(157, 154, 155, 0.29)";
    ctx.beginPath();
    ctx.arc(
      smokeArray[i].x,
      smokeArray[i].y,
      smokeArray[i].size,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  for (i = 0; i < smokeArray.length; i++) {
    smokeArray[i].x += Math.random() * 1 + 0.5;
    smokeArray[i].y -= smokeArray[i].speed;

    if (smokeArray[i].y < 0 || smokeArray[i].x > cnv.width) {
      smokeArray[i].y = 340;
      smokeArray[i].x = 525;
    }
  }

  // Chimney
  ctx.fillStyle = "lightGrey";
  ctx.beginPath();
  ctx.moveTo(525, 390);
  ctx.lineTo(525, 340);
  ctx.lineTo(540, 340);
  ctx.lineTo(540, 390);
  ctx.moveTo(525, 390);
  ctx.lineTo(515, 385);
  ctx.lineTo(515, 340);
  ctx.lineTo(525, 340);
  ctx.lineTo(540, 390);
  ctx.fill();

  // chimney stroke
  ctx.beginPath();
  ctx.moveTo(525, 390);
  ctx.lineTo(525, 340);
  ctx.lineTo(540, 340);
  ctx.lineTo(540, 390);
  ctx.moveTo(525, 390);
  ctx.lineTo(515, 385);
  ctx.lineTo(515, 340);
  ctx.lineTo(525, 340);
  ctx.lineTo(525, 390);
  ctx.lineTo(540, 390);
  ctx.stroke();

  // Snowfall
  for (i = 0; i < snowflakeArray.length; i++) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(
      snowflakeArray[i].x,
      snowflakeArray[i].y,
      snowflakeArray[i].size,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  for (i = 0; i < snowflakeArray.length; i++) {
    snowflakeArray[i].y += snowflakeArray[i].downSpeed;
    snowflakeArray[i].x += snowflakeArray[i].sideToSide;

    if (snowflakeArray[i].y > cnv.height || snowflakeArray[i].x > cnv.width) {
      snowflakeArray[i].y = -1;
      snowflakeArray[i].x = Math.random() * cnv.width;
    }
  }

  if (snowA != 1) {
    snowA +=
      0.00015 * snowflakeArray[Math.floor(Math.random() * 100)].downSpeed;
  }

  if (treeSnowA != 1) {
    treeSnowA +=
      0.00015 * snowflakeArray[Math.floor(Math.random() * 100)].downSpeed;
  }

  // Request new draw frame
  requestAnimationFrame(draw);
}

// Set the canvas to the provided size
function canvasSize(width, height) {
  cnv.width = width;
  cnv.height = height;
}

// Fill the canvas with the provided color
function background(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}

// Set the strokeStyle
function stroke(color) {
  ctx.strokeStyle = color;
}

// Set the fillStyle
function fill(color) {
  ctx.fillStyle = color;
}

// Set the lineWidth
function lineWidth(width) {
  ctx.lineWidth = width;
}

// Set the font
function font(fontSetting) {
  ctx.font = fontSetting;
}

// Draw a stroke or fill rectangle with a top-left corner of (x,y), a width of w and a height of h
function rect(x, y, w, h, mode) {
  if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Endpoint 1
  ctx.lineTo(x2, y2); // Endpoint 2
  ctx.stroke();
}

// Draw a stroke or fill circle with center (x,y) and radius of r
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw a stroke or fill triangle with vertices (x1,y1), (x2,y2), (x3,y3)
function triangle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1); // Vertex 1
  ctx.lineTo(x2, y2); // Vertex 2
  ctx.lineTo(x3, y3); // Vertex 3
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Draw a stroke or fill polygon using the given array of points
function polygon(points, mode) {
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}

// Draw stroke or fill text with bottom-left corner (x,y)
function text(message, x, y, mode) {
  if (mode === "fill") {
    ctx.fillText(message, x, y);
  } else if (mode === "stroke") {
    ctx.strokeText(message, x, y);
  }
}

// Draw a stroke or fill ellipse with center (x,y)
function ellipse(x, y, xRadius, yRadius, rotation, mode) {
  ctx.beginPath();
  ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.stroke();
  }
}

// Draw an image on the canvas
function image(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}

// Draw a clip of an image on the canvas
function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
  ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}

function mousedownHandlerLib() {
  mouseIsPressed = true;
}

function mouseupHandlerLib() {
  mouseIsPressed = false;
}

function keydownHandlerLib(event) {
  keyIsDown[event.keyCode] = true;
}

function keyupHandlerLib(event) {
  keyIsDown[event.keyCode] = false;
}

function mousemoveHandlerLib(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}
