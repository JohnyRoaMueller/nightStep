#
Spring-Endpunkte basieren auf Java-Servlets.
Servlets verarbeiten HTTP-Anfragen und geben Antworten zurück (meist HTML oder JSON).
Spring abstrahiert diese Technik, sodass Entwickler mit Annotationen wie
@RestController und @GetMapping arbeiten können,
während die Anfragen im Hintergrund durch einen Servlet-Container (z.B. Tomcat) verarbeitet werden.

#
HttpServletResponse response
Dieses Objekt wird automatisch von Spring erzeugt und muss nicht im Frontend durchgegeben werden. Mit diesen Objekt, kann man direkt die http header manipulieren.

ResponseEntity<T>
Dieses Objekt ist die flexibelste Http Reponse, hier kann man noch einen body setzen
