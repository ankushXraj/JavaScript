const bulb = document.querySelector("#bulb");
const btn = document.querySelector("button");

if (!bulb) console.error("`#bulb` element not found in DOM");
if (!btn) console.error("`button` element not found in DOM");

if (btn && bulb) {
  btn.addEventListener("click", function () {
    bulb.style.backgroundColor = "yellow";
  });
}