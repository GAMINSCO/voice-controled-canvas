x = 0;
y = 0;

draw_apple = "";

apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var no = 0;

function preload() {
  apple = loadImage("apple.png");
}

function start() {
  document.getElementById("status").innerHTML = "System is listening please speak";
  recognition.start();
}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized : " + content;

  no = Number(content)

  if (Number.isInteger(no)) {
    document.getElementById("status").innerHTML = "Started Drawing Apples";
    draw_apple = "true";
  } else {
    document.getElementById("status").innerHTML = "No number found in the speech, please speak again.";
  }


}

function setup() {
  Canvas = createCanvas(1300, 530)
}

function draw() {

  if (draw_apple == "true") {
    document.getElementById("status").innerHTML = no + " Apples drawn";
    for (let i = 0; i < no; i++) {
      x = Math.floor(Math.random() * 1200);
      y = Math.floor(Math.random() * 450);
      image(apple, x, y, 50, 50)
    }
    draw_apple = "";
    speak()
  }
}

function speak() {
  var synth = window.speechSynthesis;

  speak_data = no + " Apples drawn";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

}

function CC() {
  setup()
}
