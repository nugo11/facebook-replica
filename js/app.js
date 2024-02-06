let inputName = document.getElementById("inputName");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let inputPass = document.getElementById("inputPass");
let inputPassError = document.getElementsByClassName("inputPassError");
let PassCheck = document.getElementById("PassCheck");
let authSubmit = document.getElementById("authSubmit");
let regSubmit = document.getElementById("regSubmit");
let checkReg = document.getElementById("checkReg");
let getEmail = localStorage.getItem("email");
let getPass = localStorage.getItem("inputPass");

function auth() {
  if (window.location.hash === "#en") {
    regSubmit.style.display = "block";
    authSubmit.style.display = "none";
  }
  if (window.location.hash === "#login") {
    checkReg.style.display = "block";
  }

  function Submit() {
    if (inputName.value === getEmail && inputPass.value === getPass) {
      window.location.replace("/feed.html");
    }

    if (inputPass.value !== getPass || inputName.value !== getEmail) {
      checkReg.style.display = "block";
      checkReg.style.color = "red";
      checkReg.textContent = "Email or password do not match";
      inputName.classList.add("red-placeholder");
      inputName.style.border = "1px solid red";
      inputPass.classList.add("red-placeholder");
      inputPass.style.border = "1px solid red";
    }

    if (inputPass.value !== getPass || inputPass.value === "") {
      inputPass.classList.add("red-placeholder");
      inputPass.style.border = "1px solid red";
      inputPassError[1].textContent = "The password is incorrect";
      inputPassError[1].style.height = "35px";
      inputPassError[1].style.marginBottom = "20px";
    } else {
      inputPass.style.border = "1px solid #aeb0b2";
      inputPass.classList.remove("red-placeholder");
      inputPassError[1].textContent = "";
      inputPassError[1].style.height = "0";
      inputPassError[1].style.marginBottom = "0";
    }

    if (inputName.value !== getEmail || inputName.value === "") {
      inputName.style.border = "1px solid red";
      inputName.classList.add("red-placeholder");
      inputPassError[0].textContent = "The Email  is incorrect";
      inputPassError[0].style.height = "35px";
      inputPassError[0].style.marginBottom = "20px";
    } else {
      inputName.style.border = "1px solid #aeb0b2";
      inputName.classList.remove("red-placeholder");
      inputPassError[0].textContent = "";
      inputPassError[0].style.height = "0";
      inputPassError[0].style.marginBottom = "0";
    }
  }

  function register() {
    if (
      inputName.value !== "" &&
      fName.value !== "" &&
      lName.value !== "" &&
      inputPass.value.length > 8 &&
      inputPass.value.length < 22 &&
      inputPass.value === PassCheck.value
    ) {
      localStorage.setItem("email", inputName.value);
      localStorage.setItem("fname", fName.value);
      localStorage.setItem("lname", lName.value);
      localStorage.setItem("inputPass", inputPass.value);
      window.location.replace("/index.html#login");
    }

    if (inputName.value === "") {
      inputName.style.border = "1px solid red";
      inputName.classList.add("red-placeholder");
      inputName.placeholder = "Please fill email";
    } else {
      inputName.style.border = "1px solid #aeb0b2";
      inputName.classList.remove("red-placeholder");
    }

    if (inputName.value === localStorage.getItem('email')) {
      inputName.value = "";
      inputName.style.border = "1px solid red";
      inputName.classList.add("red-placeholder");
      inputName.placeholder = "Email is already registered!";
    } 

    if (fName.value === "") {
      fName.style.border = "1px solid red";
      fName.classList.add("red-placeholder");
      fName.placeholder = "Please fill your name";
    } else {
      fName.style.border = "1px solid #aeb0b2";
      fName.classList.remove("red-placeholder");
    }

    if (lName.value === "") {
      lName.style.border = "1px solid red";
      lName.classList.add("red-placeholder");
      lName.placeholder = "Please fill your last name";
    } else {
      lName.style.border = "1px solid #aeb0b2";
      lName.classList.remove("red-placeholder");
    }

    if (
      inputPass.value === "" ||
      inputPass.value.length < 8 ||
      inputPass.value.length > 22
    ) {
      inputPass.style.border = "1px solid red";
      inputPass.classList.add("red-placeholder");
      inputPassError[0].textContent =
        "The password must contain a minimum of 8 characters and a maximum of 22";
      inputPassError[0].style.height = "35px";
      inputPassError[0].style.marginBottom = "20px";
    } else {
      inputPass.style.border = "1px solid #aeb0b2";
      inputPass.classList.remove("red-placeholder");
      inputPassError[0].textContent = "";
      inputPassError[0].style.height = "0";
      inputPassError[0].style.marginBottom = "0";
    }

    if (PassCheck.value === "" || inputPass.value !== PassCheck.value) {
      PassCheck.style.border = "1px solid red";
      PassCheck.classList.add("red-placeholder");
      inputPassError[1].textContent =
        "This field must not be empty and must match the password";
      inputPassError[1].style.height = "35px";
      inputPassError[1].style.marginBottom = "20px";
    } else {
      PassCheck.style.border = "1px solid #aeb0b2";
      PassCheck.classList.remove("red-placeholder");
      inputPassError[1].textContent = "";
      inputPassError[1].style.height = "0";
      inputPassError[1].style.marginBottom = "0";
    }
  }

  if (window.location.toString().includes("feed")) {
  } else {
    authSubmit.addEventListener("click", () => {
      Submit();
    });
    inputName.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        Submit();
      }
    });
    inputPass.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        Submit();
      }
    });

    regSubmit.addEventListener("click", () => {
      register();
    });
    if (window.location.toString().includes("registration")) {
      PassCheck.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          register();
        }
      });
    }
  }
}

