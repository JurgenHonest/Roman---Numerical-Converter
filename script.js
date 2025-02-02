// Getting reference of the corresponding HTML file by id
const input = document.getElementById("number");
const convertbtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const output = document.getElementById("output");

// Arrow function to convert To roman equivalence
const convertToRoman = (input) => {
  // Assigning and initializing the variable
  const romanEquivalences = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  const conversion = [];

  // Equivalence[1] = M,CM,D,CD,etc and equivalence[0] = 1000,900,1,4etc

  romanEquivalences.forEach((equivalence) => {
    while (input >= equivalence[1]) {
      conversion.push(equivalence[0]);
      input -= equivalence[1];
    }
  });
  return conversion.join("");
};

const checkInput = () => {
  // Using parseInt to convert the user given string into a number for better arithmetic operations
  const numValue = parseInt(input.value, 10);

  if (input.value === "" || isNaN(input.value)) {
    result.innerHTML = "Please enter numerical value!";
    output.style.display = "block";
  } else {
    result.innerHTML = convertToRoman(numValue);
    output.style.display = "block";
  }
};
convertbtn.addEventListener("click", checkInput);
