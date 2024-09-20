# Roman---Numerical-Converter
https://sumit-roman-numerical-converter.netlify.app/
## HTML Code 
### 1. Head section:
Includes metadata like character encoding (UTF-8) and a viewport meta tag for responsiveness.
Links to an external CSS file (styles.css) for styling the page.
### 2. Body section:
a. Displays an image (romanman.png).<br>
b. Contains a main heading (h1) titled "Roman Numerical Converter".<br>
c. A form-like section (div class="box") for user input:<br>
d. Contains a secondary heading (h>) prompting the user to "Enter a number".<br>
e. Includes an input field (input id="number" class="romanInput" ) for the user to enter a number.<br>
f. A button (button id="convert-btn" class="convertbtn") labeled "Convert" that will trigger the conversion.<br>
g. An output section (div id="output") to display the converted Roman numeral result.
### 3. JavaScript:
The <script src="./script.js"></script> tag at the end includes an external JavaScript file (script.js) to handle the logic of the conversion process.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Roman - Numerical Converter</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="shortcut icon" href="./romanman.png" />
  </head>
  <body>
    <img src="romanman.png" />
    <h1>Roman Numerical Converter</h1>
    <div class="box">
      <h2>Enter a number:</h2>
      <div class="inputBox">
        <input id="number" class="romanInput" /><br />
        <button id="convert-btn" class="convertbtn">Convert</button>
      </div>
    </div>
    <div id="output">
      <div id="result"><p></p></div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
```
