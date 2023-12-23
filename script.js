/**
 * Project Requirements:
 *  - Change the backgroud colour by generating random rbg color by clicking a button 
 */

//Steps 

//step 1 - Create onload handler 
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");

  const btn = document.getElementById("change-btn");
  const autobtn = document.getElementById("change-btn-auto");
  const autobtnstop = document.getElementById("change-btn-auto-stop");

  let txtcolor = document.getElementById("text-color");

  autobtnstop.style.display = "none";

  btn.addEventListener("click", function () {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
    txtcolor.innerText = bgColor;
  });

  autobtn.addEventListener("click", function () {
    autobtn.style.display = "none";
    autobtnstop.style.display = "block";

    var intervalId = window.setInterval(function () {
      const bgColor = generateRGBColor();
      root.style.backgroundColor = bgColor;
      txtcolor.innerText = bgColor;
    }, 5000);

    autobtnstop.addEventListener("click", function () {
      autobtn.style.display = "block";
      autobtnstop.style.display = "none";

      clearInterval(intervalId);
    });
  });
}
//step 2 - random color generator function

function generateRGBColor() {
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);



	return `rgb(${red}, ${green}, ${blue})`;

}
//step 3 - collect all necessary references 


//step 4 - handle the click event 
