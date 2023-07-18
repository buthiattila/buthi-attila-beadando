1. Mi az angular?

Angular a Google által kifejlesztett nyílt forráskódú, TypeScript programozási nyelvet használó
webes front-end keretrendszer.

2. Milyen technológiákat használ az Angular?

Alapvetően a TypeScript programozási nyelvet használja, amely kibővíti a JavaScriptet statikus típusozással,
osztályokkal, interfészekkel és egyéb fejlesztői eszközökkel. Emellett alapértelmezetten HTML, CSS/SCSS/SASS/LESS nyelveket és RxJS
könyvtárakat használ.

3. Mi az a "data-binding"?

A "data-binding" lehetővé teszi az adatok és a felhasználói felület közötti automatikus szinkronizációt. Az adatok és a
felhasználói felület közötti kapcsolat jön létre, és az adatok automatikusan frissülnek, amikor azok megváltoznak, valamint az alkalmazás felhasználói felülete is
frissül, amikor a felhasználó interakcióba lép és módosítja az adatokat.

4. Milyen data binding �pusokat ismersz?

One-way (egyirányú): Az adatok csak az adatforrástól a felhasználói felületre kerülnek át. Ez azt jelenti, hogy az
adatok változása automatikusan frissíti a felhasználói felületet, de a felhasználói felületen történő változások nem
módosítják az eredeti adatokat. Two-way (kétirányú): Az adatok változása mind az adatforrást, mind a felhasználói
felületet frissíti. Ez azt jelenti, hogy a felhasználói felületen történő változások visszahatnak az adatforrásra is, és
az adatok automatikusan frissülnek mindkét irányban.

5. Mik a pipeok?

A "pipe" az Angular keretrendszerben használt funkció, amely lehetővé teszi az adatok átalakítását (pl dátum, pénznem,
szöveg méret stb) vagy formázását a felhasználói felületen megjelenítés előtt. A sablonokban használhatók. A pipe-ok
halmozhatók, így egy adatot több átalakításon is átküldhetünk.

6. Mi az az async pipe?

Lehetővé teszi, hogy közvetlenül a sablonban kezeljük az aszinkron adatokat, amelyeknek időbe telhetnek a
betöltésük, anélkül, hogy szükség lenne manuális feliratkozásra és leiratkozásra. Figyeli az adatok állapotát, és
automatikusan frissíti a felhasználói felületet, amikor az adatok elérhetővé válnak vagy változnak.

7. Milyen kötelező elemei vannak egy komponensnek?

1. A komponensnek rendelkeznie kell egy deklarációval, amely megtalálható a @Component dekorátorban, és tartalmazza a
   komponens metainformációit, például a szelektorát, a sablont és a stílusokat.

2. Osztállyal is kell rendelkeznie, amely tartalmazza a komponens logikáját és viselkedését. Itt definiálhatjuk a
   változókat, metódusokat és életciklus-horogokat, amelyek szükségesek a komponens működéséhez.

3. Sablon, ami meghatározza, hogy hogyan jelenik meg a komponens a felhasználói felületen. Ez lehet HTML-kód, amely
   tartalmazza a felhasználói elemeket, adatkötéseket és strukturális direktívákat.

8. Mi a különbség az inline és az külső template közöt? Melyiket mikor használjuk?

Az inline sablon közvetlenül a komponens kódszerkezetében helyezkedik el, a komponens fájlban, ez által nincs szükség
HTML fájlra. A külső template esetében viszont az elérési útvonal szerepel a komponens fájlban. Hosszabb. bonyolultabb
sablonhoz a külső, egysorosokhoz a belső ajánlott.

9. Mire jó az ngFor?

Az ngForral felsorolhatjuk és megjeleníthetjük az adatokat a felhasználói felületen. Az ngFor iterál az adatokon, és
minden elemre alkalmazza az adott sablonrészletet. for ciklusként használható ás értelmezhető.

10. Mire jó az ngIf?

