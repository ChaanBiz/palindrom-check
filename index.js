const input = document.getElementById('input')
const btn = document.getElementById('btn')

function reverseString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)

    if (value == "") {
        alert("Type something.")
    } else if (value === reverse){
        alert(value.toUpperCase() + " is Palindrome")
    }  else {
        alert(value.toUpperCase() + " is not palindrome.")
    }

    input.value = ""
}
