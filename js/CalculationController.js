'use strict';

class CalculationController {
    constructor(calculationInput) {
        this.calculationInput = calculationInput;
    }

    calculateTotalInterest() {
        return (+this.calculationInput.loanAmount * (this.calculationInput.annualInterest / 100));
    }

    calculateTotalPayment() {
        return  this.calculateTotalInterest() + +this.calculationInput.loanAmount;
    }

    calculateMonthlyPayment() {
        return (this.calculateTotalPayment() / (+this.calculationInput.repaymentYears * 12)).toPrecision(4);
    }
}

export default CalculationController;