AFRAME.registerComponent("create-button", {
  init: function () {
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    button1.innerHTML = "Rate us";
    button2.innerHTML = "Order Now";
    button1.setAttribute("id", "rating-button");
    button2.setAttribute("id", "order-button");
    button1.setAttribute("class", "btn btn-warning");
    button2.setAttribute("class", "btn btn-warning");

    var buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);
  },
});
