//ask for user input dynamically
const userName = prompt("Enter your name: ");
const income = parseFloat(prompt("Enter you total income: "));

//ask for user expenses
const numberOfExpenses = parseInt(prompt("How many expenses do you have? "));

//validate inputs to ensure they are number
if(isNaN(income) || isNaN(numberOfExpenses) || income <= 0 || numberOfExpenses < 0){
    console.log('Invalid input. Please enter your valid numbers.');
}else{
    let totalExpenses = 0;
    
    //collect expenses dynamically
    for(let i = 1; i <= numberOfExpenses; i++){
        const expenses = [];
        let expense = parseFloat(prompt(`Enter expense ${i}: `));

        if(isNaN(expense) || expense < 0){
            console.log(`Invalid input for expense ${i}. setting it to $0.`);
        } 
        expenses.push(expense); 

        //calculate total expenses using the array
        for(let i = 0; i<expenses.length;i++){
            totalExpenses += expenses[i];
        }  
    }

    //tax deduction 10 % of income
    const tax = income * 0.10;

    //Net income after the tax
    const netIncome = income - tax;

    //calculate remaining balance
    const balance = netIncome - totalExpenses;

    //savings 20 % of remaining of balance
    const savings = balance * 0.20;

    //Determine the financial health status
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

    //check if expenses exceed income
    let overspendingMessage = '';
    if(totalExpenses > income){
        overspendingMessage = "Warning!! You are spending more than your income"
    }


    console.log("Personal budget tracker: "); 
    console.log(`User: ${userName}`);
    console.log(`Total Income:$ ${income}`);
    console.log(`Total Expenses: $ ${totalExpenses}`);
    console.log(`Tax deduction(10%): $ ${tax}`);
    console.log(`Net Income after Tax: $ ${netIncome}`);
    console.log(`Remaining balance: $ ${balance}`);
    console.log(`Savings (20 % of balance): $ ${savings}`);
    console.log(financialStatus);
    if(overspendingMessage){
        console.log(overspendingMessage)
    }
}
