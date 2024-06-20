var numberToFiud =0;
var attemps = 0;

function refresh(){
    // Geração de número aliatório
    attemps = 0;
    numberToFiud = parseInt(Math.random() *1000);

    console.log(numberToFiud)

}

function verifyNumber(){

    var bet = document.getElementById('bet').value;

    if(bet > 1000 || bet <1)
        {
            alert('Aposta Inválida');
            return;
        }

        alert('Aposta Válida')

        if(bet > numberToFiud){
            attemps++;
                alert('🚨O número para ser encontrado é MENOR🚨');
        }
        else if(bet < numberToFiud)
            {
            attemps++;    
                alert('🚨O número para ser encontrado é MAIOR🚨');
            }
            else
            {
                alert('.🎉Parabéns você acertou!! com '+attemps+' erros');
                refresh();
            }
}

refresh();