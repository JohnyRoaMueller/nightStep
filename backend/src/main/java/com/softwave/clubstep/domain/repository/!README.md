
##
Das Repository ist die Verbindung zur Datenbank

##
Das erweiternde Interface bietet gängige Methoden zur verwaltung 
-> save(S entity) – Speichert eine Entität
-> findAll() – Findet alle Entitäten

##
Es Werden Automatisch je nach Name der Felder in der Entität auch Methoden erzeugt
++ Feld in Entität: color
++++ erzeugte Methode: findByColor
-> 'findBy' + Name des Feldes in Uppercase


##
Auf Rechtschreibung der Interface Methoden achten -
keine Fehlermeldung bei falscher Schreibweise

