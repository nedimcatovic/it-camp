
let prvi_broj = 5;
let drugi_broj= 10;
let treci_tmp;

console.log(prvi_broj);
console.log(drugi_broj);

if(prvi_broj < drugi_broj) {
    console.log('Prvi broj je manji od drugog broja.');
} else{
    console.log('Prvi broj nije manji od drugog broja.')
}

treci_tmp = prvi_broj;
prvi_broj = drugi_broj;
drugi_broj = treci_tmp; 

console.log('Prvi broj:' + prvi_broj);
console.log('Drugi broj:' + drugi_broj);

if(prvi_broj < drugi_broj) {
    console.log('Prvi broj je manji od drugog broja.');
} else{
    console.log('Prvi broj nije manji od drugog broja.')
}

let vreme = 21; 

if(vreme < 10) {
    console.log('Dobro jutro!')
} else if(vreme<20) {
    console.log( 'Dobar dan!')
} else(
    console.log('Dobro vece!')
)

let mesec = 6;

switch(mesec) {
    case 1:
        console.log('Januar')
        break
    case 2:
        console.log('Februar')
        break
    case 3:
        console.log('Mart')
        break
    case 4:
        console.log('April')
        break
    case 5:
        console.log('Maj')
        break
    case 6:
        console.log('Jun')
        break
}


let ime = 'Nedim';
let prezime = 'Catovic';
let godine = 24;

console.log('Ja sam ' + ime + ' i ove godine imam ' + godine + ' godina.');

godine += 2;

let recenica = ('Za dve godine cu da imam ' + godine + ' godina.');
console.log(recenica);

godine -= 2;

let recenica2 = `Ja sam ${ime} imam ${godine} godine.`
console.log(recenica2);

//25 novcanica
let novcanice = 25;
//vrednost jedne novcanice je 10 eura
let vrednost_novcanice = 10;
//brojac
let brojac = 0;
//izbrojane novcanice
let izbrojane_novcanice = 0;

//broji novanice sve dok je brojac manji od broja novcanice
while(brojac < novcanice){
    izbrojane_novcanice++;
    brojac++;
}
console.log(izbrojane_novcanice);
console.log(izbrojane_novcanice * vrednost_novcanice);