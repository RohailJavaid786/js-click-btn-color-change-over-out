
// 1st part answer

var button = document.getElementById("myButton");
    button.addEventListener("click", function() {
      alert("Button Clicked!");
    });


    // 2nd part answer

    var div = document.getElementById("myDivId");
    var originalColor = div.style.backgroundColor;

    div.addEventListener("mouseover", function() {
      div.style.backgroundColor = "pink";
    });

    div.addEventListener("mouseout", function() {
      div.style.backgroundColor = originalColor;
    });