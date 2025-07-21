// operations.js - Modulo per le operazioni aritmetiche
// Usa function declaration e export default

/**
 * Esegue operazioni aritmetiche tra due numeri
 * @param {number} firstNumber - Primo numero
 * @param {number} secondNumber - Secondo numero  
 * @param {string} operator - Operatore (+, -, *, /, ^)
 * @returns {number} - Risultato dell'operazione
 * @throws {Error} - Se l'operatore non è valido o si tenta di dividere per zero
 */
export default function calculateOperation(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            if (secondNumber === 0) {
                throw new Error("0으로 나눌 수 없습니다.");
            }
            return firstNumber / secondNumber;
        case '^':
            return firstNumber ** secondNumber; // Operazione potenza per il compito avanzato // Exponent operation - feature-exponent branch
        default:
            throw new Error("유효한 연산자를 선택하세요.");
    }
}