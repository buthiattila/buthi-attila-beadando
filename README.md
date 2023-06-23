https://finomreceptek.hu/receptkategoriak

Hozz létre egy új git repót név-beadandó formában.
A beadandó feladat egy recept oldal elkészítése. A feladat beadási határideje 2023.08.01. 23:59.
A következő kötelező elemekből kell álljon az oldal.
OK - A weblap legyen responsive.
OK - Használja az Angular Material lehetőségeit.
OK - Legyen egy sticky felső menüsor (kis képernyő méreten hamburgermenü)
OK - Legyen egy statikus footer rész, mely tartalmazza a nevetek, elérhetőségetek.
- A főoldal jelenítsen meg 5 különböző étel kategóriát sávosan.
  - Minden egyes sáv tartalmazzon 10 ételt.
    - Egy elem részei: Név, rövid leírás, kép, kedvencek közé tétel/törlés kedvencek közül (lásd később)
OK  - Bármely elemre kattintva megnyílik navigáció után az étel összes adata.
    OK - név, legalább 3 kép sliderben, hosszú leírás, összetevők, elkészítés
- Legyen egy összes étel menüpont ahol grid elrendezésben látszik az összes étel
  - Az oldalon legyen egy szabadszavas kereső mely az étel nevében vagy a kategória nevében keres
  - Egy elem részei: Név, rövid leírás, kép, kedvencek közé tétel/törlés kedvencek közül (lásd később)
  - A kereső mellett legyen egy checkbox vagy radio gomb mely plusz feltételként hozzáadja, hogy csak a kedvencek közt keressen a kereső.
  - Üres kereső mező esetén az összes találatot meg kell mutatni
  - Ha nincs találat akkor írjuk ki ezt üzenetként
OK - Az applikáció futása alatt (oldalújratöltésig) végig tudja mi van vagy nincs a kedvencekben, tehát appon belüli navigáció során se vesszen el ez az adat.
OK - Az apphoz szükséges adatok mockolt api servicen keresztül érkezzenek observable-ben.
OK A feladatot új angular installal végezzétek el, stílusozáshoz használjátok az scss-t és kövessétek a tanfolyam során tanult kódolási és nevezék konvenciókat.
- A kész projektet buildelve telepítsétek firebasere. A sikeres beadáshoz aktív firebase link és publikus git repó szükséges!
  Egy ételről ezeket tudjuk:
- név
- kategória
- kép
- rövid leírás
- hosszú leírás
- összetevők
- elkészítés
- silder képek (min 3)
