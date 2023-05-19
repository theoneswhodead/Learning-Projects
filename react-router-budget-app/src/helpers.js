export const waait = () => new Promise(res => setTimeout(res, Math.random() * 2000))


// colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`
}

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//Get all Ittems ffrom lacal storage

export const getAllMatchingItems = ({category, key, value}) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
}

// create budget
export const createBudget = ({
  name, amount
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor()
  }
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem("budgets",
    JSON.stringify([...existingBudgets, newItem]))
}

// create expense
export const createExpense = ({
  name, amount, budgetId
}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId
  }
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem("expenses",
    JSON.stringify([...existingExpenses, newItem]))
}

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key)
}

//total spent by budget

export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc,expense) => {
        //check if expense. id== budgetid

        if(expense.budgetId !== budgetId) return acc

        //add current amount to total

        return acc += expense.amount
    }, 0) 
    return budgetSpent;
}
/// formatting

export const formatDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();

//percentages

export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined,{
        style: "percent",
        minimumFractionDigits: 0
    })
}

//format currency

export const formatCurrency =(amt) => {
    return amt.toLocaleString(undefined, {
        style: 'currency',
        currency: 'USD'
    })
}