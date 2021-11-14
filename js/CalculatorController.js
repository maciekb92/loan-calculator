import calculatorView from "./views/CalculatorView.js";

class CalculatorController {
    constructor() {
        this.loanAmount = Number(calculatorView.getLoanAmount());
        this.annualInterest = Number(calculatorView.getAnnualInterest());
        this.repaymentYears = Number(calculatorView.getRepaymentYears());

    }

    calculateTotalInterest() {
        return (this.loanAmount * (this.annualInterest / 100));
    }

    calculateTotalPayment() {
        return (this.calculateTotalInterest() + this.loanAmount);
    }

    calculateMonthlyPayment() {
        return (this.calculateTotalPayment() / (this.repaymentYears * 12));
    }
}

export default CalculatorController;
