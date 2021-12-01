class CalculatorValidation {

    isActualValueNegative(actualValue) {
        if (actualValue < 0) {
            return true;
        }
        return false;
    }

    isActualValueEqualZero(actualValue) {
        if (actualValue === 0) {
            return true;
        }
        return false;
    }
}

export default new CalculatorValidation();
