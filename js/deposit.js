document.getElementById('deposit_btn').addEventListener('click', function () {
    // deposit filed
    const depositField = document.getElementById('deposit_field');
    const currentDepositNumber = parseInt(depositField.value);


    // deposit total
    const depositAmount = document.getElementById('deposit_amount');
    const previcesDepositTotal = parseInt(depositAmount.innerText);

    const totalDeposit = currentDepositNumber + previcesDepositTotal;
    depositAmount.innerText = totalDeposit;

    // totalAmount
    const totalAmount = document.getElementById('total_amount');
    const finiallAmount = parseInt(totalAmount.innerText);

    const withdrowTotalAmount = totalDeposit + finiallAmount;
    totalAmount.innerText = withdrowTotalAmount;

    // deposit field clear
    depositField.value = '';
})
