

var charLength = document.getElementsByClassName("form-slider-Number")[0].innerText;
var passwordScreen = document.getElementById("newPassword").innerText
var sliderLength = document.getElementById("range1");
var buttonSubmit = document.getElementById("button-85");
var buttonCopy = document.getElementById("copyIcon")

var boxChecked = document.querySelectorAll(".check");

var allSymb = ""
var charValue = ""

// Event listeners for Slider and Get Password button
sliderLength.addEventListener("input", changeLength)
buttonSubmit.addEventListener("click", getPassword)
buttonCopy.addEventListener("click", copyPassword)

// Change desired length of password
function changeLength() {
    document.getElementsByClassName("form-slider-Number")[0].innerText = sliderLength.value
}

// Copy password
function copyPassword() {
    navigator.clipboard.writeText(document.getElementById("newPassword").innerText);
}

// Generate new password
function getPassword() {
    // Prevent reload of page after click
    event.preventDefault()

    // Check what kind of characters to include
    boxChecked.forEach(x => {
        if (x.checked === true) {
            allSymb += x.value
        } 
    })

    // Check if at least one item is selected
    if (allSymb === "") {
        alert("You need to select at least one type of character")
        return}

    // Generate characters one by one
    for (let i=0; i<sliderLength.value; i++) {
        charValue += (allSymb.charAt(Math.floor(Math.random()*(allSymb.length))))
    }

    // Show new password in screen
    document.getElementById("newPassword").innerText = charValue

    // Reset value of Symbols wanted and charValue
    allSymb = ""
    charValue = ""
    }

