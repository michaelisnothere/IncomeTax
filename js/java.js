document.addEventListener('DOMContentLoaded', function(){
  const incomeInput = document.getElementById('userIncome');
  const calculateBtn = document.getElementById('calculate');
  const taxOwedInput = document.getElementById('taxOwed'); 

  calculateBtn.addEventListener('click', function() {
    processEntries();
    incomeInput.focus();
  });

  function processEntries(){
    const income = parseFloat(incomeInput.value);
    calculateTax(income);
  }

  function calculateTax(income){
    if(income == 0){
      alert("Enter income greater than 0");
      incomeInput.focus();
      return;
    }else if(income <= 9875){
      taxOwed = income + income * 0.1;
    }else if(income <= 40125){
      taxOwed = income + income * 0.12 + 987.5;
    }else if(income <= 85525){
      taxOwed = income + income * 0.22 + 4617.5;
    }else if(income <= 163300){
      taxOwed = income + income * 0.24 + 14605.5;
    }else if(income <= 207350){
      taxOwed = income + income * 0.32 + 33271.5;
    }else if(income <= 518400){
      taxOwed = income + income * 0.35 + 47367.5;
    }else{(income <= 518401)
      taxOwed = income + income * 0.37 + 156235.5;
    }
    taxOwedInput.value = taxOwed.toFixed(2);
  }
});