Az ngIf feltételt ellenőriz, és csak akkor jeleníti meg az elemet (kódrészletet), ha a megadott feltétel igaz.

11. Hogy kötsz sorba pipeokat?

a pipe (|) jellel

13. Mi az a promise és mi az observable? Miben tér el a működésük?

A Promise egy olyan objektum, amely egy aszinkron művelet eredményét képviseli, amely jövőbeli időpontban lesz
teljesítve vagy elutasítva. Az Observable rugalmasabb és erőteljesebb, mint a Promise, mivel több értéket és idővel
változó adatokat képes kezelni. tehát a promise egyszeri érték/hibakezelésilehetőséget ad, az observable pedig
folyamatost.

14. Mi az a string interpoláció?

Lehetővé teszi változók vagy kifejezések beillesztését egy string értékébe, amely template esetén maga a template (
pl <h1>{{page.title}}</h1>)

15. Minek a rövidítése az AOT? Miért jó?

AOT az Angular keretrendszer egyik fordítási technikája. A fordítási módszerben a sablonokat és a kódot a fejlesztési
folyamat során előre fordítják JavaScript kóddá.

16. Mik a komponensek?

Az angular keretrendszerben írt programok "építőkövei": alkalmazásokat komponensek alkotják, amelyek a felhasználói felület különböző részeit képviselik.

17. Milyen "lifecycle hook"-okat ismersz? Mire használjuk ezeket?

1. ngOnInit: a komponens inicializálódásakor hívódik meg.
2. ngOnChanges: adatmódosításkor hívódik meg.
3. ngAfterViewInit: Ha a komponens nézet (view) és az összes gyermek komponens nézet elkészült. A kinézet manipulálására
   használható.
4. ngAfterContentInit: tartalominicializálás után fut le. A komponens tartalmát manipulálja vagy használja.
5. ngOnDestroy: Amikor a komponens eltávolításra kerül a DOM-ból. leiratkozásokra és hasonlókra használható.

18. Mi az az Angular Material?

Frontend frame, amely lehetővé teszi egységesen kialakított esztétikus felület építését a benne előre meghatározott (és
módosítható) szabály és funkciókészlet alapján

19. Mi az a typescript?

nyílt forráskódú típusos, oop javascript

20. Miben különbözik a typescript a javascriptől?

OOP programozási lehetőség, típusos kódolás. 
A javascript prototípus alapú, míg a typescript már OOP (osztályok, interface-k, stb).

21. Mik az interfacek?


22. Miben tér el az interface és a típus?

Az interface meghatározza a tulajdonságokat, a metódusokat és a struktúrát, amelyet egy objektumnak vagy osztálynak
teljesítenie kell. A típus viszont lehetővé teszi egyedi típusok definiálását, amelyek összetett típusokat, uniókat,
keresztmetszeteket vagy más típusokat tartalmaznak. legfontosabb eltérés: Az interface-ban van öröklődés, a típusnál
nincs

23. Milyen hozzáférési szintek (access modifier) léteznek typescriptben?

public, private, protected,readonly,

24. Mi a különbség a null és undefined értékek közöt?

A null érték szerint a változó explicit módon nem rendelkezik értékkel, vagyis nincs értelme vagy az értéke nulla. Az
undefined szerint a változó nem rendelkezik definiált értékkel. Az undefined akkor jelenik meg, ha egy változó
deklarált, de nincs neki értékül adva.

25. Mire jó a "readonly"?

A readonly kulcsszó azért használatos, hogy megjelöljük egy osztály vagy interfész tulajdonságát vagy egy paraméterét
csak olvashatóként, azaz nem lehet megváltoztatni az értékét.

26. Mi az öröklődés?

Az objektumorientált programozás egyik alapelve, megteremtve az osztályok közötti hierarchikus kapcsolatot. Az öröklődés
révén egy osztály megörökölheti egy másik osztály tulajdonságait (értékeket, metódusokat), és további
tulajdonságokat és metódusokat adhat hozzá vagy felülírhatja.

