if (localStorage.getItem("keyLanguage") == null) {
  localStorage.setItem("keyLanguage", "eng");
}
let language = localStorage.getItem("keyLanguage");

const keys = [
  [["~", "`"], ["~", "`"], "Backquote"],
  [["1", "!"], ["1", "!"], "Digit1"],
  [["2", "@"], ["2", '"'], "Digit2"],
  [["3", "#"], ["3", "№"], "Digit3"],
  [["4", "$"], ["4", ";"], "Digit4"],
  [["5", "%"], ["5", "%"], "Digit5"],
  [["6", "^"], ["6", ":"], "Digit6"],
  [["7", "&"], ["7", "?"], "Digit7"],
  [["8", "*"], ["8", "*"], "Digit8"],
  [["9", "("], ["9", "("], "Digit9"],
  [["0", ")"], ["0", ")"], "Digit0"],
  [["-", "_"], ["-", "_"], "Minus"],
  [["=", "+"], ["=", "+"], "Equal"],
  "Backspace",
  "Tab",
  [["Q", "Й"], ["Й", "Q"], "KeyQ"],
  [["W", "Ц"], ["Ц", "W"], "KeyW"],
  [["E", "У"], ["У", "E"], "KeyE"],
  [["R", "К"], ["К", "R"], "KeyR"],
  [["T", "Е"], ["Е", "T"], "KeyT"],
  [["Y", "Н"], ["Н", "Y"], "KeyY"],
  [["U", "Г"], ["Г", "U"], "KeyU"],
  [["I", "Ш"], ["Ш", "I"], "KeyI"],
  [["O", "Щ"], ["Щ", "O"], "KeyO"],
  [["P", "З"], ["З", "P"], "KeyP"],
  [["[", "Х"], ["Х", "["], "BracketLeft"],
  [["]", "ъ"], ["ъ", "]"], "BracketRight"],
  [["\\", "\\"], ["\\", "\\"], "Backslash"],
  "Delete",
  "CapsLock",
  [["A", "Ф"], ["Ф", "A"], "KeyA"],
  [["S", "Ы"], ["Ы", "S"], "KeyS"],
  [["D", "В"], ["В", "D"], "KeyD"],
  [["T", "Е"], ["Е", "T"], "KeyT"],
  [["F", "А"], ["А", "F"], "KeyF"],
  [["G", "П"], ["П", "G"], "KeyG"],
  [["H", "Р"], ["Р", "H"], "KeyH"],
  [["J", "О"], ["О", "J"], "KeyJ"],
  [["K", "Л"], ["Л", "K"], "KeyK"],
  [["L", "Д"], ["Д", "L"], "KeyL"],
  [[";", "Ж"], ["Ж", ";"], "Semicolon"],
  [["'", "Э"], ["Э", "'"], "Quote"],
  "Enter",
  "ShiftLeft",
  [["Z", "Я"], ["Я", "Z"], "KeyZ"],
  [["X", "Ч"], ["Ч", "X"], "KeyX"],
  [["C", "С"], ["С", "C"], "KeyC"],
  [["V", "М"], ["М", "V"], "KeyV"],
  [["B", "И"], ["И", "B"], "KeyB"],
  [["N", "Т"], ["Т", "N"], "KeyN"],
  [["M", "Ь"], ["Ь", "M"], "KeyM"],
  [[",", "Б"], ["Б", ","], "Comma"],
  [[".", "Ю"], ["Ю", "."], "Period"],
  [["/", "."], [".", "/"], "Slash"],
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "MetaLeft",
  "AltLeft",
  "Space",
  "AltRight",
  "ControlRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  `${language}`,
];

// alert(
//   "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой) Спасибо за понимание."
// );

let textField = document.createElement("textarea");
textField.classList.add("text-field");
document.body.append(textField);

(function render() {
  let keyBoardWrapper = document.createElement("section");

  keyBoardWrapper.classList.add("key-board-wrapper");
  for (let keyItem of keys) {
    let key = document.createElement("div");
    key.classList.add("key");
    if (typeof keyItem === "string") {
      key.setAttribute("data", `${keyItem}`);
    } else {
      key.setAttribute("data", `${keyItem[2]}`);
    }
    if (language === "eng") {
      key.innerHTML = keyItem[0][0];
      if (typeof keyItem === "string") {
        key.innerHTML = keyItem;
      }
    }

    if (language === "rus") {
      if (typeof keyItem === "string") {
        key.innerHTML = keyItem;
      } else {
        key.innerHTML = keyItem[1][0];
      }
    }

    if (keyItem === "Backspace") {
      key.classList.add("backspace-key");
    }
    if (keyItem === "Tab") {
      key.classList.add("tab-key");
    }
    if (keyItem === "\\") {
      key.classList.add("width83");
    }
    if (keyItem === "Delete") {
      key.classList.add("del");
      key.innerHTML = "Del";
    }
    if (keyItem === "CapsLock") {
      key.classList.add("caps");
      key.innerHTML = "Caps";
    }
    if (keyItem === "Enter") {
      key.classList.add("enter");
    }
    if (keyItem === "ShiftLeft" || keyItem === "ShiftRight") {
      key.classList.add("shift");
      key.innerHTML = "Shift";
    }
    if (keyItem === "ArrowUp") {
      key.classList.add("arrow-up");
      key.innerHTML = "\u2191";
    }
    if (keyItem === "ControlLeft" || keyItem === "ControlRight") {
      key.classList.add("ctrl");
      key.innerHTML = "Ctrl";
    }
    if (keyItem === "MetaLeft") {
      key.innerHTML = "Win";
    }
    if (keyItem === "AltLeft" || keyItem === "AltRight") {
      key.classList.add("alt");
      key.innerHTML = "Alt";
    }
    if (keyItem === "Space") {
      key.classList.add("space");
      key.innerHTML = "";
    }
    if (keyItem === "ArrowDown") {
      key.classList.add("arrowd-down");
      key.innerHTML = "\u2193";
    }
    if (keyItem === "ArrowLeft") {
      key.classList.add("arrow-left");
      key.innerHTML = "\u2190";
    }
    if (keyItem === "ArrowRight") {
      key.classList.add("arrow-right");
      key.innerHTML = "\u2192";
    }
    if (keyItem === language) {
      key.classList.add("lang");
    }
    keyBoardWrapper.append(key);
  }

  document.body.append(keyBoardWrapper);
})();

