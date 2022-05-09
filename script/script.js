const keys = [
  [
    ["~", "`"],
    ["~", "`"],
  ],
  [
    ["1", "!"],
    ["1", "!"],
  ],
  [
    ["2", "@"],
    ["2", '"'],
  ],
  [
    ["3", "#"],
    ["3", "№"],
  ],
  [
    ["4", "$"],
    ["4", ";"],
  ],
  [
    ["5", "%"],
    ["5", "%"],
  ],
  [
    ["6", "^"],
    ["6", ":"],
  ],
  [
    ["7", "&"],
    ["7", "?"],
  ],
  [
    ["8", "*"],
    ["8", "*"],
  ],
  [
    ["9", "("],
    ["9", "("],
  ],
  [
    ["0", ")"],
    ["0", ")"],
  ],
  [
    ["-", "_"],
    ["-", "_"],
  ],
  [
    ["=", "+"],
    ["=", "+"],
  ],

  "Backspace",
  "Tab",
  [
    ["Q", "Й"],
    ["Й", "Q"],
  ],
  [
    ["W", "Ц"],
    ["Ц", "W"],
  ],
  [
    ["E", "У"],
    ["У", "E"],
  ],
  [
    ["R", "К"],
    ["К", "R"],
  ],
  [
    ["T", "Е"],
    ["Е", "T"],
  ],
  [
    ["Y", "Н"],
    ["Н", "Y"],
  ],
  [
    ["U", "Г"],
    ["Г", "U"],
  ],
  [
    ["I", "Ш"],
    ["Ш", "I"],
  ],
  [
    ["O", "Щ"],
    ["Щ", "O"],
  ],
  [
    ["P", "З"],
    ["З", "P"],
  ],
  [
    ["[", "Х"],
    ["Х", "["],
  ],

  [
    ["]", "ъ"],
    ["ъ", "]"],
  ],
  [
    ["\\", "\\"],
    ["\\", "\\"],
  ],
  "Del",
  "Caps",
  [
    ["A", "Ф"],
    ["Ф", "A"],
  ],
  [
    ["S", "Ы"],
    ["Ы", "S"],
  ],
  [
    ["D", "В"],
    ["В", "D"],
  ],
  [
    ["T", "Е"],
    ["Е", "T"],
  ],
  [
    ["F", "А"],
    ["А", "F"],
  ],
  [
    ["G", "П"],
    ["П", "G"],
  ],
  [
    ["H", "Р"],
    ["Р", "H"],
  ],
  [
    ["J", "О"],
    ["О", "J"],
  ],
  [
    ["K", "Л"],
    ["Л", "K"],
  ],
  [
    ["L", "Д"],
    ["Д", "L"],
  ],
  [
    [";", "Ж"],
    ["Ж", ";"],
  ],
  [
    ["'", "Э"],
    ["Э", "'"],
  ],
  "Enter",
  "Shift",
  [
    ["Z", "Я"],
    ["Я", "Z"],
  ],
  [
    ["X", "Ч"],
    ["Ч", "X"],
  ],
  [
    ["C", "С"],
    ["С", "C"],
  ],
  [
    ["V", "М"],
    ["М", "V"],
  ],
  [
    ["V", "М"],
    ["М", "V"],
  ],
  [
    ["B", "И"],
    ["И", "B"],
  ],
  [
    ["N", "Т"],
    ["Т", "N"],
  ],
  [
    ["M", "Ь"],
    ["Ь", "M"],
  ],
  [
    [",", "Б"],
    ["Б", ","],
  ],
  [
    [".", "Ю"],
    ["Ю", "."],
  ],
  [
    ["/", "."],
    [".", "/"],
  ],
  "up",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "space",
  "Alt",
  "Ctrl",
  "left",
  "bottom",
  "right",
];
let language = "rus";
alert(
  "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой) Спасибо за понимание."
);
let textField = document.createElement("textarea");
textField.classList.add("text-field");
document.body.append(textField);

let keyBoardWrapper = document.createElement("section");

keyBoardWrapper.classList.add("key-board-wrapper");
for (let keyItem of keys) {
  let key = document.createElement("div");
  key.classList.add("key");

  let keyValue = document.createElement("div");
  keyValue.classList.add("key-value");
  let keySubValue = document.createElement("div");
  keySubValue.classList.add("key-sub-value");

  if (language === "eng") {
    keyValue.innerHTML = keyItem[0][0];
    keySubValue.innerHTML = keyItem[0][1];
    if (typeof keyItem === "string") {
      keyValue.innerHTML = keyItem;
      keySubValue.innerHTML = "";
    }
  }

  if (language === "rus") {
    keyValue.innerHTML = keyItem[1][0];
    keySubValue.innerHTML = keyItem[1][1];
    if (typeof keyItem === "string") {
      keyValue.innerHTML = keyItem;
      keySubValue.innerHTML = "";
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
  if (keyItem === "Caps") {
    key.classList.add("caps");
  }
  if (keyItem === "Enter") {
    key.classList.add("enter");
  }
  if (keyItem === "Shift") {
    key.classList.add("shift");
  }
  if (keyItem === "Ctrl") {
    key.classList.add("ctrl");
  }
  if (keyItem === "Alt") {
    key.classList.add("alt");
  }
  if (keyItem === "space") {
    key.classList.add("space");
    keyValue.innerHTML = "";
  }
  if (keyItem === "up") {
    key.classList.add("up");
    keyValue.innerHTML = "➤";
  }
  if (keyItem === "bottom") {
    key.classList.add("bottom");
    keyValue.innerHTML = "➤";
  }
  if (keyItem === "left") {
    key.classList.add("left");
    keyValue.innerHTML = "➤";
  }
  if (keyItem === "right") {
    key.classList.add("right");
    keyValue.innerHTML = "➤";
  }

  key.append(keyValue);
  key.append(keySubValue);
  keyBoardWrapper.append(key);
}

document.body.append(keyBoardWrapper);
