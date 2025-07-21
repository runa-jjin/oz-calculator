// main.js - Gestione eventi e inizializzazione
// Importa da index.js e gestisce eventi keyboard e inizializzazione

import calculate, {
    handleNumberInput,
    handleOperatorInput,
    handleBackspace,
    handleClearAll,
    handleDisplayHistory,
    VALID_NUMBERS,
    VALID_OPERATORS
} from './index.js';

// Event listener per la tastiera
document.addEventListener("keydown", (event) => {
    const key = event.key;
    
    // Gestione numeri
    if (VALID_NUMBERS.includes(key)) {
        handleNumberInput(key);
    }
    
    // Gestione operatori
    if (VALID_OPERATORS.includes(key)) {
        handleOperatorInput(key);
    }
    
    // Gestione Enter per calcolare
    if (key === "Enter") {
        event.preventDefault(); // Previeni comportamento default
        calculate();
    }
    
    // Gestione Backspace
    if (key === "Backspace") {
        event.preventDefault(); // Previeni comportamento default
        handleBackspace();
    }
    
    // Gestione Escape per pulire tutto
    if (key === "Escape") {
        handleClearAll();
    }
    
    // Gestione 'h' per mostrare cronologia
    if (key === "h" || key === "H") {
        handleDisplayHistory();
    }
});

// Rendi disponibili le funzioni globalmente per i pulsanti HTML
window.appendNumber = handleNumberInput;
window.setOperator = handleOperatorInput;
window.calculate = calculate;
window.clearAll = handleClearAll;
window.backspace = handleBackspace;
window.displayHistory = handleDisplayHistory;

// Inizializzazione della calcolatrice
document.addEventListener("DOMContentLoaded", () => {
    console.log("🧮 Calcolatrice ES6 Modulare inizializzata!");
    console.log("📋 Comandi tastiera:");
    console.log("  • 0-9: Inserisci numeri");
    console.log("  • +, -, *, /, ^: Operatori");
    console.log("  • Enter: Calcola risultato");
    console.log("  • Backspace: Cancella ultimo carattere");
    console.log("  • Escape: Pulisci tutto");
    console.log("  • H: Mostra cronologia");
    
    // Imposta focus iniziale sul display
    const display = document.getElementById("display");
    if (display) {
        display.focus();
    }
});