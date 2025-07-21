// error.js - Modulo per la gestione degli errori
// Usa arrow functions e export

/**
 * Mostra un messaggio di errore nell'elemento risultato
 * @param {string} message - Messaggio di errore da visualizzare
 */
const showError = (message) => {
    const resultElement = document.getElementById("result");
    
    // Rimuovi classi precedenti
    resultElement.classList.remove("d-none", "alert-info");
    
    // Aggiungi classe di errore
    resultElement.classList.add("alert-danger");
    
    // Imposta il messaggio di errore
    resultElement.textContent = `Errore: ${message}`;
    
    // Nascondi automaticamente l'errore dopo 5 secondi
    setTimeout(() => {
        removeError();
    }, 5000);
};

/**
 * Rimuove il messaggio di errore dall'elemento risultato
 */
const removeError = () => {
    const resultElement = document.getElementById("result");
    
    // Nascondi l'elemento errore
    resultElement.classList.add("d-none");
    
    // Rimuovi tutte le classi di alert
    resultElement.classList.remove("alert-danger", "alert-info");
    
    // Pulisci il contenuto
    resultElement.textContent = "";
};

export { showError, removeError };