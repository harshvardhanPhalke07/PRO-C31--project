function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var plinkos=[]
var particles=[]
var divisions=[]
var divisionHeight=300

function draw() {
  background(255,255,255);  
  drawSprites();
  // four rows of plinkos
  for(var j=40; j <=width; j=j+50 ){
 plinkos.push(new plinko(j,75))
  }
for(var v=15; v <=width-10;v=v+50){
  plinkos.push(new plinko(v,175))
}
for(var z=5;z <=width-20;z=z+50){
  plinkos.push(new plinko(z,275))
}
for(var l=0;l<=width-30;l=l+50){
  plinkos.push(new plinko(l,375))
}
// divisions
for (var k=0; k <= width;k = k + 80){
divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight))
}
for(var t=0;t < plinko.length;t++){
  plinkos[t].display
}
for(var r=0;r < division.length;r++){
  division[r].display
}
