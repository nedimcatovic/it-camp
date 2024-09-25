// import numpy as np
// import matplot.libpyplot as plt

// sarajevo = int(36000)
// beograd = int(50000)
// zagreb = int(500000)

// plt.plot(sarajevo,beograd,zagreb)
// plt.title("Graf Populacije Gradova")
// plt.sarajevolabel('Sarajevo')
// plt.beogradlabel('Beograd')
// plt.zagreblabel("Zagreb")
// plt.grid(True)
// plt.show()

// ///////

// 1.

// 		---AJSIN NACIN---

// set_1 = {4,66,63,23,0,63}
// set_2 = {0,1,6,7,64,7,8}

// print("Unija: ", set_1 | set_2)
// print("Presjek: ", set_1 & set_2)

// 2.

// 		---AJSIN NACIN---

// rijec_1 = set(input("Unesite prvu rijec: "))
// rijec_2 = set(input("Unesite drugu rijec: "))

// print("Duzina: ", len(rijec_1 | rijec_2))
// print("Zajednicki znakovi: ", rijec_1 & rijec_2)

// 				*****  REČNICIII

// 1.

// osoba = {'ime':'Selma','prezime':'Muratović','godine':'20'}
// print(osoba)

// 2.

// osoba = {'ime':'Selma','prezime':'Muratović','godine':'20'}
// osoba['adresa'] ='Bandzovo brdo'
// print(osoba)

// 3.

// osoba = {'ime':'Selma','prezime':'Muratović','godine':'20'}
// osoba['adresa'] ='Bandzovo brdo'
// del osoba ['godine']
// print(osoba)

// 4.

// recnik = {'plava':"blue",'roza':'pink','zelena':'green','zuta':'yellow','crvena':'red'}

// while 1 == 1:
//     rijec = str(input("Unesite rijec: "))
//     rijec = rijec.lower()

//     if rijec == "x":
//         break
//     if rijec in recnik:
//         print(recnik[rijec])
//     else:
//         print("Ta rijec ne postoji u recniku.")

// 				***** TORKEE (TUPLE)

// 1.

// torka = tuple("Matematika")
// print(torka[-2:])

// 2.

// torka = tuple("Matematika")
// print(torka[-6:-2])

// 3.

// lista = ['a','e','i','o','u']
// print(lista[:3])
// del lista[-3]
// print(lista)

// import numpy as np

// niz_brojeva = [1,2,3,4,5]

// suma_niza = np.sum(niz_brojeva)
// prosek_niza = np.mean(niz_brojeva)

// print("Suma niza:", suma_niza)
// print("Prosek niza"m prosek_niza)
