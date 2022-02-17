// Food Rent clothes all id in one function
function addCostAmount(){
    const foodPrice =document.getElementById('Food-price');
    const rentTotal =document.getElementById('Rent-Total');
    const clothesTotal =document.getElementById('clothes-total');
    const totalCalculate = parseFloat(foodPrice.value) + parseFloat(rentTotal.value) + parseFloat(clothesTotal.value)
    return totalCalculate;
}

// calulate-total for myIncome and OddTotalBalance
document.getElementById('calulate-total').addEventListener('click', function(){
    // function call add kore
    document.getElementById('total-expenses').innerText=addCostAmount();
    const myIncomeInput = document.getElementById('incomeTotal');
    const oddTotalBalance = parseFloat(myIncomeInput.value) - addCostAmount();
    document.getElementById('total-balance').innerText= oddTotalBalance;
    
    

})
// saved-button without tax

document.getElementById('saved-button').addEventListener('click', function(){
    // save value 
    const saveInput =document.getElementById('save-input')
    const saveNumber = parseFloat(saveInput.value);
     // income
     const incomeId = document.getElementById('incomeTotal');
     const incomeIdValue = parseFloat(incomeId.value);
     const savingAmount = (incomeIdValue * saveNumber) / 100;
     document.getElementById('save-amount').innerText= savingAmount;
    //   balance
    const balances = document.getElementById('total-balance').innerText
    const balanceNumber =parseFloat(balances)
    document.getElementById('remaining-balance').innerText = balanceNumber - savingAmount;

});