import CalculatorController from './CalculatorController.js';

const calculateBtn = document.querySelector('.calculator__btn');

calculateBtn.addEventListener('click', event => {
    event.preventDefault();

    const calculatorController = new CalculatorController();

    calculatorController.calculateMonthlyPayment();
    calculatorController.calculateTotalPayment();
    calculatorController.calculateTotalInterest();
});
