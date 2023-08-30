// اسامة محمد صالح الهرش


function calculateBMI(weight, height) {
    // Calculate BMI (Body Mass Index) given weight in kilograms and height in meters.
    // Formula: BMI = weight / (height * height)
    var bmi = weight / (height * height);
    return bmi;
  }
  
  function interpretBMI(bmi) {
    // Interpret BMI value and provide a corresponding category.
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  
  // Get user input for weight and height
  var weight = parseFloat(prompt("Enter weight in kilograms:"));
  var height = parseFloat(prompt("Enter height in meters:"));
  
  // Calculate BMI
  var bmi = calculateBMI(weight, height);
  
  // Interpret BMI
  var category = interpretBMI(bmi);
  
  // Print the calculated BMI and category
  console.log("BMI: " + bmi.toFixed(2));
  console.log("Category: " + category);