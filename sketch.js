const order="nxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'."
let dog;
var video;
let loadtext;
let sagan;
let startindex=0;

function preload(){
  dog=loadImage('doggo.jpg');
  pixelDensity(1);
  loadtext=loadStrings('pale_blue_dot.txt')

  // video=createCapture(VIDEO);
  // video.size(300,300);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  sagan=loadtext.join(' ');
  textFont("Courier-Bold")
}

function draw() {
  frameRate(10);
  background(0);
  // image(dog,230,0,2*width/3,height);
  let charindex=startindex;
  let h=height/dog.height;
  let w=2*h/3;
  dog.loadPixels();
  for(j=0; j<dog.height; j++){
  for(i=0; i<dog.width; i++){
      let pixelindex=(i+j*dog.width)*4;
      const r=dog.pixels[pixelindex+0];
      const g=dog.pixels[pixelindex+1];
      const b=dog.pixels[pixelindex+2];
      let avg=(r+g+b)/3;

      noStroke();
      fill(avg);
      textAlign(CENTER,CENTER);
      // const charindex=floor(map(avg,0,255,order.length-1,0));
      textSize(h);
      text(sagan.charAt(charindex % sagan.length), 405+i * w + w * 0.5, j * h + h * 0.5)
      charindex++;
    }
  }
  startindex++;
}
