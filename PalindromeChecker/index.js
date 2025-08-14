const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("input-value")
const displayEl = document.getElementById("display")

btnEl.addEventListener("click",function(){
    
    if(checkPalindrome(inputEl.value)){
        displayEl.textContent =`${inputEl.value} is a palindrome`
        displayEl.style.color = "green"
    }
    else{
        displayEl.textContent =`${inputEl.value} is not a palindrome`
        displayEl.style.color = "red"
    }
    inputEl.value=""
    
})
function checkPalindrome(str){
    str = str.toLowerCase()
    let spilttedStr = str.split("")
    let reversedString = spilttedStr.reverse().join("")
    if(str === reversedString){
        return true
    }
    else{
        return false
    }
   
}