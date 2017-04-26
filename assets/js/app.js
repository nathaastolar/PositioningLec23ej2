var students = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán","Miriam Mendoza","Elizabeth Condori"];
function nombres(num){
  return "assets/img/students/" + (num+1) + ".png"
}
function creandoCoders(a){
  var div = document.createElement("div");
  var imagen = document.createElement("img");
  var indice = students.indexOf(a);
  var texto = document.createElement("span");
  div.setAttribute("class", "div-img");
  imagen.setAttribute("class","img");
  imagen.setAttribute("alt",a);
  imagen.setAttribute("src",nombres(indice));
  texto.setAttribute("class","text");
  texto.innerHTML = students[indice];

    div.appendChild(imagen);
    div.appendChild(texto);
    return div;
}

window.addEventListener("load",function(){
  var coder = [];
  for(var i = 0; i<students.length; i++){
    coder.push(document.getElementById("coders").appendChild(creandoCoders(students[i])));
  }
  return coder;
});
