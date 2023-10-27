
<!DOCTYPE html>
<html>
  <head>
    <title>What Can JavaScript Do?</title>
  </head>
  <body>
    <h5>What is your name?</h5>
    <p id="demo">What is your name</p>
    <button type="button" onclick="changeText()">Click me</button>
  </body>
  <script>
      function changeText() {
        document.getElementById("demo").innerHTML = "Simran!!!!";
      }
    </script>
</html>
