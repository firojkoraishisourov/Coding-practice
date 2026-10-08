
//fucntion to get user input
function getUserInput(promptMessage,isNumber = false){
    const userInput = prompt(promptMessage);
    return isNumber ? parseFloat(userInput) : userInput
}

function getExpenses (numberOfExpenses){
    const expenses = [];
    //collect expenses dynamically
        for(let i = 1; i <= numberOfExpenses; i++){
            let expense = getUserInput(`Enter expense ${i}: ` ,true);

            if(isNaN(expense) || expense < 0){
                console.log(`Invalid input for expense ${i}. setting it to $0.`);
            } 
            expenses.push(expense); 
        }      
        return expenses;
}

function calculateTotalExpenses(expenses){    
    //calculate total expenses using the array
    let totalExpenses = 0;
    for(let i = 0; i<expenses.length;i++){
        totalExpenses += expenses[i];
    }  

    return totalExpenses;
}

function calculateTax (income,taxRate){
    return income * taxRate;
}

function calculateNetIncome(income,tax){
    return income - tax;
}

function calculateBalance(netIncome,totalExpenses){
    return netIncome - totalExpenses;
}
function calculateSavings(balance,savingPerentage){
    return balance * savingPerentage ;
}

function getFinancialStatus(savings){
    let financialStatus = '';
    if(savings >= 1000){
        financialStatus ="Excellent you are saving well";
    }
    else if(savings >= 500 ){
        financialStatus ="Good!!"
    }
    else if(savings >= 100 ){
        financialStatus ="Needs improvement!!"
    }
    else{
        financialStatus ="Critical!!"
    }

    return financialStatus;
}

function displayResult(userBudget){
    
    console.log("Personal budget tracker: "); 
    console.log(`User: ${userBudget.userName}`);
    console.log(`Total Income:$ ${userBudget.income}`);
    console.log(`Total Expenses: $ ${userBudget.totalExpenses}`);
    console.log(`Tax deduction(10%): $ ${userBudget.tax}`);
    console.log(`Net Income after Tax: $ ${userBudget.netIncome}`);
    console.log(`Remaining balance: $ ${userBudget.balance}`);
    console.log(`Savings (20 % of balance): $ ${userBudget.savings}`);
    console.log(userBudget.financialStatus);
    
    const overspendingMessage = checkOverspending(userBudget);
    if(overspendingMessage){
        console.log(overspendingMessage)
    }

    console.log('Expense Breakdown: ');
    for(let i = 0; i < userBudget.expenses.length; i++){
        console.log(`Expense ${i+1} : $${userBudget.expenses[i]}`)
    }
}

function checkOverspending(userBudget){
    //check if expenses exceed income
    return userBudget.totalExpenses > userBudget.income? 'Warning!! You are spending more than your income' : '';
}

//function to calculate financial details
function calculateBudget(userBudget){
    userBudget.expenses = getExpenses(userBudget.numberOfExpenses);
    userBudget.totalExpenses = calculateTotalExpenses(userBudget.expenses);

    //tax deduction 10 % of income
    userBudget.tax = calculateTax(userBudget.income, 0.1);

    //Net income after the tax
    userBudget.netIncome = calculateNetIncome(userBudget.income,userBudget.tax);

    //calculate remaining balance
    userBudget.balance = calculateBalance(userBudget.netIncome,userBudget.totalExpenses);

    //savings 20 % of remaining of balance
    userBudget.savings = calculateSavings(userBudget.balance,0.20);

    //Determine the financial health status
    userBudget.financialStatus = getFinancialStatus(userBudget.savings);

}

//Main function to run the budget tracker 
function runBudgetTracker(){

    let userBudget = {
        userName : '',
        income : 0,
        expenses : [],
        numberOfExpenses : 0,
        totalExpenses : 0,
        tax : 0,
        netIncome : 0,
        balance : 0,
        savings : 0,
        financialStatus : 0
    };

    userBudget.userName = getUserInput("Enter your name: ");
    userBudget.income = getUserInput("Enter your total income: " , true);
    userBudget.numberOfExpenses = getUserInput("How many expenses do you have? " , true);


    //validate inputs to ensure they are number
    if(isNaN(userBudget.income) || isNaN(userBudget.numberOfExpenses) || userBudget.income <= 0 || userBudget.numberOfExpenses < 0){
        console.log('Invalid input. Please enter your valid numbers.');
        return;
    }
    else{
        calculateBudget(userBudget);
        displayResult(userBudget);
    }
}

runBudgetTracker();