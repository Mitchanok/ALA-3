function Fibonacci(){
    let getal = document.getElementById("fibonacci").value;
    let n1 = 0;
    let n2 = 1;
    let n3;
    document.getElementById("fibonacci.antwoord").innerHTML = "<br>1<br>";
    for(let i = 1; i<=getal ;i++){
        document.getElementById("fibonacci.antwoord").innerHTML += (n3 = n1 + n2) + "<br>",n1=n2,n2=n3;
    }
}document.getElementById('fibonacci.knop').addEventListener('click', Fibonacci);


function isPrime() {
    document.getElementById("priemgetallen.antwoord").innerHTML = " ";
    let getal = document.getElementById("veeld").value
    for (var counter = 2; counter <= getal; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    document.getElementById("priemgetallen.antwoord").innerHTML += counter + "<br>";
        }
    }

    }document.getElementById('priemgetallen.knop').addEventListener('click', isPrime);

  