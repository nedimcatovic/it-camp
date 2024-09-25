def sort_up(niz):
    for i in range(len(niz)-1):
        for j in range(i+1, len(niz)):
            if niz[i]> niz[j]:
                niz[i],niz[j]= niz[j], niz[i]

def sort_down(niz):
    for i in range(len(niz)-1):
        for j in range(i+1,len(niz)):
            if niz[i]<niz[j]:
                niz[i],niz[j]= niz[j], niz[i]


n = int(input("Unesi broj brojeva:"))
print("Unesite brojeve:")
brojevi=[int(input()) for i in range(n)]
sort_up(brojevi)

print("Sortirani brojevi u rastucem redosledu:")
print(brojevi)
for x in brojevi:
    print(x)
brojevi.sort()
brojevi.reverse()