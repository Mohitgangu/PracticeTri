let img = ["img1", "img2", "img3", "img4", "img5"];

let btns = document.querySelector(".btn"); // select btn div

let display = document.querySelector(".display")


let imgContainer = document.querySelector(".img-container");

let lastImg = parseInt(Math.random() * img.length); // select one image randomly

img.push(img[lastImg]); // image push in array

img.sort((a, b) => Math.random() - 0.5); // shuffle all 6 images

for (let t of img) {
  let img = document.createElement("img");
  img.className = t;
  imgContainer.append(img);
}
// append images in imgContainer

let count = 0; // only 2 images select karne ke liye
let forSame = new Array(6).fill(false); // ek image ko double click na kar paaye isliye
let set = new Set(); // selected image same hai ya different
let arr = []; // ye to faltu m liya hai lekin isme me baad me mai set ko arr me daal de raha hu

let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", verification);
  function verification(e) {
    // loop ke andar hi laga diya kyuni mujhe index ki value chahiye thi
    if (count < 2 && forSame[i] == false) {
      // count ki value jab 1 and 2 hogi aur jis index par image hai us index par value false hogi tabhi ye condition true hogi jisse set ke andar sirf do baar click hone par hi image ki class jaayegi
      set.add(e.target.className);
      arr = [...set];
      // e.target.style.outline = "5px solid green";
      count++;
      forSame[i] = true; // us index par value true kar di jisse ye dobara click na ho
      // console.log(arr)
      if (count == 2) {
        // ye andar is wajah se likha hai ki count ki value 2 hogi t ye btn create ho jaayega agar bahar likhu to count ki value 2 hi rahegi jisse btn create hota rahega
        let verifyBtn = document.createElement("button");
        verifyBtn.innerText = "verify";
        verifyBtn.id = "verify";
        btns.append(verifyBtn);

        verifyBtn.addEventListener("click", check);
      }
    }

    if (count == 1) {
      // yaha par count ki value ek hi baar one hogi hogi to ise bahar bana diya
      let resetBtn = document.createElement("button");
      resetBtn.innerText = "reset";
      resetBtn.id = "reset";
      btns.append(resetBtn);

      resetBtn.addEventListener("click", reset);
    }
  }

  function check() {
    if (arr.length == 1) {
      let heading = document.createElement("h3")
      heading.innerText = "you are not a robot"
      display.append(heading)
    } else {
      let heading = document.createElement("h3")
      heading.innerText = " We can't verify you as a human. You selected the non-identical tiles."
      display.append(heading)
    }
  }

  function reset() {
   count = 0; // only 2 images select karne ke liye
   forSame = new Array(6).fill(false); // ek image ko double click na kar paaye isliye
    set = new Set(); // selected image same hai ya different
    arr = [];
     
   let btnReset= document.querySelector("#reset").remove();
    let btnVerify=document.querySelector("#verify").remove();
    let result = document.querySelector("h3").remove()
    
   
    
  }
}
