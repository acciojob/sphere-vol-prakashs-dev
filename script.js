function volume_sphere() {
    //Write your code here
  let radius = document.getElementById("radius").value;
  radius = Math.abs(radius);
  // volume of sphere formula ==> 4/3 * Math.PI * r^3
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById("volume").value = volume;
  return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
