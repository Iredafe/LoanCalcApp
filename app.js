//Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)


function calculateResults(e){
    //UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value);


    //compute monthly payment
    const x = Math.pow(1+ calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayments.value = (monthly * calculatedInterest).toFixed(2);
        totalInterest.value = ((monthly * calculatedInterest) - principal).toFixed(2);
    }else {
            console.log('Please check your numbers');
    }

    e.preventDefault();
}