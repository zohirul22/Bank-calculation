document.getElementById('Withdrow_btn').addEventListener('click', function () {
    console.log('withdrow')
    const WithdrowField = document.getElementById('Withdrow_field');
    const currentWithdrowNumber = parseInt(WithdrowField.value);

    const withdrowAmount = document.getElementById('Withdrow_amount');
    const previcesWithdrowTotal = parseInt(withdrowAmount.innerText);

    const totalWithdrow = currentWithdrowNumber + previcesWithdrowTotal;
    withdrowAmount.innerText = totalWithdrow;


    // totalAmount
    const totalAmount = document.getElementById('total_amount');
    const finiallAmount = parseInt(totalAmount.innerText);

    const withdrawTotalAmount = finiallAmount - totalWithdrow;

    totalAmount.innerText = withdrawTotalAmount;

    WithdrowField.value = '';

})