27. Mi a magábafoglalás (encapsula�on)?


28. Mi a polimorfizmus?

A polimorfizmus az objektumorientált programozás egyik alapelve, amely lehetővé teszi az objektumoknak, osztályoknak és
interfészeknek azonos neveken történő viselkedését, de különböző implementációkkal.

29. Nevezz meg 3 design paternt!


30. Írd le a SOLID elveket

S-SingleResponsibilityPrinciple(Egyfelelősségelve): Egy osztály vagy modul csak egy felelősséggel rendelkezzen (
azaz: egy oka legyen a változásra)
O-Open/ClosedPrinciple(Nyílt/zártelv): Egy osztály, vagy modul, legyen nyílt a kiterjesztésre, de zárt a
módosításra. L-Liskovsubstitutionprinciple(Liskovhelyettesítésielv): Minden osztály legyen helyettesíthető a
leszármazott osztályával anélkül, hogy a program helyes működése megváltozna I-Interfacesegregationprinciple(
Interfaceelválasztásielv): Több specifikus interface jobb, mint egy általános D-Dependencyinversionprinciple(
Függőségmegfordításielv): A kód függjön absztrakcióktól, ne konkrét implementációktól

31. Mi az az XSS? Mit jelent ez pontosan? Hogy véd minket az angular?

XSS (Cross-Site Scripting) egy olyan webbiztonsági sebezhetőség, amely lehetővé teszi a támadóknak, hogy
beilleszthessenek és futtathassanak kártékony szkripteket a weboldalon keresztül más felhasználók böngészőiben.
Alapértelmezésben az Angular sablonokban automatikusan elvégzi a HTML kódlemosást (az adatokat megbízható módon jeleníti
meg), valamint beépített sanitization (tisztítás) mechanizmusokat használ, és elvégzi a HTTP kérésekben lévő adatok
tisztítását a lehetséges XSS-támadások ellen.

32. Milyen "lifecycle hook"-okat ismersz? Mire használjuk ezeket?

1. ngOnInit: a komponens inicializálódásakor hívódik meg.
2. ngOnChanges: adatmódosításkor hívódik meg.
3. ngAfterViewInit: Ha a komponens nézet (view) és az összes gyermek komponens nézet elkészült. A kinézet manipulálására
   használható.
4. ngAfterContentInit: tartalominicializálás után fut le. A komponens tartalmát manipulálja vagy használja.
5. ngOnDestroy: Amikor a komponens eltávolításra kerül a DOM-ból. leiratkozásokra és hasonlókra használható.

33. Milyen hozzáférési szintek (access modifier) léteznek typescriptben?

public, private, protected,readonly,

34. Mi a különbség a null és undefined értékek közöt?

A null érték szerint a változó explicit módon nem rendelkezik értékkel, vagyis nincs értelme vagy az értéke nulla. Az
undefined szerint a változó nem rendelkezik definiált értékkel. Az undefined akkor jelenik meg, ha egy változó
deklarált, de nincs neki értékül adva.

35. Hogy kötsz sorba pipeokat?

a pipe (|) jellel

36. Milyen built-in pipeokat ismersz?

uppercase,slice,json,date

37. Mi az a guard? Mire jó?

A navigáció előtti/közbeni védelmet és annak vezérlését biztosítja.
többek között jogosultság ellenőrzésre, előzetes adatbetöltésre, bejelentkezések ellenőrzésére használható.

38. Mik a servicek?

Olyan osztályok, amelyeket a kódbázisban közös funkcionalitás vagy adatok megosztására használnak. (pl http service)

39. Mik a modulok?


40. Mi a lazy loading?

A Lazy loading (lusta betöltés) esetén csak akkor töltődnek be a szükséges elemek, amikor szükség van rá, ezáltal
optimalizáltabb az erőforrás felhasználás.

