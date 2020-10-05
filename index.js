
// 1- ) inputa ulaşıp değer tanımlayacağız
// 2- ) butona ulaşıp değer tanımlayacağız
// 3- ) butona tıklayınca inputu ters çevirmesi için fonksiyonu yazacağız
// 4- ) sonucu resulta göndereceğiz

const input = document.querySelector("#input");
console.log("input", input.innerHTML)

const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", reverseStr);  

function reverseStr() {
    const myArray = []
    let reverseStr = ''
    for (let i = (input.value.length)-1; i >= 0;i--){
        myArray.push(input.value[i])     
    }
    myArray.forEach(letter =>{
        reverseStr += letter
    })
    // return reverseStr

    result.innerText = reverseStr;
}
