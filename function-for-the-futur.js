function simulerPressionTouche(key) {
    // Création d'un nouvel événement KeyboardEvent
    var event = new KeyboardEvent('keydown', {
        key: key
    });

    // Dispatch de l'événement sur le document
    document.dispatchEvent(event);
}