41. Szülő-gyerek kapcsolatban álló komponensek, hogy tudnak egymással kommunikálni?

Többek között @input,@output,ViewChild dekorátor, megírt service-k és eseménykezelés alapján.

42. Mi az RXJS?

A reactive Extensions for JavaScript (RxJS) egy reaktív adatfolyam-könyvtár, amely lehetővé teszi az aszinkron
adatfolyamokkal való munkát. (observable)

43. Mi az NGRX?

Az NgRx Angular könyvtárak csoportja reaktív kiterjesztésekhez, és állapotkezelést, mellékhatások elkülönítését,
entitásgyűjtemény-kezelést, útválasztó-összerendeléseket, kódgenerálást és fejlesztői eszközöket biztosít.

44. Mi a git?

A Git egy verziókezelő, amely arra szolgál, hogy programok fájljainak különböző verzióit kezelje.

45. Írj le 3 git parancsot és magyarázd pár szóban a működését!

1. git status: a git repository állapotát kérdezhetjük le
2. git commit -m "első kommit": egy soros megjegyzéssel a megjelölt fájlokat tudjuk committolni
3. git checkout master: másik breanch-re való átállás

46. Milyen módokon buildelhető egy angular alkalmazás?

1. Fejlesztői: a fejlesztési folyamat során használatos, és az ng build parancs használatával
   történik. Ekkor az alkalmazás nem optimalizálódik, a forráskódok, hibakeresési információk és a teljes Angular
   keretrendszer is belekerül a build fájlokba. Célja a gyors fordítási idő és a könnyű hibakeresés.
2. Végleges: A kész alkalmazás kiadásához használt mód, amely optimalizálást végez az
   alkalmazáson a lehető legjobb futási teljesítmény érdekében és a hibakeresési információkat is eltávolítja.
3. JIT: Az alapértelmezett build módszer az Angular alkalmazásoknál. A fordítás a böngészőben
   történik, amikor az alkalmazást futtatod. Ez lehetővé teszi az alkalmazás kódtöredékeinek dinamikus betöltését és a
   fejlesztői folyamat során könnyebb hibakeresést.
4. AOT A fordítás a fejlesztői környezetben történik, mielőtt az alkalmazást futtatnánk a
   böngészőben. Ez az optimalizált build módszer, mert a fájlok kisebbek, gyorsabb a betöltési idő és javul az
   alkalmazás teljesítménye.

47. Mi az az SPA?

Az SPA egy olyan webalkalmazás, amely csak egyetlen HTML oldalt tölt be, és a további tartalmat dinamikusan tölti be
AJAX vagy JavaScript

46. Mi az az SCSS?

CSS stíluslapok előfeldolgozását és kibővítését teszi lehetővé. preprocesszor, mert képes olyan előműveletekre, mint
változók, mixinek és hierarchikus beágyazások (nestelések) kezelése

47. Hogyan hozunk létre SCCS változót, ciklust, elágazást?

Változó: $ jellel hozunk létre (pl $betuszin: #F06D06;);

ciklus:
@for $i from 1 through 10 { .margin-left-#{$i} { margin-left: 1px * $i; } }

elágazás:
$textColor: #F06D06; p { color: $textColor; @if lightness($textColor) < 50% { background-color: white; } @else {
background-color: black; } }

48. Mire jó az ng-container tag?

Az ng-container egy speciális tag, amelynek nincs vizuális megjelenése a DOM-ban. Segítségével csoportosíthatjuk vagy manipulálhatjuk a tartalmat anélkül, hogy felesleges HTML elemeket
hoznánk létre. az ngFor/ngIf-el használatos leginkább.

49. Mit nevezünk mixinnek SCSSben?

A mixineket felfoghatjuk függvényekként is. A mixin egy névvel rendelkezik és paramétert vár az SCSS kódban. A mixin
több helyén is felhasználható és eredményként a hívási helyeken bekerül a kódnak megfelelő CSS tartalom.

