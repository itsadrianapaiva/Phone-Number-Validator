const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("results-div");
const clearBtn = document.getElementById("clear-btn");


function validatePhoneNumber() {

    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    }

    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/

    if (phoneRegex.test(userInput.value)) {
        result.innerHTML = `Valid US number: ${userInput.value}`;
    } else {
        result.innerHTML = `Invalid US number: ${userInput.value}`;
    }
    result.style.visibility = 'visible';
    result.appendChild(clearBtn);
}

const clearResults = () => {
    result.innerText = "";
    result.style.visibility = 'hidden';
    userInput.value = "";
}

checkBtn.addEventListener("click", validatePhoneNumber);
clearBtn.addEventListener("click", clearResults);


// test unit
// Array of test phone numbers
const testNumbers = [
    "1 555-555-5555",
    "1 (555) 555-5555",
    "5555555555",
    "555-555-5555",
    "(555)555-5555",
    "1(555)555-5555",
    "555-5555",
    "5555555",
    "1 555)555-5555",
    "1 555 555 5555",
    "1 456 789 4444",
    "123**&!!asdf#",
    "55555555",
    "(6054756961)",
    "2 (757) 622-7382",
    "0 (757) 622-7382",
    "-1 (757) 622-7382",
    "2 757 622-7382",
    "10 (757) 622-7382",
    "27576227382",
    "(275)76227382",
    "2(757)6227382",
    "2(757)622-7382",
    "555)-555-5555",
    "(555)5(55?)-5555",
    "55 55-55-555-5",
    "11 555-555-5555"
];

const checkPhoneNumber = (number) => phoneRegex.test(number);

testNumbers.forEach(number => {
    console.log(`${number}: ${checkPhoneNumber(number)}`);
});


