// history.js - Modulo per la gestione della cronologia
// Usa function declaration e export default

/**
 * Salva un calcolo nella cronologia
 * @param {number} firstNumber - Primo numero
 * @param {string} operator - Operatore utilizzato
 * @param {number} secondNumber - Secondo numero
 * @param {number} result - Risultato del calcolo
 * @param {Array} history - Array della cronologia
 * @returns {Array} - Array della cronologia aggiornato
 */
export default function saveHistory(firstNumber, operator, secondNumber, result, history) {
    const record = { 
        firstNumber, 
        operator, 
        secondNumber, 
        result,
        timestamp: new Date().toLocaleString()
    };
    
    history.push(record);
    
    // Log nella console per debug
    console.log("계산 기록:", JSON.stringify(history, null, 2));
    
    return history;
}

/**
 * Formatta e restituisce la cronologia per la visualizzazione
 * @param {Array} history - Array della cronologia
 * @returns {string} - Cronologia formattata per la visualizzazione
 */
export function displayHistory(history) {
    if (!history || history.length === 0) {
        return "기록이 없습니다.";
    }
    
    let result = "계산 기록:\n";
    
    for (const record of history) {
        result += `${record.firstNumber} ${record.operator} ${record.secondNumber} = ${record.result}\n`;
    }
    
    return result;
}

/**
 * Pulisce la cronologia
 * @param {Array} history - Array della cronologia
 * @returns {Array} - Array vuoto
 */
export function clearHistory(history) {
    history.length = 0;
    console.log("Cronologia pulita");
    return history;
}