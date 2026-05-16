/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  window.addEventListener("load", function() {
    console.log("Window loaded!");
  });

  /**
   * TODO: Write a function comment using JSDoc.
   */

  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encryptBtn = document.getElementById("encrypt-it");
    if (encryptBtn) {
      encryptBtn.addEventListener("click", function() {
        console.log("Encrypt button clicked!");
        const inputText = document.getElementById("input-text").value;
        const encryptedText = shiftEncrypt(inputText);
        document.getElementById("result").textContent = encryptedText;
      });
    }

    const resetBtn = document.getElementById("reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", function() {
        console.log("Reset button clicked!");
        document.getElementById("input-text").value = "";
        document.getElementById("result").textContent = "";
      });
    }
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function shiftEncrypt(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
}
)();
