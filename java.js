
function tafels(){
    document.getElementById("tafels.antwoord").innerHTML= " ";
    let veeld1 = document.getElementById("tafels.veeld1").value;
    let veeld2 = document.getElementById("tafels.veeld2").value;
    for( let i =1 ; i <=veeld1; i++)
    {
     document.getElementById("tafels.antwoord").innerHTML+= (veeld2*i +" ");
    }

}document.getElementById('tafel.bereken').addEventListener('click', tafels);

function machten(){
    document.getElementById("machten.bereken").innerHTML= " ";
    let grondgetal = document.getElementById("grondgetal").value;
    let exponent = document.getElementById("exponent").value;
    for( let i =0 ; i <=exponent; i++)
    
    {
     document.getElementById("machten.bereken").innerHTML+= ( grondgetal**i +" ");
    }

}document.getElementById('Machten').addEventListener('click', machten);




function kwadraten(){
    document.getElementById("kwdraat.antwoord").innerHTML= " ";
    let getal1 = document.getElementById("kwadraten").value;
    for(let i =1 ; i <=getal1; i++)
    {
        document.getElementById("kwdraat.antwoord").innerHTML = Math.sqrt(getal1);
}
document.getElementById('bereken.kwadraten').addEventListener('click', kwadraten)
}