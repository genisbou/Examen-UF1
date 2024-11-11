
//  Opció A

// Problema
// A partir d’aquest formulari, l'usuari ha d'indicar un text i un caràcter. Al premer el botó es
// cercaran totes aquelles paraules que tinguin el caràcter indicat per l'usuari. Se suposa que les
// paraules estan separades entre elles per espais en blanc.
// Cal mostrar les paraules en una llista ordenada <ul>, on s'indicarà cada paraula i la posició on s'ha
// trobat el caràcter dins cada paraula.
// A més a més, es vol mostrar la paraula amb la lletra trobada en negreta. Cal validar que el text
// tingui com a mínim 2 paraules i que s'indiqui un caràcter, no numèric, ni símbol. Mostrar avís
// en cas que no es compleixin els requisits o que no s'hagi trobat cap paraula que contingui el
// caràcter indicat. 

document.getElementById("iniciar").addEventListener("click", () => {

    // Validar que el text tingui com a mínim 2 paraules i que s'indiqui un caràcter, no numèric, ni símbol
    let text = document.getElementById("text").value;
    let car = document.getElementById("char").value;
    text_splitat = text.split(" ");
    
    // Validar que el text tingui com a mínim 2 paraules
    if (text_splitat.length < 2) {
        alert("El text ha de tenir com a mínim 2 paraules");
        return;
    }
    

});
