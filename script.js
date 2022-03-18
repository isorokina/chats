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
    fetch(API + '/suutiit/' +vaards.value+ '/'+ zinja.value)//otrā kursu daļa
}
async function ielaadeetChataZinjas()
{
    ///let datiNoServera=await fetch('chatazinjas.txt')
    let datiNoServera=await fetch(API+'/lasiit')
    let dati=await datiNoServera.text();
    //console.log(dati);
    zinjas.innerHTML=dati;
}
//setInterval(ielaadeetChataZinjas,1000)//ielādēt 1 sek čata ziņas
async function ielaadeetChataZinjasJson()
{
    ///let datiNoServera=await fetch('chatazinjas.txt')
    let datiNoServera=await fetch(API+'/lasiit')
    let dati=await datiNoServera.json();
    //console.log(await dati);
    //zinjas.innerHTML=dati;
    //var i=i//plašāks, pēc noklusējuma
    i=0;
    while(i< 5))
    {
        console.log(i)
        i=i+1;
    }
}

