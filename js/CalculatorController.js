import calculatorValidation from './CalculatorValidation.js';
import calculatorView from './views/CalculatorView.js';

class CalculatorController {
    constructor() {
        this.loanAmountValue = Number(calculatorView.getLoanAmountValue());
        this.annualInterestValue = Number(calculatorView.getAnnualInterestValue());
        this.repaymentYearsValue = Number(calculatorView.getRepaymentYearsValue());
        this.negativeValueErrorMessage = 'should not be negative.';
        this.zeroEmptyValueErrorMessage = 'should be greater than 0 or not be empty.';
        this.isLoanAmountValueInvalid = this.validateLoanAmountValue();
        this.isAnnualInterestValueInvalid = this.validateAnnualInterestValue();
        this.isRepaymentYearsValueInvalid = this.validateRepaymentYearsValue();
    }

    calculateTotalInterest() {
        if (!this.isLoanAmountValueInvalid && !this.isAnnualInterestValueInvalid) {
            const totalInterest = (this.loanAmountValue * (this.annualInterestValue / 100)).toFixed(2);
            calculatorView.setTotalInterestValue(totalInterest);
            return totalInterest;
        }
    }

    calculateTotalPayment() {
        if (!this.isLoanAmountValueInvalid && !this.isAnnualInterestValueInvalid) {
            const totalPayment = (this.loanAmountValue + this.loanAmountValue * (this.annualInterestValue / 100)).toFixed(2);
            calculatorView.setTotalPaymentValue(totalPayment);
            return totalPayment;
        }
    }

    calculateMonthlyPayment() {
        if (!this.isLoanAmountValueInvalid && !this.isAnnualInterestValueInvalid && !this.isRepaymentYearsValueInvalid) { 
            const monthlyPayment = ((this.loanAmountValue + this.loanAmountValue * (this.annualInterestValue / 100)) / (this.repaymentYearsValue * 12)).toFixed(2);
            calculatorView.setMonthlyPaymentValue(monthlyPayment);
            return monthlyPayment;
        }
    }

    validateLoanAmountValue() {
        const loanAmountName = 'Loan amount';
        const isValueNegative = calculatorValidation.isActualValueNegative(this.loanAmountValue);
        const isValueZeroOrEmpty = calculatorValidation.isActualValueEqualZero(this.loanAmountValue);
        const isLoanAmountValueInvalid = isValueNegative || isValueZeroOrEmpty;
        
        calculatorView.removeErrorLoanAmountInput();
        
        if (isValueNegative) {
            calculatorView.showErrorLoanAmountInput(`${loanAmountName} ${this.negativeValueErrorMessage}`);
        } else if (isValueZeroOrEmpty) {
            calculatorView.showErrorLoanAmountInput(`${loanAmountName} ${this.zeroEmptyValueErrorMessage}`);
        }

        return isLoanAmountValueInvalid;
    }

    validateAnnualInterestValue() {
        const annualInterestName = 'Annual interest';
        const isValueNegative = calculatorValidation.isActualValueNegative(this.annualInterestValue);
        const isValueZeroOrEmpty = calculatorValidation.isActualValueEqualZero(this.annualInterestValue);
        const isAnnualInterestValueInvalid = isValueNegative || isValueZeroOrEmpty;

        calculatorView.removeErrorAnnualInterestInput();
        
        if (isValueNegative) {
            calculatorView.showErrorAnnualInterestInput(`${annualInterestName} ${this.negativeValueErrorMessage}`);
        } else if (isValueZeroOrEmpty) {
            calculatorView.showErrorAnnualInterestInput(`${annualInterestName} ${this.zeroEmptyValueErrorMessage}`);
        }
        
        return isAnnualInterestValueInvalid;
    }

    validateRepaymentYearsValue() {
        const repaymentYearsName = 'Repayment years';
        const isValueNegative = calculatorValidation.isActualValueNegative(this.repaymentYearsValue);
        const isValueZeroOrEmpty = calculatorValidation.isActualValueEqualZero(this.repaymentYearsValue);
        const isRepaymentYearsValueInvalid = isValueNegative || isValueZeroOrEmpty;
        
        calculatorView.removeErrorRepaymentYearsInput();
        
        if (isValueNegative) {
            calculatorView.showErrorRepaymentYearsInput(`${repaymentYearsName} ${this.negativeValueErrorMessage}`);
        } else if (isValueZeroOrEmpty) {
            calculatorView.showErrorRepaymentYearsInput(`${repaymentYearsName} ${this.zeroEmptyValueErrorMessage}`);
        } 

        return isRepaymentYearsValueInvalid;
    }
}

export default CalculatorController;
