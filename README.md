# Derma Ethica - Salon Lepote

Responzivan veb sajt za salon lepote specijalizovan za tretmane lica.

## Opis projekta

Derma Ethica je potpuno responzivan sajt kreiran sa HTML5, CSS3 i JavaScript-om. Sajt omogućava korisnicima da pregledaju usluge, zakažu tretmane i kontaktiraju salon.

## Funkcionalnosti :

### Obavezne funkcionalnosti :

1. Promena pozadinske boje sajta (theme-switcher)

- 3 pastelne boje: zelena, roze, žuta
- Čuva izbor korisnika u localStorage

2. Dinamičko generisanje rezervacija

- Forma sa 4 polja (ime, tretman, datum, vreme)
- Pravi stilizovane kartice rezervacija
- Prikazuje se kao "Vaše rezervacije"

3. Validacija kontakt forme

- Provera praznih polja
- Validacija email formata
- Minimalna dužina poruke (10 karaktera)
- Alert poruka za greške

4. Show/Hide dugme

- Prikazuje/sakriva FAQ sekciju
- Animirana tranzicija
- Tekst dugmeta se dinamički menja

5. Google Maps integracija

- Ugrađena mapa na kontakt stranici
- Prikazuje lokaciju salona

### Dodatne funkcionalnosti :

- Čuvanje odabrane teme u localStorage
- Responzivan dizajn (za telefon i desktop računar)
- Semantički HTML5
- CSS Grid i Flexbox layout
- Sticky header navigacija (Header se ne pomera dok korisnik skroluje stranicu)
- Glatke animacije i tranzicije

### Struktura projekta :

- U folderu Derma Ethica - Nikola Vatreš III2 se nalaze :

1. /images podfolder, koji sadrži 7 fajlova (6 webp slika i 1 svg vektor)
2. index.html (Početna stranica)
3. services.html
4. reservations.html
5. contact.html
6. main.css
7. app.js

## Tehnologije

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Maps integracija

## Responzivnost

- Desktop (1200px+) : 3 kolone u jednom redu, horizontalna navigacija
- Telefon (do 767px) : kolone su vertikalno postavljene, navigacioni meni je spakovan u hamburger meni, koji se otvara vertikalno (padajući meni, otvara se vertikalno)

## Boje (Teme)

- Zelena tema: #a8e6cf (default)
- Roze tema: #ffc0cb
- Žuta tema: #fff4a3

## Kako rade funkcionalnosti :

### 1. Theme switcher

- Otvorite bilo koju stranicu
- Kliknite na zeleno, roze ili žuto dugme u header-u
- Pozadina bi trebalo da se promeni
- Osvežite stranicu - tema bi trebalo da ostane ista (localStorage)

### 2. Providan hamburger meni

- Na telefonu umesto theme-switcher, pojavljuje se hamburger meni
- Klikom na hamburger, pojavljuje se providan padajući meni (navigacioni meni)
- Navigacioni meni je vertikalno postavljen

### 3. Dinamičko generisanje rezervacija

- Idite na stranicu "Rezervacije"
- Popunite formu (ime, tretman, datum, vreme)
- Kliknite "Kreiraj rezervaciju"
- Kartica rezervacije bi trebalo da se pojavi ispod forme

### 4. Validacija kontakt forme

- Idite na stranicu "Kontakt"
- Pokušajte da pošaljete praznu formu - trebalo bi da dobijete grešku
- Unesite neispravnu email adresu - trebalo bi da dobijete grešku
- Unesite poruku kraću od 10 karaktera - trebalo bi da dobijete grešku
- Popunite sve ispravno - trebalo bi da dobijete uspešnu poruku

### 5. Show/Hide dugme

- Idite na stranicu "Usluge"
- Skrolujte do kraja
- Kliknite "Prikaži više informacija" - FAQ sekcija bi trebalo da se pojavi sa animacijom
- Kliknite "Sakrij informacije" - FAQ bi trebalo da nestane

### 6. Google Maps

- Idite na stranicu "Kontakt"
- Skrolujte do kraja
- Mapa Beograda bi trebalo da bude vidljiva

## Autor

- Nikola Vatreš

## Uputstvo za pokretanje

1. Preuzmite sve fajlove projekta u folderu Derma Ethica - Nikola Vatreš III2
2. Otvorite `index.html` u browseru
3. Sajt je spreman za korišćenje
