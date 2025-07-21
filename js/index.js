// index.js - Modulo principale che integra tutti i moduli
// Gestisce le variabili di stato e coordina le operazioni

import calculateOperation from './operations.js';
import { 
    resetDisplay, 
    setDisplay, 
    subDisplay, 
    appendNumber, 
    setOperator, 
    VALID_NUMBERS, 
    VALID_OPERATORS 
} from './input.js';
import { showError, removeError } from './error.js';
import saveHistory, { displayHistory, clearHistory } from './history.js';

// Variabili di stato globali
let history = []; // History for exponent operations and displaying records - enhanced
let currentInput = "";
let firstNumber = null;
let operator = null;
let isError = false;

/**
 * Funzione principale di calcolo
 * Coordina tutte le operazioni e gestisce il flusso di calcolo
 */
export default function calculate() {
    try {
        // Rimuovi eventuali errori precedenti
        removeError();
        
        // Validazione input
        if (firstNumber === null || operator === null || !currentInput) {
            isError = true;
            throw new Error("계산에 필요한 값이 부족합니다.");
        }
        
        const secondNumber = Number(currentInput);
        if (isNaN(secondNumber)) {
            isError = true;
            throw new Error("유효한 숫자를 입력하세요.");
        }
        
        // Esegui il calcolo
        const result = calculateOperation(firstNumber, secondNumber, operator);
        
        // Salva nella cronologia
        saveHistory(firstNumber, operator, secondNumber, result, history);
        
        // Mostra il risultato
        const resultElement = document.getElementById("result");
        resultElement.classList.remove("d-none", "alert-danger");
        resultElement.classList.add("alert-info");
        resultElement.textContent = `결과: ${result}`;
        
        // Reset dello stato per il prossimo calcolo
        currentInput = resetDisplay();
        firstNumber = null;
        operator = null;
        isError = false;
        
    } catch (error) {
        isError = true;
        showError(error.message);
        
        // Reset parziale in caso di errore
        currentInput = resetDisplay();
        firstNumber = null;
        operator = null;
    }
}

/**
 * Gestisce l'aggiunta di numeri
 * @param {string} number - Numero da aggiungere
 */
export function handleNumberInput(number) {
    try {
        if (isError) {
            // Reset se c'è stato un errore
            isError = false;
            removeError();
            currentInput = "";
        }
        
        currentInput = appendNumber(number, currentInput);
    } catch (error) {
        showError(error.message);
    }
}

/**
 * Gestisce l'impostazione dell'operatore
 * @param {string} op - Operatore da impostare
 */
export function handleOperatorInput(op) {
    try {
        if (isError) {
            showError("Prima risolvi l'errore corrente");
            return;
        }
        
        operator = setOperator(op, currentInput);
        firstNumber = Number(currentInput);
        currentInput = resetDisplay();
        
        // Rimuovi messaggi di risultato precedenti
        removeError();
        
    } catch (error) {
        showError(error.message);
    }
}

/**
 * Gestisce il backspace
 */
export function handleBackspace() {
    if (!isError) {
        currentInput = subDisplay();
    }
}

/**
 * Pulisce tutto e resetta la calcolatrice
 */
export function handleClearAll() {
    currentInput = resetDisplay();
    firstNumber = null;
    operator = null;
    isError = false;
    removeError();
    
    // Nascondi anche la cronologia se mostrata
    const historyElement = document.getElementById("history");
    historyElement.classList.add("d-none");
}

/**
 * Mostra la cronologia dei calcoli
 */
export function handleDisplayHistory() {
    const historyElement = document.getElementById("history");
    historyElement.classList.remove("d-none");
    historyElement.textContent = displayHistory(history);
}

// Esporta tutto quello che serve
export { 
    calculateOperation, 
    resetDisplay, 
    setDisplay, 
    subDisplay, 
    appendNumber, 
    setOperator, 
    showError, 
    removeError, 
    saveHistory, 
    displayHistory, 
    clearHistory,
    VALID_NUMBERS, 
    VALID_OPERATORS, 
    history, 
    currentInput, 
    firstNumber, 
    operator, 
    isError 
};

// Demo delle funzioni disponibili (per il compito avanzato con for...in)
const functions = { 
    calculateOperation, 
    appendNumber, 
    setOperator, 
    showError, 
    saveHistory, 
    displayHistory 
};

for (const func in functions) {
    console.log(`Available function: ${func}`);
}