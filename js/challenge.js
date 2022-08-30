const counter = document.getElementById("counter");

const minus = document.getElementById("minus");

const plus = document.getElementById("plus");

const heart = document.getElementById("heart");

const pause = document.getElementById("pause");

const form = document.getElementById("comment-form");

const comments = document.createElement("ul");

document.getElementById("list").append(comments);

let i = 0;
let isRunning = false;
let timerId = createTimer();

function createTimer() {
  isRunning = true;
  return setInterval(() => {
    i += 1;
    counter.innerText = i;
  }, 1000);
}

pause.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timerId);
    isRunning = false;
  } else if (!isRunning) {
    timerId = createTimer();
  }
});

minus.addEventListener("click", () => {
  i -= 1;
  counter.innerText = i;
});
plus.addEventListener("click", () => {
  i += 1;
  counter.innerText = i;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.children[0];
  const li = document.createElement("li");
  li.textContent = input.value;
  comments.append(li);
  input.value = "";
});

heart.addEventListener("click", () => {
  const lis = document.createElement("li");
  lis.textContent = `${i} has one like`;
  document.querySelector(".likes").append(lis);
});
