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

#
Wichtige web.bind.annotations
Diese Annotations binden daten an ein Java Objekt

@RequestParam (Query-Parameter binden)
                                    @GetMapping("/users")
                                    https://example.com/users?name=ferret
                                    -> name=ferret ist der query Parameter

@PathVariable (Pfad-Variable binden)
                                    @GetMapping("/users/{id}")
                                    https://example.com/users/55
                                    -> 55 ist die Pfadvariable

@RequestBody (HTTP-Body binden)
                                    '{
                                        "name":"John",
                                        "age":30,
                                        "car":null
                                    }'

@ModelAttribute (Formular- oder Query-Parameter binden)
                                    @GetMapping("/users")
                                    https://example.com/users?name=Max&age=25

@RequestHeader (HTTP-Header binden)
                                    @GetMapping("/header")
                                    public String getHeader(@RequestHeader("User-Agent") String userAgent) {
                                        return "User-Agent: " + userAgent;
                                    }

@CookieValue (Cookie binden)
                                    @GetMapping("/cookie")
                                    public String getCookie(@CookieValue("sessionId") String sessionId) {
                                        return "Session ID: " + sessionId;
                                    }