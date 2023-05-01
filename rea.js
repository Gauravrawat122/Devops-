// for cardio
document.getElementById("btn1").onclick=function() {
    fun()
};

const arr = [
    { title: "Upper body cardio", from: "ghhgg", iframe: "hjghjhgjg" },
    { title: "Lower body cardio", from: "=gbhgbhg", iframe: "s=hgjgjg" },
    { title: "Full body cardio", from: "kjbfkbk", iframe: "fsdjijv" }
   
];

function fun() {
    const ul = document.getElementsByTagName('ul')[0];
    const item = arr[Math.floor(Math.random() * arr.length)];
    ul.innerHTML = `
        <li>
            Song: ${item.title}, singer: ${item.from}
            <iframe src="${item.iframe}"></iframe>
            <a href="${item.iframe}" class="link">Link</a>
        </li>`;
}

// for weights

document.getElementById("btn2").onclick=function() {
    fun()
};

const arr1 = [
    { title: "Upper body cardio", from: "ghhgg", iframe: "hjghjhgjg" },
    { title: "Lower body cardio", from: "=gbhgbhg", iframe: "s=hgjgjg" },
    { title: "Full body cardio", from: "kjbfkbk", iframe: "fsdjijv" }
   
];

function fun() {
    const ul = document.getElementsByTagName('ul')[0];
    const item = arr[Math.floor(Math.random() * arr.length)];
    ul.innerHTML = `
        <li>
            Song: ${item.title}, singer: ${item.from}
            <iframe src="${item.iframe}"></iframe>
            <a href="${item.iframe}" class="link">Link</a>
        </li>`;
}

// for diet

document.getElementById("btn3").onclick=function() {
    fun()
};

const arr2 = [
    { title: "Upper body cardio", from: "ghhgg", iframe: "hjghjhgjg" },
    { title: "Lower body cardio", from: "=gbhgbhg", iframe: "s=hgjgjg" },
    { title: "Full body cardio", from: "kjbfkbk", iframe: "fsdjijv" }
   
];

function fun() {
    const ul = document.getElementsByTagName('ul')[0];
    const item = arr[Math.floor(Math.random() * arr.length)];
    ul.innerHTML = `
        <li>
            Song: ${item.title}, singer: ${item.from}
            <iframe src="${item.iframe}"></iframe>
            <a href="${item.iframe}" class="link">Link</a>
        </li>`;
}

// for personal coach

document.getElementById("btn4").onclick=function() {
    fun()
};

const arr3 = [
    { title: "Upper body cardio", from: "ghhgg", iframe: "hjghjhgjg" },
    { title: "Lower body cardio", from: "=gbhgbhg", iframe: "s=hgjgjg" },
    { title: "Full body cardio", from: "kjbfkbk", iframe: "fsdjijv" }
   
];

function fun() {
    const ul = document.getElementsByTagName('ul')[0];
    const item = arr[Math.floor(Math.random() * arr.length)];
    ul.innerHTML = `
        <li>
            Song: ${item.title}, singer: ${item.from}
            <iframe src="${item.iframe}"></iframe>
            <a href="${item.iframe}" class="link">Link</a>
        </li>`;
}

//for certifications

document.getElementById("btn5").onclick=function() {
    fun()
};

const arr4 = [
    { title: "Upper body cardio", from: "ghhgg", iframe: "hjghjhgjg" },
    { title: "Lower body cardio", from: "=gbhgbhg", iframe: "s=hgjgjg" },
    { title: "Full body cardio", from: "kjbfkbk", iframe: "fsdjijv" }
   
];

function fun() {
    const ul = document.getElementsByTagName('ul')[0];
    const item = arr[Math.floor(Math.random() * arr.length)];
    ul.innerHTML = `
        <li>
            Song: ${item.title}, singer: ${item.from}
            <iframe src="${item.iframe}"></iframe>
            <a href="${item.iframe}" class="link">Link</a>
        </li>`;
}

//for zumba

document.getElementById("btn6").onclick=function() {
    fun()
};

const arr5 = [
    { title: "Upper body cardio", from: "ghhgg", iframe: "hjghjhgjg" },
    { title: "Lower body cardio", from: "=gbhgbhg", iframe: "s=hgjgjg" },
    { title: "Full body cardio", from: "kjbfkbk", iframe: "fsdjijv" }
   
];

function fun() {
    const ul = document.getElementsByTagName('ul')[0];
    const item = arr[Math.floor(Math.random() * arr.length)];
    ul.innerHTML = `
        <li>
            Song: ${item.title}, singer: ${item.from}
            <iframe src="${item.iframe}"></iframe>
            <a href="${item.iframe}" class="link">Link</a>
        </li>`;
}

const calories = document.querySelector(".bmr-calculator .result .calories");
const calculateBtn = document.querySelector(
  ".bmr-calculator .result .calculate-btn"
);
const age = document.querySelector(".bmr-calculator form #age");
const height = document.querySelector(".bmr-calculator form #height");
const weight = document.querySelector(".bmr-calculator form #weight");
const errorMessage = document.querySelector(
  ".bmr-calculator .result .error-message"
);

// BMR = 10*weight + 6.25*height - 5*age + 5
// BMR = 10*weight + 6.25*height - 5*age - 161;

const calculateBMR = (weight, height, age, gender) => {
  if (gender == "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }

  return 10 * weight + 6.25 * height - 5 * age - 161;
};

calculateBtn.addEventListener("click", () => {
  if (
    age.classList.contains("invalid") ||
    height.classList.contains("invalid") ||
    weight.classList.contains("invalid")
  ) {
    errorMessage.classList.add("active");
    return;
  }

  errorMessage.classList.remove("active");

  let genderValue = document.querySelector(
    ".bmr-calculator form input[name='gender']:checked"
  ).value;

  let BMR = calculateBMR(weight.value, height.value, age.value, genderValue);

  calories.innerHTML = BMR.toLocaleString("en-US");
});

// Input Validation

age.addEventListener("input", (e) => {
  let ageValue = e.target.value;

  if (!ageValue || isNaN(ageValue) || ageValue < 10 || ageValue > 100) {
    age.classList.add("invalid");
  } else {
    age.classList.remove("invalid");
  }
});

height.addEventListener("input", (e) => {
  let heightValue = e.target.value;

  if (!heightValue || isNaN(heightValue) || heightValue < 0) {
    height.classList.add("invalid");
  } else {
    height.classList.remove("invalid");
  }
});

weight.addEventListener("input", (e) => {
  let weightValue = e.target.value;

  if (!weightValue || isNaN(weightValue) || weightValue < 0) {
    weight.classList.add("invalid");
  } else {
    weight.classList.remove("invalid");
  }
});
