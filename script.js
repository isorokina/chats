const API="https://chat1803.ijasorokina2.repl.co"
//concole.log(1)
let zinja=document.querySelector(.manaZinja);
let zinjas=document.querySelector(.chataZinjas);

function suutiitZinju()
{
    console.log("suutiitZinju() darbojas");
    //let zinja=document.querySelector(.manaZinja).value; //piešķir vienu vērtējumu
    ///let zinja=document.querySelector(.manaZinja);
    ///let zinjas=document.querySelector(.chataZinjas);

    zinjas.innerHTML=zinjas.innerHTML+'</br>'+zinja.value;
   // fetch(API + '/suutiit/Juris/' + zinja.value)
}
async function ielaadeetChataZinjas()
{
    ///let datiNoServera=await fetch('chatazinjas.txt')
    let datiNoServera=await fetch(API+'/lasiit')
    let dati=await datiNoServera.text();
    //console.log(dati);
    zinjas.innerHTML=dati;
}
setInterval(ielaadeetChataZinjas,1000)//ielādēt 1 sek čata ziņas