auth();

let fNameP = document.getElementsByClassName("fNameP");
let lnameP = document.getElementsByClassName("lnameP");
let addpostinput = document.getElementsByClassName("addpostinput");
let addpostmodal = document.getElementsByClassName("addpostmodal");
let addsecondrow = document.getElementsByClassName("addsecondrow");
let newsfeed = document.getElementsByClassName("newsfeed");
let closeModal = document.getElementById("closeModal");
let modaltextarea = document.getElementById("modaltextarea");
let bgblur = document.getElementById("bgblur");
let submitpost = document.getElementById("submitpost");
let imglinkshow = document.getElementById("imglinkshow");
let hidethisp = document.getElementById("hidethisp");
let imglink = document.getElementById("imglink");
let localStorageLength = localStorage.length;
let like = 'likecountId';
let createid = 'likebutId';
let NumNum = 0;
let likenum = `<span class='lcountID'>${NumNum}</span>`;

let dateObj = new Date();
let myDate =
  dateObj.getUTCFullYear() +
  "/" +
  (dateObj.getMonth() + 1) +
  "/" +
  dateObj.getUTCDate();

function feed() {
  for (let i = 0; i < fNameP.length; i++) {
    fNameP[i].textContent = localStorage.getItem("fname");
    lnameP[i].textContent = localStorage.getItem("lname");
  }
  addpostinput[0].placeholder = `What's on your mind, ${localStorage.getItem(
    "fname"
  )}?`;
  modaltextarea.placeholder = `What's on your mind, ${localStorage.getItem(
    "fname"
  )}?`;

  function showmodal() {
    addpostmodal[0].removeAttribute("style");
    bgblur.removeAttribute("style");
    modaltextarea.value = "";
    document.getElementsByTagName("header")[0].style.opacity = "0.1";
    document.getElementsByClassName("addpost")[0].style.opacity = "0.1";
    document.getElementsByClassName("newsfeed")[0].style.opacity = "0.1";
    document.getElementsByClassName("minetwoo")[0].style.position = "fixed";
  }

  function closeModalx() {
    addpostmodal[0].style.display = "none";
    bgblur.style.display = "none";
    document.getElementsByTagName("header")[0].removeAttribute("style");
    document.getElementsByClassName("addpost")[0].removeAttribute("style");
    document.getElementsByClassName("newsfeed")[0].removeAttribute("style");
    document.getElementsByClassName("minetwoo")[0].removeAttribute("style");
  }

  function showimglink() {
    hidethisp.style.display = "none";
    imglinkshow.style.display = "none";
    imglink.style.display = "block";
  }

  imglinkshow.addEventListener("click", () => {
    showimglink();
  });

  closeModal.addEventListener("click", () => {
    closeModalx();
  });

  addpostinput[0].addEventListener("click", () => {
    showmodal();
  });

  addsecondrow[0].addEventListener("click", () => {
    showmodal();
  });

  function addPost(a) {
    addpostmodal[0].style.display = "none";
    bgblur.style.display = "none";
    let postform = `<div class="post">
    <div class="addfirstrowinmodal">
      <div class="useravatarinmodal">
        <img src="./img/img.jpg" alt="" />
      </div>
      <div class="pmodalnames">
        <div class="postmnames">
          <div class="fNameP">${localStorage.getItem("fname")}</div>
          <div class="lnameP">${localStorage.getItem("lname")}</div>
        </div>
        <div id="postdetails">
          <div id="postdate">${myDate}</div>
          · <img src="./img/earth.png" alt="earth" />
        </div>
      </div>
    </div>

    <div class="posttext">${modaltextarea.value}</div>
    <img
      src="${imglink.value}"
      id="postimg"
    />

    <div class="postfooter">
      <div class="postfot1">
        <div class="likebut">
          <img src="./img/likebut.png" alt="like" />
          <p class="${like}">${likenum}<p>
        </div>

        <div class="comshar">
          <span
            ><div class="comcount">0</div>
            comment</span
          >
          <span
            ><div class="sharecount">0</div>
            share</span
          >
        </div>
      </div>
      <hr style="opacity: 0.6" />
      <div class="postfot2">
        <button class="${createid}"><img src="./img/likeb.png" alt="like" />like</button>
        <button>
          <img src="./img/comb.png" alt="comment" />comment
        </button>
        <button><img src="./img/shareb.png" alt="share" />share</button>
      </div>
      <hr style="opacity: 0.6" />

      <div class="comsection">
        <li id="avatarsection">
          <img src="./img/img.jpg" alt="avatar" id="avatar" />
          <img src="./img/arrow.png" alt="arrow" id="arrow" />
        </li>
        <input type="text" placeholder="Write a comment..." />
      </div>
    </div>
  </div>`;
    localStorage.setItem(a, postform);
    window.location.reload();
  }

  
    submitpost.addEventListener("click", () => {
      if(imglink.value !== '') {
      addPost(localStorageLength);
    } else {
      document.getElementsByClassName('addphotoinmodal')[0].style.border = "2px solid red";
      hidethisp.textContent = 'Image is required!!!';
      hidethisp.style.fontWeight = 'bold';
      hidethisp.style.color = 'red';
      modaltextarea.classList.add("red-placeholder");
    }
    });

  function pushPostinFeed() {
    let numbersArray = [];

    for (let k = 0; k < localStorageLength; k++) {
      let localkeyvalue = localStorage.key(k);
      if (!isNaN(localkeyvalue)) {
        numbersArray.push(+localkeyvalue);
      }
    }

    numbersArray.sort((a, b) => a - b);
    numbersArray.reverse();

    for (let i = 0; i < numbersArray.length; i++) {
      let currentNumber = numbersArray[i];
      newsfeed[0].innerHTML += localStorage.getItem(currentNumber);
    }
  }


  pushPostinFeed();
}

if (window.location.toString().includes("feed")) {
  feed();
}
