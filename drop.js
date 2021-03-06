var colo = 0
var col = prompt('Please choose a color from: red, blue, green, yellow, purple, orange, black. (Make sure that they are spelled the same as they are here.)')
if(col === 'red'){
 colo = '#FF0000'
}
else if(col === 'green'){
 colo = '#00FF00'
}
else if(col === 'blue'){
 colo = '#0000FF'
}
else if(col === 'yellow'){
 colo = '#FFFF00'
}
else if(col === 'purple'){
 colo = '#FF00FF'
}
else if(col === 'orange'){
 colo = '#FF7500'
}
else{
 colo = '#FFFFFF'
}

function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(colo);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}
