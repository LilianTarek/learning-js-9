// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let current = document.querySelector("[title = 'Current']");
// let cls = document.querySelector(".classes-list div");

// function addOrRemove() {
//   // remove all elements at the start
//   document.querySelectorAll("span").forEach((el) => el.remove());

//   // add and remove classes
//   for (let i = 0; i < this.value.trim().split(" ").length; i++) {
//     if (add.value)
//       current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);

//     if (remove.value)
//       current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
//   }
//   this.value = "";

//   // add and remove spans
//   if (current.classList.length) {
//     [...current.classList].sort().forEach((el) => {
//       let clSpan = document.createElement("span");
//       clSpan.textContent = el;
//       cls.append(clSpan);
//     });
//   } else cls.textContent = "No Classes To Show";
// }

// add.onblur = addOrRemove;
// remove.onblur = addOrRemove;

// ----------------------------------------------------------------
// task3
// p = document.querySelector("p");
// p.remove();
// our = document.getElementsByClassName("our-element")[0];
// be = document.createElement("div");
// be.classList.add("start");
// our.before(be);
// be.title = "Start Element";
// be.setAttribute("data-value", "Start");
// be.textContent = "Start";
// af = document.createElement("div");
// af.classList.add("End");
// our.after(af);
// af.title = "End Element";
// af.setAttribute("data-value", "End");
// af.textContent = "End";

// task4
// div = document.querySelector("div");

// console.log(div.lastChild.nodeValue.trim());
// task 5

[...document.body.children].forEach(element => {
    element.addEventListener("click", function () {
        console.log(`This is ${this.tagName}`);
    })
});



