class Calculator{
    constructor(parent) {

        //Layout
        const container = document.createElement("div");
        container.classList.add("flex-container");
        const output = document.createElement("input");
        output.disabled = true;

        const firstRow = document.createElement("div");
        firstRow.classList.add("inside-flex-container");
        const clearButton = document.createElement("div");
        clearButton.classList.add("button");
        clearButton.style.width = "50%";
        clearButton.innerHTML = "C";
        const backspaceButton = document.createElement("div");
        backspaceButton.classList.add("button");
        backspaceButton.style.width = "25%";
        backspaceButton.innerHTML = "del";
        const divideButton = document.createElement("div");
        divideButton.classList.add("button", "operator-button");
        divideButton.style.width = "25%";
        divideButton.innerHTML = "÷";

        const secondRow = document.createElement("div");
        secondRow.classList.add("inside-flex-container");
        const _button7 = document.createElement("div");
        _button7.classList.add("button");
        _button7.style.width = "25%";
        _button7.innerHTML = "7";
        const _button8 = document.createElement("div");
        _button8.classList.add("button");
        _button8.style.width = "25%";
        _button8.innerHTML = "8";
        const _button9 = document.createElement("div");
        _button9.classList.add("button");
        _button9.style.width = "25%";
        _button9.innerHTML = "9";
        const multiplyButton = document.createElement("div");
        multiplyButton.classList.add("button", "operator-button");
        multiplyButton.style.width = "25%";
        multiplyButton.innerHTML = "×";

        const thirdRow = document.createElement("div");
        thirdRow.classList.add("inside-flex-container");
        const _button4 = document.createElement("div");
        _button4.classList.add("button");
        _button4.style.width = "25%";
        _button4.innerHTML = "4";
        const _button5 = document.createElement("div");
        _button5.classList.add("button");
        _button5.style.width = "25%";
        _button5.innerHTML = "5";
        const _button6 = document.createElement("div");
        _button6.classList.add("button");
        _button6.style.width = "25%";
        _button6.innerHTML = "6";
        const minusButton = document.createElement("div");
        minusButton.classList.add("button", "operator-button");
        minusButton.style.width = "25%";
        minusButton.innerHTML = "-";

        const fourthRow = document.createElement("div");
        fourthRow.classList.add("inside-flex-container");
        const _button1 = document.createElement("div");
        _button1.classList.add("button");
        _button1.style.width = "25%";
        _button1.innerHTML = "1";
        const _button2 = document.createElement("div");
        _button2.classList.add("button");
        _button2.style.width = "25%";
        _button2.innerHTML = "2";
        const _button3 = document.createElement("div");
        _button3.classList.add("button");
        _button3.style.width = "25%";
        _button3.innerHTML = "3";
        const plusButton = document.createElement("div");
        plusButton.classList.add("button", "operator-button");
        plusButton.style.width = "25%";
        plusButton.innerHTML = "+";

        const fifthRow = document.createElement("div");
        fifthRow.classList.add("inside-flex-container");
        const _button0 = document.createElement("div");
        _button0.classList.add("button");
        _button0.style.width = "75%";
        _button0.innerHTML = "0";
        const equalsButton = document.createElement("div");
        equalsButton.classList.add("button", "operator-button");
        equalsButton.style.width = "25%";
        equalsButton.innerHTML = "=";

        parent.appendChild(container);
        container.appendChild(output);

        container.appendChild(firstRow);
        firstRow.appendChild(clearButton);
        firstRow.appendChild(backspaceButton);
        firstRow.appendChild(divideButton);

        container.appendChild(secondRow);
        secondRow.appendChild(_button7);
        secondRow.appendChild(_button8);
        secondRow.appendChild(_button9);
        secondRow.appendChild(multiplyButton);

        container.appendChild(thirdRow);
        thirdRow.appendChild(_button4);
        thirdRow.appendChild(_button5);
        thirdRow.appendChild(_button6);
        thirdRow.appendChild(minusButton);

        container.appendChild(fourthRow);
        fourthRow.appendChild(_button1);
        fourthRow.appendChild(_button2);
        fourthRow.appendChild(_button3);
        fourthRow.appendChild(plusButton);

        container.appendChild(fifthRow);
        fifthRow.appendChild(_button0);
        fifthRow.appendChild(equalsButton);

        //Logic
        output.value = "0";
        let operatingNumber,
            operator;
        container.addEventListener("click", (e) => {
            if (e.target.classList[0] === "button") {
                switch (e.target.innerHTML) {
                    case "C":
                        output.value = "0";
                        operatingNumber = undefined;
                        operator = undefined;
                        break;
                    case "del":
                        if (output.value !== "0") {
                            if (output.value.length === 1) {
                                output.value = "0";
                            } else {
                                output.value = output.value.slice(0, -1);
                            }
                        }
                        break;
                    case "0":
                        if (output.value !== "0") output.value = output.value + "0";
                        break;
                    case "1":
                        if (output.value === "0") output.value = "1";
                        else output.value = output.value + "1";
                        break;
                    case "2":
                        if (output.value === "0") output.value = "2";
                        else output.value = output.value + "2";
                        break;
                    case "3":
                        if (output.value === "0") output.value = "3";
                        else output.value = output.value + "3";
                        break;
                    case "4":
                        if (output.value === "0") output.value = "4";
                        else output.value = output.value + "4";
                        break;
                    case "5":
                        if (output.value === "0") output.value = "5";
                        else output.value = output.value + "5";
                        break;
                    case "6":
                        if (output.value === "0") output.value = "6";
                        else output.value = output.value + "6";
                        break;
                    case "7":
                        if (output.value === "0") output.value = "7";
                        else output.value = output.value + "7";
                        break;
                    case "8":
                        if (output.value === "0") output.value = "8";
                        else output.value = output.value + "8";
                        break;
                    case "9":
                        if (output.value === "0") output.value = "9";
                        else output.value = output.value + "9";
                        break;
                    case "÷":
                        operatingNumber = +output.value;
                        operator = "divide";
                        output.value = "0";
                        break;
                    case "×":
                        operatingNumber = +output.value;
                        operator = "multiply";
                        output.value = "0";
                        break;
                    case "-":
                        operatingNumber = +output.value;
                        operator = "minus";
                        output.value = "0";
                        break;
                    case "+":
                        operatingNumber = +output.value;
                        operator = "plus";
                        output.value = "0";
                        break;
                    case "=":
                        switch (operator) {
                            case "divide":
                                output.value = operatingNumber / +output.value + "";
                                break;
                            case "multiply":
                                output.value = operatingNumber * +output.value + "";
                                break;
                            case "minus":
                                output.value = operatingNumber - +output.value + "";
                                break;
                            case "plus":
                                output.value = operatingNumber - +output.value + "";
                                break;
                            default:
                                output.value = +output.value * 2 + "";
                                break;
                        }
                }
            }
        });
    }
}