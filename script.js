class Calculator{
    constructor(previousOperandTekstElement, currentOperandTekstElement){
        this.previousOperandTekstElement = previousOperandTekstElement
        this.currentOperandTekstElement = currentOperandTekstElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNummber(nummber){
        if (nummber === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + nummber.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.previousOperand !==''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            case 'x^':
                computation = prev ** current
                break
            case '%':
                computation = prev * current / 100 + '%'
                break
            case 'RW':
                computation = prev % current;
                break
            default:
                return
        }
        
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNummber(nummber){
        const stringNummber = nummber.toString()
        const integerDigits = parseFloat(stringNummber.split('.')[0])
        const decimalDigits = stringNummber.split('.')[1]
        let intergerDisplay
        if (isNaN(integerDigits)){
            intergerDisplay = ''
        }else{
            intergerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null){
            return `${intergerDisplay}.${decimalDigits}`
        }else{
            return intergerDisplay
        }
    }

    updateDisplay(){
        this.currentOperandTekstElement.innerText = 
        this.getDisplayNummber(this.currentOperand) 
        if(this.operation != null){
            this.previousOperandTekstElement.innerText =
             `${this.getDisplayNummber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousOperandTekstElement.innerText = ''
        }
        
    }
}


const nummberButtons = document.querySelectorAll('[data-nummber]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTekstElement = document.querySelector('[data-previous-operand]')
const currentOperandTekstElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTekstElement, currentOperandTekstElement)

nummberButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        calculator.appendNummber(button.innerText)
        calculator.updateDisplay()
    }) 
})
operationButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    }) 
})
equalsButtons.addEventListener('click', button =>{
  calculator.compute()
  calculator.updateDisplay()
})
allClearButtons.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
  })
  deleteButtons.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
  })