document.querySelector(".lang").addEventListener("click", function () {
  if (localStorage.getItem("keyLanguage") === "eng") {
    localStorage.setItem("keyLanguage", "rus");
    let i = 0;
    for (let key of document.querySelectorAll(".key")) {
      if (typeof keys[i] === "string") {
        key.innerHTML = keys[i];
      } else {
        key.innerHTML = keys[i][1][0];
      }
      if (keys[i] === "Delete") {
        key.classList.add("del");
        key.innerHTML = "Del";
      }
      if (keys[i] === "CapsLock") {
        key.innerHTML = "Caps";
      }
      if (keys[i] === "ShiftLeft" || keys[i] === "ShiftRight") {
        key.innerHTML = "Shift";
      }
      if (keys[i] === "ControlLeft" || keys[i] === "ControlRight") {
        key.innerHTML = "Ctrl";
      }
      if (keys[i] === "MetaLeft") {
        key.innerHTML = "Win";
      }
      if (keys[i] === "AltLeft" || keys[i] === "AltRight") {
        key.innerHTML = "Alt";
      }
      if (keys[i] === "ArrowUp") {
        key.innerHTML = "\u2191";
      }
      if (keys[i] === "Space") {
        key.classList.add("space");
        key.innerHTML = "";
      }
      if (keys[i] === "ArrowDown") {
        key.innerHTML = "\u2193";
      }
      if (keys[i] === "ArrowLeft") {
        key.innerHTML = "\u2190";
      }
      if (keys[i] === "ArrowRight") {
        key.innerHTML = "\u2192";
      }
      i++;
    }
    this.innerHTML = localStorage.getItem("keyLanguage");
  } else {
    localStorage.setItem("keyLanguage", "eng");
    let i = 0;
    for (let key of document.querySelectorAll(".key")) {
      if (typeof keys[i] === "string") {
        key.innerHTML = keys[i];
      } else {
        key.innerHTML = keys[i][0][0];
      }

      if (keys[i] === "Delete") {
        key.classList.add("del");
        key.innerHTML = "Del";
      }
      if (keys[i] === "CapsLock") {
        key.innerHTML = "Caps";
      }
      if (keys[i] === "ShiftLeft" || keys[i] === "ShiftRight") {
        key.innerHTML = "Shift";
      }
      if (keys[i] === "ControlLeft" || keys[i] === "ControlRight") {
        key.innerHTML = "Ctrl";
      }
      if (keys[i] === "MetaLeft") {
        key.innerHTML = "Win";
      }
      if (keys[i] === "AltLeft" || keys[i] === "AltRight") {
        key.innerHTML = "Alt";
      }
      if (keys[i] === "ArrowUp") {
        key.innerHTML = "\u2191";
      }
      if (keys[i] === "Space") {
        key.classList.add("space");
        key.innerHTML = " ";
      }
      if (keys[i] === "ArrowDown") {
        key.innerHTML = "\u2193";
      }
      if (keys[i] === "ArrowLeft") {
        key.innerHTML = "\u2190";
      }
      if (keys[i] === "ArrowRight") {
        key.innerHTML = "\u2192";
      }
      i++;
    }
  }
});

document.onkeydown = (e) => {
  document.querySelectorAll(".key").forEach(function (elem) {
    elem.classList.remove("active");
  });
  document.querySelector('.key[data="' + e.code + '"]').classList.add("active");
  if (
    document.querySelector('.key[data="' + e.code + '"]').innerHTML !==
      "\u2190" ||
    "\u2191" ||
    "\u2192" ||
    "\u21923"
  ) {
    return null;
  }
  document.querySelector(".text-field").innerHTML += document.querySelector(
    '.key[data="' + e.code + '"]'
  ).innerHTML;
};
document.onkeyup = (e) => {
  document
    .querySelector('.key[data="' + e.code + '"]')
    .classList.remove("active");
};
let textArea = document.querySelector(".text-field");
document.querySelectorAll(".key").forEach(function (elem) {
  elem.addEventListener("click", function (e) {
    document.querySelector(".text-field").innerHTML +=
      elem.innerHTML.toLowerCase();
    let atr = elem.getAttribute("data");
    if (atr === "Space") {
      textArea.innerHTML += " ";
    }
  });
});
