function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  // noLoop();

  // var possibleCoords = [{X: 112, Y: 370}, {X: 307, Y: 370}, {X: 564, Y: 370}, {X: 830, Y: 370}, {X: 1015, Y: 370}, {X: 1280, Y: 370},
  //   {X: 112, Y: 610}, {X: 307, Y: 610}, {X: 564, Y: 610}, {X: 830, Y: 610}, {X: 1015, Y: 610}, {X: 1280, Y: 610}];

  //   console.log(random(possibleCoords));
}


function draw() {
  //lijnen
  // const maxWidth = windowWidth
  // const maxHeight = windowHeight;
  // for (let i = 0; i < 100; i ++) {
  //   let randomNumber = random(maxWidth)
  //   let randomWidth = random(10)
  //   strokeWeight(randomWidth)
  //   line(0, i * 30, 10 + randomNumber, 0)
  // }

  //ellipsen
  // for (let i = 0; i < 30; i++) {
  //   let top = random(windowHeight)
  //   let bottom = random(windowWidth)
  //   let size = random(20, 300)
  //   let opacity = random(90)

  //   fill(0, 0, 255, opacity)
  //   noStroke()
  //   ellipse(top, bottom, size, size)
  // }

  //bewegende lijnen
  for (let i = 0, color = 0; i < 50; i++, color += 5) {
    let randomNumber = random(windowWidth)
    strokeWeight(3)
    stroke(color, color / 2, 255)
    line(0, i * 30, 10 + randomNumber, 0)
    stroke(255, color *2, color, color)
  }

  // rect(0,0,100,200)
  // line(0,0,20,500)



  // var mWidth = windowWidth;
  // var mwHeight = windowHeight;
  // const maxWidth = windowWidth
  // const maxHeight = windowHeight;
  // for (let y = 0; y < maxHeight; y += 100) {
  //   for (let x = 0; x < maxWidth; x += 100) {
  //     strokeWeight(1)
  //     stroke(51)
  //     rect(x, y, 100, 100)
  //     var lengte = 50 / sin(90)
  //     console.log(lengte)
  //     for (let i = 0; i < 10; i++) {
  //       let randomNumber = random(maxWidth)
  //       let randomWidth = random(5)
  //       strokeWeight(randomWidth)
  //       stroke('#222222');
  //       line(x - 50, y - 50, x + random(-100, 100), y + random(-100, 100))
  //     }

  //     fill(random(255), random(255), random(255))
  //   }
  // }


}
