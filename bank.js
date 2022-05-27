/* function doubleIt(num) {
    const result = num * 2;
    return result;
}

const first = doubleIt(5);
console.log(first); */

function getInputValue() {
    const newDepositAmount = document.getElementById('deposit-input').value;
}



// bank deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = document.getElementById('deposit-input');
    const newDepositAmountText = newDepositAmount.value;
    const newDepositAmountTotal = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-money');

    const previousDepositAmount = depositTotal.innerText;

    const newTotal = parseFloat(previousDepositAmount) + newDepositAmountTotal;

    depositTotal.innerText = newTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);

    balanceTotal.innerText = newBalanceTotal;




    document.getElementById('deposit-input').value = '';


})

// update withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = document.getElementById('withdraw-input').value;

    const withdrawTotal = document.getElementById('withdraw-money');

    const previousWithdrawAmount = withdrawTotal.innerText;

    const newTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);

    withdrawTotal.innerText = newTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - parseFloat(newWithdrawAmount);

    balanceTotal.innerText = newBalanceTotal;




    document.getElementById('withdraw-input').value = '';


})