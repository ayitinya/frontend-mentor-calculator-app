const root = document.querySelector(":root")

const darkCheckbox = document.querySelector("#dark")
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	darkCheckbox.checked = true
}
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (e) => {
		if (e.matches) {
			darkCheckbox.click()
		}
	})
darkCheckbox.addEventListener("click", () => {
	root.style.setProperty("--body", "hsl(224, 26%, 31%)")
	root.style.setProperty("--text-color", "hsl(0, 0%, 100%)")
	root.style.setProperty("--toggle-keypad-background", "hsl(223, 31%, 20%)")
	root.style.setProperty("--toggle", "hsl(6, 63%, 50%)")
	root.style.setProperty("--screen-background", "hsl(224, 36%, 15%)")
	root.style.setProperty("--key-background", "hsl(30, 25%, 89%)")
	root.style.setProperty("--button-text-color", "hsl(221, 14%, 31%)")
	root.style.setProperty("--key-shadow", "hsl(28, 16%, 65%)")
	root.style.setProperty("--reset-key", "hsl(225, 21%, 49%)")
	root.style.setProperty("--reset-key-shadow", "hsl(224, 28%, 35%)")
	root.style.setProperty("--reset-key-text", "hsl(0, 0%, 100%)")
	root.style.setProperty("--submit-key-shadow", "hsl(6, 70%, 34%)")
	root.style.setProperty("--submit-key-background", "hsl(6, 63%, 50%)")
	root.style.setProperty("--submit-key-text", "hsl(0, 0%, 100%)")
})

const lightCheckbox = document.querySelector("#light")
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
	lightCheckbox.checked = true
}
window
	.matchMedia("(prefers-color-scheme: light)")
	.addEventListener("change", (e) => {
		if (e.matches) {
			lightCheckbox.click()
		}
	})
lightCheckbox.addEventListener("click", () => {
	root.style.setProperty("--body", "hsl(0, 0%, 90%)")
	root.style.setProperty("--text-color", "hsl(60, 10%, 19%)")
	root.style.setProperty("--toggle-keypad-background", "hsl(0, 5%, 81%)")
	root.style.setProperty("--toggle", "hsl(25, 98%, 40%)")
	root.style.setProperty("--screen-background", "hsl(0, 0%, 93%)")
	root.style.setProperty("--key-background", "hsl(45, 7%, 89%)")
	root.style.setProperty("--button-text-color", "hsl(60, 10%, 19%)")
	root.style.setProperty("--key-shadow", "hsl(35, 11%, 61%)")
	root.style.setProperty("--reset-key", "hsl(185, 42%, 37%)")
	root.style.setProperty("--reset-key-shadow", "hsl(185, 58%, 25%)")
	root.style.setProperty("--reset-key-text", "hsl(0, 0%, 100%)")
	root.style.setProperty("--submit-key-shadow", "hsl(6, 70%, 34%)")
	root.style.setProperty("--submit-key-background", "hsl(25, 99%, 27%)")
	root.style.setProperty("--submit-key-text", "hsl(0, 0%, 100%)")
})

const solarizeCheckbox = document.querySelector("#solarize")
solarizeCheckbox.addEventListener("click", () => {
	root.style.setProperty("--body", "hsl(268, 75%, 9%)")
	root.style.setProperty("--text-color", "hsl(52, 100%, 62%)")
	root.style.setProperty("--toggle-keypad-background", "hsl(268, 71%, 12%)")
	root.style.setProperty("--toggle", "hsl(176, 100%, 44%)")
	root.style.setProperty("--screen-background", "hsl(268, 71%, 12%)")
	root.style.setProperty("--key-background", "hsl(268, 47%, 21%)")
	root.style.setProperty("--button-text-color", "hsl(52, 100%, 62%)")
	root.style.setProperty("--key-shadow", "hsl(290, 70%, 36%)")
	root.style.setProperty("--reset-key", "hsl(281, 89%, 26%)")
	root.style.setProperty("--reset-key-shadow", "hsl(285, 91%, 52%)")
	root.style.setProperty("--reset-key-text", "hsl(0, 0%, 100%)")
	root.style.setProperty("--submit-key-shadow", "hsl(177, 92%, 70%)")
	root.style.setProperty("--submit-key-background", "hsl(176, 100%, 44%)")
	root.style.setProperty("--submit-key-text", "hsl(198, 20%, 13%)")
})
function addCommasToNumber(number) {
	let str = number.toString().split(".")
	str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	return str.join(".")
}

let operandClicked = false
let operation = ""

const displayText = document.querySelector(".display-text")

let number1 = ""
let number2 = ""
let result = ""

const numberBtns = document.querySelectorAll(".number-btn")
for (const numberBtn of numberBtns) {
	numberBtn.addEventListener("click", () => {
		if (!operandClicked) {
			number1 += numberBtn.value
			displayText.value = addCommasToNumber(number1)
		} else {
			number2 += numberBtn.value
			displayText.value = addCommasToNumber(number2)
		}
	})
}

const resetBtn = document.querySelector("button[type='reset']")
resetBtn.addEventListener("click", () => {
	displayText.value = ""
	number1 = ""
	number2 = ""
	operandClicked = false
})

const deleteKey = document.querySelector(".delete-key")
deleteKey.addEventListener("click", () => {
	if (!Boolean(result)) {
		if (!operandClicked) {
			number1 = number1.slice(0, number1.length - 1)
			displayText.value = addCommasToNumber(number1)
		} else {
			number2 = number1.slice(0, number1.length - 1)
			displayText.value = addCommasToNumber(number2)
		}
	} else {
		number1 = number1.slice(0, number1.length - 1)
		displayText.value = addCommasToNumber(number1)
		operandClicked = false
	}
})

const dotBtn = document.querySelector(".dot-btn")
dotBtn.addEventListener("click", () => {
	if (!operandClicked) {
		number1 += "."
		displayText.value = addCommasToNumber(number1)
	} else {
		number2 += "."
		displayText.value = addCommasToNumber(number2)
	}
})

const operandBtns = document.querySelectorAll(".operand-btn")
for (const operandBtn of operandBtns) {
	operandBtn.addEventListener("click", () => {
		operandClicked = true
		operation = operandBtn.value
	})
}

const add = () => {
	result = Number(number1) + Number(number2)
	number1 = String(result)
	number2 = ""
	displayText.value = addCommasToNumber(result)
}

const subtract = () => {
	result = Number(number1) - Number(number2)
	number1 = String(result)
	number2 = ""
	displayText.value = addCommasToNumber(result)
}

const divide = () => {
	result = Number(number1) / Number(number2)
	number1 = String(result)
	number2 = ""
	displayText.value = addCommasToNumber(result)
}

const multiply = () => {
	result = Number(number1) * Number(number2)
	number1 = String(result)
	number2 = ""
	displayText.value = addCommasToNumber(result)
}

const submitBtn = document.querySelector("button[type='submit']")
submitBtn.addEventListener("click", () => {
	switch (operation) {
		case "+":
			add()
			break
		case "-":
			subtract()
			break
		case "*":
			multiply()
			break
		case "/":
			divide()
			break

		default:
			break
	}
})
