# Dwie aplikacje webowe (React, Angular) wykonane na zajęcia "Aplikacje internetowe oparte o komponenty" - Prace trwają

## Temat projektu:
Aplikacja do zarządzania seansami w kinie

## Funkcjonalności (12 pkt):
<ol>
  <li>
    elementy aplikacji: sale (nr, pojemność/liczba osób), filmy (tytuł, czas trwania), seanse (data, godzina, film, sala, liczba sprzedanych i dostępnych biletów, numery zajętych miejsc)
  </li>
  <li>
    możliwe operacje: 
    <ul>
      <li>
        dodawanie/edycja filmu, dodawanie/edycja seansu - w każdym przypadku edycja na danych bieżących - 4 pkt
      </li>
      <li>
        usuwanie filmu - 1 pkt
      </li>
      <li>
        kupowanie biletu (seans, nr miejsca) - 2 pkt
      </li>
    </ul>
  </li>
  <li>
    wyświetlanie seansów w danym dniu, wyświetlanie aktualnie trwających seansów (zaczynamy od bieżącego dnia i bieżącej godziny) - 2 pkt
  </li>
  <li>
    wyświetlanie popularności danego filmu w poszczególnych dniach (tekstowo - max 2 pkt) - 3 pkt
  </li>
</ol> 
  
## Punktacja elementów technicznych (20pkt):
  
### React: 
<ul>
  <li>
    własna walidacja danych wprowadzanych przez użytkownika ( w każdym przypadku wprowadzania danych) - 2 pkt
  </li>
  <li>
    obowiązkowa weryfikacja typu danych (PropTypes) przekazywanych do wszystkich komponentów (nie stosujemy typu 'any') - 2 pkt
  </li>
  <li>
    weryfikacja typu danych (PropTypes) własną funkcją - 1 pkt
  </li>
  <li>
    właściwe użycie typów komponentów (czy każdy z komponentów jest właściwie odwzorowany na komponent funkcyjny lub stanowe) - 1 pkt
  </li>
  <li>
    dwukierunkowa komunikacja pomiędzy komponentami (czy jest w każdym spodziewanym przypadku) - 1 pkt
  </li>
  <li>
    modyfikacja danych odbywa się tylko w jednym komponencie - 1 pkt
  </li>
  <li>
    operacje modyfikacji danych za pomocą 4 rodzajów żądań http - 1 pkt
  </li>
  <li>
    dane pochodzące z jednej klasy usługi - 1 pkt
  </li>
  <li>
    routing (ścieżki 'routes', w tym jedna z parametrem) - 1 pkt
  </li>
  <li>
    wykorzystanie dwóch zmiennych właściwości routingu - 1 pkt
  </li>
  <li>
    architektura Flux - 3 pkt
  </li>
  <li>
    testy jednostkowe/integracyjne komponentów (minimalnie 2 z 5 rodzajów:  renderowania, zdarzeń, przesyłania właściwości, komunikacji z serwerem, routing, za każdy napisany test 0,5 pkt) - 3 pkt
  </li>
  <li>
    testy architektury Flux (całej) - 2 pkt
  </li>
</ul>
  
### Angular: 
<ul>
  <li>
    klasa TypeScript (czy zdefiniowano i zastosowano klasę do organizacji danych, czy pola w klasie są prywatne ) - 1 pkt
  </li>
  <li>
    typy TypeScript (czy każda zmienna ma przyporządkowany typ) - 1 pkt
  </li>
  <li>
    zaawansowane elementy TypeScript (jeden z wymienionych): - 2 pkt
    <ul>
      <li>
        klasy pochodne TypeScript (czy wykorzystano również klasy pochodne)
      </li>
      <li>
        getter + setter (czy wykorzystano i  czy właściwie zostały dobrane)+parametry opcjonalne metod (czy są i czy właściwie dobrane) + modyfikatory dostępu w konstruktorze
      </li>
    </ul>
  </li>
  <li>
    wykorzystanie formularzy, min. 5 elementów (czy właściwie wybrano dane do wprowadzania i dobrano rodzaj elementu formularza, czy nie ma dwustronnego wiązania danych w szablonie) - 1 pkt
  </li>
  <li>
    walidacja danych wprowadzanych przez użytkownika ( w każdym przypadku wprowadzania danych, czy odpowiednio dobrano walidatory) - 2 pkt
  </li>
  <li>
    dwukierunkowa komunikacja pomiędzy komponentami (czy jest w każdym spodziewanym przypadku) - 1 pkt
  </li>
  <li>
    modyfikacja danych odbywa się tylko w jednym komponencie - 1 pkt
  </li>
  <li>
    operacje modyfikacji danych za pomocą 4 rodzajów żądań http - 1 pkt
  </li>
  <li>
    dane pochodzące z jednej klasy usługi - 1 pkt
  </li>
  <li>
    dodatkowy serwis synchroniczny - 1 pkt
  </li>
  <li>
    własna dyrektywa - 1 pkt
  </li>
  <li>
    wykorzystanie dowolnego filtru standardowego w szablonie oraz implementacja własnego filtru - 1 pkt
  </li>
  <li>
    routing (ścieżki 'routes', w tym jedna z parametrem, operacje na obiekcie ActivateRoute i Route) - 1 pkt
  </li>
  <li>
    testy jednostkowe/integracyjne komponentów (minimalnie 2 z 4 rodzajów:  renderowania, zdarzeń, przesyłania właściwości, komunikacji z serwerem, za każdy napisany test 0,5 pkt) - 3 pkt
  </li>
  <li>
    testy routingu (obiektu Router oraz ActivatedRoute i dyrektywy 'routerLink') - 2 pkt
  </li>
</ul>
