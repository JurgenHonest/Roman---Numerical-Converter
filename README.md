# Roman---Numerical-Converter
https://sumit-roman-numerical-converter.netlify.app/
## HTML Code 
### 1. Head section:
Includes metadata like character encoding (UTF-8) and a viewport meta tag for responsiveness.
Links to an external CSS file (styles.css) for styling the page.
### 2. Body section:
i. Displays an image (romanman.png).<br>
ii. Contains a main heading (h1) titled "Roman Numerical Converter".<br>
iii. A form-like section (div class="box") for user input:<br>
iv. Contains a secondary heading (h>) prompting the user to "Enter a number".<br>
v. Includes an input field (input id="number" class="romanInput" ) for the user to enter a number.<br>
vi. A button (button id="convert-btn" class="convertbtn") labeled "Convert" that will trigger the conversion.<br>
vii. An output section (div id="output") to display the converted Roman numeral result.
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
## CSS 
### 1. Global Styles (*):
All elements have their margin and padding set to 0, and the box-sizing property is set to border-box, ensuring padding and borders are included in the element’s total width and height.
### 2. body:
i. Sets the text color to white (#fff).<br>
ii. Uses flexbox to center elements vertically and horizontally, and aligns items in a column.<br>
iii. The background color is a dark shade (rgba(28, 19, 19)).
### 3. img:
The image has a fixed size of 200x200 pixels.
### 4. h1:
Adds 10px of padding, a width of 20% (centering the text), and centers the heading text.
### 5. .box:
i. The main container for the input form.<br>
ii. It has a solid white border (2px solid #fff), padding, and a margin to center it with a fixed width of 400px and height of 200px.<br>
iii. The background is a darker color (rgb(18, 3, 3)), and the font size is set to 16pt, with centered text.
### 6. .romanInput:
Styles the input field, giving it a width of 300px and a height of 2rem, with a font size of 18pt and some top margin space.
### 7. .convertbtn:
i. The button for conversion.<br>
ii. Has a width of 250px, font size of 18pt (19pt for the text), black background (#0a0a17), white text, and border.<br>
ii. Adds top margin and padding for better spacing.<br>
iii. The button enlarges slightly (font-size: 20pt) when hovered over.
### 8. #output:
i. Styles the output section where the result will be displayed.<br>
ii. It is initially hidden (display: none), has a white border, and a background color with a slight transparency (#0000003c).<br>
iii. It has a width of 60vh and a height of 10vh, with large font size (1.8rem).
### 9. #result:
i. Ensures the result text is centered and fully occupies the available width and height inside the #output container.<br>
ii. Adds padding and margin to keep the text readable.
```
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(28, 19, 19);
}
img {
  width: 200px;
  height: 200px;
}
h1 {
  padding: 10px;
  width: 20%;
  text-align: center;
}

.box {
  border: 2px solid #fff;
  padding: 10px;
  margin: 20px auto;
  width: 400px;
  height: 200px;
  font-size: 16pt;
  text-align: center;
  background: rgb(18, 3, 3);
}
.romanInput {
  width: 300px;
  height: 2rem;
  font-size: 18pt;
  margin-top: 18px;
  padding: 20px auto;
}
.convertbtn {
  width: 250px;
  font-size: 18pt;
  background: #0a0a17;
  margin-top: 25px;
  padding: 10px;
  color: #fff;
  font-size: 19pt;
  cursor: pointer;
  border: 1px solid #fff;
}
.convertbtn:hover {
  font-size: 20pt;
}
#output {
  border: 1px solid #fff;
  width: 60vh;
  height: 10vh;
  background-color: #0000003c;
  font-size: 1.8rem;
  display: none;
}
#result {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: auto;
  text-align: center;
}
```
