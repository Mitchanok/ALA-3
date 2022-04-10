function tafels(){
  document.getElementById("omzetten").innerHTML= " ";
  let veeld1 = document.getElementById("numeral1").value;
  let veeld2 = document.getElementById("numeral2").value;
  for( let i =1 ; i <=veeld1; i++)
  {
   document.getElementById("omzetten").innerHTML+= (numeral2*i +" ");
  }
}document.getElementById('stelsel.bereken').addEventListener('click', tafelstelsel);