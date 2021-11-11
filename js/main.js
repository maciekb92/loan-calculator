import CalculationManager from "./CalculationController.js";
import CalculationInput from "./CalculationInput.js";

const calculateBtn = document.querySelector('.calculator__btn');

calculateBtn.addEventListener('click', event => {
    event.preventDefault();

    let loanAmountInput = document.querySelector('.calculator__input--loan-amount');
    let annualInterest = document.querySelector('.calculator__input--interest');
    let repaymentYears = document.querySelector('.calculator__input--years-to-repay');

    const calculationInput = new CalculationInput(loanAmountInput.value, annualInterest.value, repaymentYears.value);
    const calculationManager = new CalculationManager(calculationInput);

    document.querySelector('.results__output--monthly-payment').value = calculationManager.calculateMonthlyPayment();
    document.querySelector('.results__output--total-payment').value = calculationManager.calculateTotalPayment();
    document.querySelector('.results__output--total-interest').value = calculationManager.calculateTotalInterest();

    loanAmountInput.value = '';
    annualInterest.value = '';
    repaymentYears.value = '';
});