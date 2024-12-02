const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]

// 1. Všechna čísla
console.log("Všechna čísla:", numbers)

// 2. Druhé mocniny všech čísel
const squares = numbers.map(num => num ** 2)
console.log("Druhé mocniny čísel:", squares)

// 3. Pouze záporná čísla
const negatives = numbers.filter(num => num < 0)
console.log("Záporná čísla:", negatives)

// 4. Absolutní hodnoty všech čísel
const absolutes = numbers.map(num => Math.abs(num))
console.log("Absolutní hodnoty:", absolutes)

// 5. Pouze sudá čísla
const evens = numbers.filter(num => num % 2 === 0)
console.log("Sudá čísla:", evens)

// 6. Čísla dělitelná třemi (absolutní hodnota)
const divisibleByThree = numbers.filter(num => Math.abs(num) % 3 === 0)
console.log("Čísla dělitelná třemi:", divisibleByThree)

// 7. Vzdálenosti od čísla 5
const distancesFromFive = numbers.map(num => Math.abs(num - 5))
console.log("Vzdálenosti od čísla 5:", distancesFromFive)

// 8. Druhé mocniny vzdáleností od čísla 5
const squaredDistances = distancesFromFive.map(distance => distance ** 2)
console.log("Druhé mocniny vzdáleností od čísla 5:", squaredDistances)

// 9. Počet záporných čísel
const negativeCount = negatives.length;
console.log("Počet záporných čísel:", negativeCount)

// 10. Součet všech čísel
const totalSum = numbers.reduce((sum, num) => sum + num, 0)
console.log("Součet všech čísel:", totalSum)

// 11. Průměr všech čísel
const average = totalSum / numbers.length;
console.log("Průměr všech čísel:", average.toFixed(2))

// 12. Součet kladných čísel
const positiveSum = numbers.filter(num => num > 0).reduce((sum, num) => sum + num, 0)
console.log("Součet kladných čísel:", positiveSum)
