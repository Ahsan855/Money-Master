// income For me


// calulate-total 
document.getElementById('calulate-total').addEventListener('click', function(){
    // total food value

    const foodPrice =document.getElementById('Food-price');
    const foodValue = parseFloat(foodPrice.value);
    foodPrice.value = foodValue;
    // total rent

    const rentTotal =document.getElementById('Rent-Total');
    const rentValue = parseFloat(rentTotal.value);
    rentTotal.value = rentValue;
    // clothes
    const clothesTotal =document.getElementById('clothes-total');
    const clothesValue = parseFloat(clothesTotal.value);
    clothesTotal.value = clothesValue;
    // total calculate
    const totalCalculate = foodValue + rentValue + clothesValue
    const expenses = document.getElementById('total-expenses');
    expenses.innerText= totalCalculate;

    // income odd balance
    const incomeId = document.getElementById('incomeTotal');
    const incomeIdValue = parseFloat(incomeId.value);
    const total= incomeIdValue - totalCalculate;
    const totalBalance =document.getElementById('total-balance')
    totalBalance.innerText = total;
    

})