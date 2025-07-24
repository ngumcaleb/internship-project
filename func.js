 <script>
      // All javascript Function types
      //simple function
      function greet() {
        console.log("Hello, World!");
      }
hgjhgjh
      // Function with parameters
      function greetUser(name) {
        console.log(`Hello, ${name}!`);
      } 
      // Function returning a value
      function add(a, b) {
        return a + b;
      }
      // Function expression
      const multiply = function (a, b) {
        return a * b;
      };

      // Arrow function
      const divide = (a, b) => {
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        return a / b;
      };
    </script>