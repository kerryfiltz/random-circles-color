function setup() {
  createCanvas(460, 460);
  frameRate(1);
}

function draw() {
  
  background('WHITE');
  fill('BLACK')
  rect(10,10,440,440)
  
  var step = 20
  var color1 = '#F0EC57'
  var color2 = '#ff6f59'
  var color3 = '#00c49a'
  var color4 = '#9197ae'
  
  // var color1 = '#0b0a07'
  // var color2 = '#F0EC57'
  // var color3 = '#748067'
  // var color4 = '#bbcea8'
  
  for(var x=20; x < width-20; x=x+step) {
    for(var y=20; y < width-20; y=y+step) {
      var locRan = random();
      var sizeRan = random(0.5,2);
      var transRan = random();
      var transparency = transRan*255
      var colorRan = random();
      
      line(x,y,x,y+step)
      line(x,y,x+step,y)
      line(x+step,y,x+step,y+step)
      line(x,y+step,x+step,y+step)
      
      if(colorRan < 0.25) {
        fill(color1)
      } else if(colorRan < 0.5) {
        fill(color2)
      } else if(colorRan < 0.75) {
        fill(color3)
      } else {
        fill(color4)
      }
      
      if(locRan < 0.25) {
        ellipse(x,y,sizeRan*10,sizeRan*10)
      } else if(locRan < 0.5) {
        ellipse(x+step,y,sizeRan*10,sizeRan*10)
      } else if(locRan < 0.75) {
        ellipse(x+step,y+step,sizeRan*10,sizeRan*10)
      } else {
        ellipse(x,y+step,sizeRan*10,sizeRan*10)
      }
      
    }
  }
}