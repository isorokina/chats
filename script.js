//concole.log(1)
let zinja=document.querySelector(.manaZinja);
let zinjas=document.querySelector(.chataZinjas);

function suutiitZinju()
{
    console.log("Sūtīt ziņu darbojās");
    //let zinja=document.querySelector(.manaZinja).value; //piešķir vienu vērtējumu
    ///let zinja=document.querySelector(.manaZinja);
    ///let zinjas=document.querySelector(.chataZinjas);

    zinjas.innerHTML=zinjas.innerHTML+'</br>'+zinja.value;
}
async function ielaadeetChataZinjas()
{
    let datiNoServera=await fetch('chatazinjas.txt')
    let dati=await datiNoServera.text();
    //console.log(dati);
    zinjas.innerHTML=dati;
}