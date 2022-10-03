// JavaScript window.onload

window.onload = function() {
 document.querySelector("#heroimage h1").classList.add("tp");
 
  document.querySelector("#heroimage h1").onclick = function() {
    this.classList.toggle("lightgreen");   
  }
  
  document.querySelector("#recipeColumns #ingredients").onclick = function() {
    this.classList.toggle("tpShow");
  }
  
  document.querySelector("#recipeColumns #equipment").onclick = function() {
    this.classList.toggle("tpShow");
  }
  document.querySelector("#recipeColumns #directions").onclick = function() {
    this.classList.toggle("tpShow");
    }
    
  document.querySelector("#footer").innerHTML += "<p>Shout out to my mom for making this!</p>";
    
}