const custom_input = document.querySelector('#custom')
const tip_by_person = document.querySelector('#tip-by-person')
const total_price = document.querySelector('#total-price')

custom_input.addEventListener('click', (e) => {
    const tip_custom = document.querySelector(`#${e.target.parentNode.htmlFor}`)
    tip_custom.checked = true
})

function CalculateBill() {
    const bill_input = document.querySelector('#bill')
    const tip = document.querySelector("input[name=tip]:checked")
    if (tip.id === 'tip-custom') {
        tip.value = document.querySelector('#custom').value || 0
    }
    const number_people_input = document.querySelector('#people')



    if (number_people_input.value != 0 && tip.value != 0 && bill_input.value != 0) {
        let tip_amount = ((bill_input.value * tip.value) / 100) / number_people_input.value
        tip_by_person.innerHTML = `$${tip_amount.toFixed(2)}`

        let total_by_persone = (bill_input.value / number_people_input.value) + tip_amount
        total_price.innerHTML = `$${total_by_persone.toFixed(2)}`
    } else {
        tip_by_person.innerHTML = `$0.00`
        total_price.innerHTML = `$0.00`
    }
    if (number_people_input.value == 0 || number_people_input.value == '') {
        number_people_input.parentNode.classList.add('cant_be_zero_span')
        document.querySelector('.cant_be_zero').style.display = 'block'

    } else {
        number_people_input.parentNode.classList.remove('cant_be_zero_span')
        document.querySelector('.cant_be_zero').style.display = 'none'
    }
}

const inputs = document.querySelectorAll('input')
inputs.forEach(input => input.addEventListener('input', CalculateBill))

const reset_btn = document.querySelector('#reset-btn')
reset_btn.addEventListener('click', (e) => {
    const bill_input = document.querySelector('#bill')
    bill_input.value = ''
    const number_people_input = document.querySelector('#people')
    number_people_input.value = ''
    const tip_custom = document.querySelector(`#tip-custom`)
    const tip_custom_input = document.querySelector('#custom')
    tip_custom.checked = true
    tip_custom_input.value = ''
    tip_by_person.innerHTML = `$0.00`
    total_price.innerHTML = `$0.00`
})

function FocusInput() {
    this.parentNode.classList.add('focused_span')
}

function unFocusInput() {
    this.parentNode.classList.remove('focused_span')
}
const input_containers = [...document.querySelectorAll('input')]
input_containers.forEach(input => input.addEventListener('focus', FocusInput))
input_containers.forEach(input => input.addEventListener('blur', unFocusInput))