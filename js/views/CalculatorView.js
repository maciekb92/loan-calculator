class CalculatorView {

    getLoanAmount() {
        const loanAmount = document.querySelector('#calculator__input--loan-amount').value;
        this._clearInput(loanAmount);
        return loanAmount;
    }

    getAnnualInterest() {
        const annualInterest = document.querySelector('#calculator__input--interest').value;
        this._clearInput(annualInterest);
        return annualInterest;
    }

    getRepaymentYears() {
        const repaymentYears = document.querySelector('#calculator__input--years-to-repay').value;
        this._clearInput(repaymentYears);
        return repaymentYears;
    }

    _clearInput(inputValue) {
        document.querySelectorAll('.calculator__input')
            .forEach(inputElement => {
                if (inputElement.value === inputValue) {
                    inputElement.value = '';
                }
            });
    }
}

export default new CalculatorView();
