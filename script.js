const text = document.getElementById("text-input");
const showResult = document.getElementById("result");
const checkButton = document.getElementById('check-btn')

showResult.style.display = "none"
/* Taking input from input element*/
function checkInput(){
  const originalText = text.value
  let temp= originalText.toLowerCase()
  const regex = /[\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/g;
  
  temp=temp.replace(regex,'')
  console.log(temp)
  if(temp==""){
    alert("Please input a value")
  }
  else{
    const reverse = temp.split("").reverse().join("")
    if (temp == reverse){
      showResult.innerHTML = `<strong>${originalText}</strong> is a Palindrome`;
    }
    else{
      showResult.innerHTML = `<strong>${originalText}</strong> is not a Palindrome`;
    }
    showResult.style.display = "block";
  }
}


checkButton.addEventListener('click', checkInput)