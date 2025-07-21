// input.js - Modulo per la gestione dell'input
// Usa function expression e export

// Costanti per validazione
const VALID_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const VALID_OPERATORS = ["+", "-", "*", "/", "^"]; // Include ^ per il compito avanzato

/**
 * Resetta il display a vuoto
 * @returns {string} - Stringa vuota
 */
const resetDisplay = function() {
    const display = document.getElementById("display");
    display.value = "0";
    return "";
};

/**
 * Imposta il testo nel display
 * @param {string} text - Testo da visualizzare
 * @returns {string} - Il testo impostato
 */
const setDisplay = function(text) {
    const display = document.getElementById("display");
    display.value = text || "0";
    return text;
};

/**
 * Rimuove l'ultimo carattere dal display
 * @returns {string} - Il testo aggiornato del display
 */
const subDisplay = function() {
    const display = document.getElementById("display");
    let currentValue = display.value;
    
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0, -1);
    } else {
        currentValue = "0";
    }
    
    display.value = currentValue;
    return currentValue;
};

/**
 * Aggiunge un numero al display corrente
 * @param {string} number - Numero da aggiungere
 * @param {string} currentInput - Input corrente
 * @returns {string} - Nuovo input
 * @throws {Error} - Se il numero non è valido
 */
const appendNumber = function(number, currentInput) {
    if (!VALID_NUMBERS.includes(number)) {
        throw new Error("유효한 숫자를 입력하세요.");
    }
    
    // Se il display mostra "0", sostituisci con il nuovo numero
    if (currentInput === "0" || currentInput === "") {
        return setDisplay(number);
    }
    
    return setDisplay(currentInput + number);
};

/**
 * Imposta l'operatore per il calcolo
 * @param {string} op - Operatore da impostare
 * @param {string} currentInput - Input corrente
 * @returns {string} - L'operatore impostato
 * @throws {Error} - Se l'operatore non è valido o non c'è input
 */
const setOperator = function(op, currentInput) {
    if (!VALID_OPERATORS.includes(op)) {
        throw new Error("유효한 연산자를 선택하세요.");
    }
    
    if (!currentInput || currentInput === "0") {
        throw new Error("숫자를 먼저 입력하세요.");
    }
    
    return op;
};

export { 
    resetDisplay, 
    setDisplay, 
    subDisplay, 
    appendNumber, 
    setOperator, 
    VALID_NUMBERS, 
    VALID_OPERATORS 
};