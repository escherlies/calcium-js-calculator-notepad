// ☕ Coffee Spending

const coffeePrice = 4.50 // Daily coffee price
const croissantPrice = 2.75 // Daily croissant price

let tipPercent = 15 // Tip percentage

const subtotal = coffeePrice + croissantPrice // Calculate subtotal
const tipAmount = subtotal * tipPercent / 100 // Calculate tip

const dailySpending = subtotal + tipAmount // Total daily bill
const weeklySpending = dailySpending * 5 // Weekly spending (5 days)
const monthlySpending = weeklySpending * 4 // Monthly spending (4 weeks)

// 
// Advanced Section
// 
const format = (amount) => String(Math.round(amount * 100) / 100).padStart(10, " ")


sum = `# Spending Overview 🤑

Daily:   ${format(dailySpending)}
Weekly:  ${format(weeklySpending)}
Monthly: ${format(monthlySpending)}

`

// Your last statement will appear in the box below
sum