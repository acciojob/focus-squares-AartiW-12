//your JS code here. If required.
const squares = document.querySelectorAll(".square");
const lavender = "#E6E6FA";
const coffee = "#6F4E37";

squares.forEach((sq) => {
  sq.addEventListener("mouseover", () => {
    squares.forEach((otherSq) => {
      if (otherSq !== sq) {
        otherSq.style.backgroundColor = coffee;
      }
    });
  });

  sq.addEventListener("mouseout", () => {
    squares.forEach((s) => {
      s.style.backgroundColor = lavender;
    });
  });
});