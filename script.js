//your JS code here. If required.
const squares = document.querySelectorAll(".square");
const originalColor = "#E6E6FA"
const hoverColor ="#6F4E37"

squares.forEach((square , index) => {
            square.addEventListener("mouseover", () =>{
                squares.forEach((sq, i)=>{
                    if(i !== index) {
                        sq.style.backgroundColor = hoverColor;
                    }
                })
            })
        });

        squares.addEventListener(("mouseout" , () => {
            squares.forEach((sq) => {
                sq.style.backgroundColor =originalColor
            })
        }))