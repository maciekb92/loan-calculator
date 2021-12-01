class CalculatorView {
    constructor() {
        this.loanAmountInput = document.querySelector('#calculator__input--loan-amount');
        this.annualInterestInput = document.querySelector('#calculator__input--interest');
        this.repaymentYearsInput = document.querySelector('#calculator__input--years-to-repay');
    }

    getLoanAmountElement() {
        return this.loanAmountInput;
    }

    getAnnualInterestElement() {
        return this.annualInterestInput;
    }

    getRepaymentYearsElement() {
        return this.repaymentYearsInput;
    }
    
    getLoanAmountValue() {
        const loanAmountInputValue = this.loanAmountInput.value;
        this._clearInput(this.loanAmountInput);
        return loanAmountInputValue;
    }

    getAnnualInterestValue() {
        const annualInterestInputValue = this.annualInterestInput.value;
        this._clearInput(this.annualInterestInput);
        return annualInterestInputValue;
    }

    getRepaymentYearsValue() {
        const repaymentYearsInputValue = this.repaymentYearsInput.value;
        this._clearInput(this.repaymentYearsInput);
        return repaymentYearsInputValue;
    }

    setMonthlyPaymentValue(monthlyPaymentValue) {
        document.querySelector('#results__output--monthly-payment').value = monthlyPaymentValue;
    }

    setTotalPaymentValue(totalPaymentValue) {
        document.querySelector('#results__output--total-payment').value = totalPaymentValue;
    }

    setTotalInterestValue(totalInterest) {
        document.querySelector('#results__output--total-interest').value = totalInterest;
    }

    showErrorLoanAmountInput(errorMessage) {
        this._showError(errorMessage, this.loanAmountInput);
    }

    showErrorAnnualInterestInput(errorMessage) {
        this._showError(errorMessage, this.annualInterestInput);
    }

    showErrorRepaymentYearsInput(errorMessage) {
        this._showError(errorMessage, this.repaymentYearsInput);
    }

    removeErrorLoanAmountInput() {
        this._removeError(this.loanAmountInput);
    }

    removeErrorAnnualInterestInput() {
        this._removeError(this.annualInterestInput);
    }

    removeErrorRepaymentYearsInput() {
        this._removeError(this.repaymentYearsInput);
    }

    _showError(errorMessage, element) {
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('calculator__input--error-container');
        errorContainer.innerHTML = this._getErrorView(errorMessage);
        
        const inputContainer = element.closest('.calculator__input');
        inputContainer.insertAdjacentHTML('afterend', errorContainer.outerHTML);
    }

    _removeError(element) {
        let errorContainer = element.parentNode.previousSibling.parentNode.querySelector('.calculator__input--error-container');

        if (errorContainer != null) {
            errorContainer.remove();
        }
    }

    _getErrorView(errorMessage) {
        return `
            <p class="calculator__input--error-message">${errorMessage}</p>
        `;
    }

    _clearInput(element) {
        element.value = '';
    }
}

export default new CalculatorView();
