function addToDisplay(value) {
    document.getElementById('display').value += value;
  }

  function calculate() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }
  function clearDisplay() {
    document.getElementById('display').value = '';
  }

 

  //claculate cube.
  function calculateCube() {
    let input = document.getElementById('display').value;
    let number = parseFloat(input);
    let result = Math.pow(number, 3);
    document.getElementById('display').value = result;
  }
  // Claculate Square Root
  function squareroot(){
    let input=document.getElementById('display').value;
    let number=parseFloat(input);
    let result=Math.pow(number,2);
    document.getElementById('display').value=result;
  }
   // Calculate modulus
   function calculatemode()
   {
    let input=document.getElementById('display').value;
    let number=parseFloat(input);
    let result= number%10;

    document.getElementById('display').value=result;
   }
//end modular    