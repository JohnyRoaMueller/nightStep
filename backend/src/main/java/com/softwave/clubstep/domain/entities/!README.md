##
Ignoring exception, response committed already: org.springframework.http.converter.HttpMessageNotWritableException: Could not write JSON: Document nesting depth (1001) exceeds the maximum allowed (1000, from `StreamWriteConstraints.getMaxNestingDepth()`)
-> Wird bei direktionalen Abhängigkeiten erzeugt.
Um dies zu verhindern folgende Annotation verwenden:

    @JsonBackReference bei der JoinColumn
    @JsonManagedReference bei der Rückreferenz

    @OneToOne
    @JoinColumn(name = "HOST_ID")
    @JsonBackReference
    private Host host;

    @OneToOne(mappedBy = "host")
    @JsonManagedReference
    private UserAuth userAuth;