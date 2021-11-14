import CalculatorController from "./CalculatorController.js";

const calculateBtn = document.querySelector('.calculator__btn');

calculateBtn.addEventListener('click', event => {
    event.preventDefault();

    // let loanAmountInput = document.querySelector('.calculator__input--loan-amount');
    // let annualInterest = document.querySelector('.calculator__input--interest');
    // let repaymentYears = document.querySelector('.calculator__input--years-to-repay');

    const calculatorController = new CalculatorController();

    document.querySelector('#results__output--monthly-payment').value = calculatorController.calculateMonthlyPayment();
    document.querySelector('#results__output--total-payment').value = calculatorController.calculateTotalPayment();
    document.querySelector('#results__output--total-interest').value = calculatorController.calculateTotalInterest();
});