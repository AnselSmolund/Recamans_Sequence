var numbers = [];
var count = 1;
var sequence = [];
var index = 0;
var arcs = [];
var maxi = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  sequence.push(0);
  numbers[index] = true;

}
class Arc{
  constructor(begin,end,dir){
    this.begin = begin;
    this.end = end;
    this.dir = dir;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  show(){
    var diameter = this.end - this.begin;

    var x = (this.end + this.begin)/2;
    stroke(255);
    strokeWeight(0.4);
    fill(this.r, this.g,this.b, 100);
    if(this.dir == 0){
      arc(x, 0,diameter,diameter,0,PI);
    }
    else{
      arc(x, 0-20,diameter,diameter,PI,0);
    }
  }
}

function step(){
  var next = index - count;
  if(numbers[next] || next < 0){
    next = index + count;
  }
  numbers[next] = true;
  sequence.push(next);
  if(index > maxi){
    maxi = index;
  }



  var a = new Arc(index, next, count%2);

  arcs.push(a);
  index = next;
  count++;


}
function draw() {
  step();
  translate(0,height/2);
  scale(width/maxi);
  background(0);

  for(var a of arcs){
    a.show();
  }
  scale(0,1);



}
