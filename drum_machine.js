const string = "";
const vol = 0.5;
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 81) {
        clip("Q");
      document.getElementById("display").innerHTML = headers[0][1];
    } 
  else if(event.keyCode == 87) {
        clip('W');
        document.getElementById("display").innerHTML = headers[1][1];
    } 
  else if(event.keyCode == 69) {
        clip('E');
        document.getElementById("display").innerHTML = headers[2][1];
    } 
  else if(event.keyCode == 65) {
        clip('A');
        document.getElementById("display").innerHTML = headers[3][1];
    } 
  else if(event.keyCode == 83) {
        clip('S');
        document.getElementById("display").innerHTML = headers[4][1];
    } 
  else if(event.keyCode == 68) {
        clip('D');
        document.getElementById("display").innerHTML = headers[5][1];
    } 
  else if(event.keyCode == 90) {
        clip('Z');
        document.getElementById("display").innerHTML = headers[6][1];
    } 
  else if(event.keyCode == 88) {
        clip('X');
        document.getElementById("display").innerHTML = headers[7][1];
    } 
  else if(event.keyCode == 67) {
        clip('C');
        document.getElementById("display").innerHTML = headers[8][1];
    }
}, true);

document.getElementById("display").innerHTML = string;

const headers = [
  ["Q", 'Heater-1'],
  ["W", 'Heater-2'],
  ["E", 'Heater-3'],
  ["A", 'Heater-4'],
  ["S", 'Clap'],
  ["D", "Open-HH"],
  ["Z", "Kick-n'-Hat"],
  ["X", "Kick"],
  ["C", 'Closed-HH']
];

function clip (id) {
  const audio = document.getElementById(id);
  audio.play();
  if (id == "Q")  document.getElementById("display").innerHTML = headers[0][1];
  else if (id == "W")  document.getElementById("display").innerHTML = headers[1][1];
  else if (id == "E")  document.getElementById("display").innerHTML = headers[2][1];
  else if (id == "A")  document.getElementById("display").innerHTML = headers[3][1];
  else if (id == "S")  document.getElementById("display").innerHTML = headers[4][1];
  else if (id == "D")  document.getElementById("display").innerHTML = headers[5][1];
  else if (id == "Z")  document.getElementById("display").innerHTML = headers[6][1];
  else if (id == "X")  document.getElementById("display").innerHTML = headers[7][1];
  else if (id == "C")  document.getElementById("display").innerHTML = headers[8][1];
  audio.volume = this.vol;
};

document.getElementById("clip-q").addEventListener("click", clip(id));


function getVolume (volume) {
  this.vol = volume;
}

document.getElementById("vol").addEventListener("change", getVolume(volume));