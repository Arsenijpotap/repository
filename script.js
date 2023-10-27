a = "<>";

var h = {
  function: [
    "<div class='butt'></div>",
    ,
    "<ul></ul>",
    "<say></say>",
    "<li></li>",
    "<var></var>",
  ],
};
br = false;
b = [];
let allid = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "<",
  ">",
  "/",
  " ",
];
id = " ";
function keydown(r) {
  if (d[e] == "<") {
    document.getElementById("sk").style = " background-color:orange";
  } else {
    if (document.getElementById(d[e])) {
      document.getElementById(d[e]).style = "background-color:orange";
    }
  }
  // console.log(d1[e+1])

  r.key = r.key.replace("<", "|");
  console.log(r.key, d[e]);
  if (r.key == d[e]) {
    e++;
    z1 = z.slice(0, 1);
    if (d.length - e == 0) {
      d = "<>";

      if (d[e] == "<") {
        if (document.getElementById("sk")) {
          document.getElementById("sk").style = "background-color:none;";
        }
      } else {
        if (document.getElementById(d[e])) {
          document.getElementById(d[e]).style = " background-color:none;";
        }
      }
      document.getElementsByClassName("butt").style = "background-color:none;";
      document.getElementById(">").style = "background-color:none;";
      document.getElementById("butt").style = "display:flex";
      document.getElementsByClassName("text1")[0].textContent = "";
      document.getElementsByClassName("text2")[0].textContent = "";
      t2 = new Date().getTime();
      time = (t2 - t1) / 100;
      document.removeEventListener();
    }

    z = z.slice(1, z.length);
    z2 = z.slice(0, 20);
    if (d1[e] == "|") {
      document.getElementById("txt").style = " display: flex;";

      // z=z.slices(1,z.length)
    }
    document.getElementsByClassName("text1")[0].textContent = z2;
    document.getElementsByClassName("text2")[0].textContent = z1;

    if (d[e - 1] == "<") {
      if (document.getElementById("sk")) {
        document.getElementById("sk").style = "background-color:none;";
      }
    } else {
      if (document.getElementById(d[e - 1])) {
        document.getElementById(d[e - 1]).style = " background-color:none;";
      }
    }
    if (d[e] == "<") {
      document.getElementById("txt").style = " display: none;";
      document.getElementById("sk").style = " background-color:orange";
    } else {
      if (document.getElementById(d[e])) {
        document.getElementById(d[e]).style = "background-color:orange";
      }
    }
  }
  r.key = "_";
}
function start() {
  document.getElementById("butt").style = "display:none";
  levels = document.getElementsByName("level");

  for (var s = 0; s > 3; s++) {
    levels[i].onclick = function () {
      alert(levels[i].value);
    };
  }

  d1 = "";
  d = "<>";
  e = 0;

  for (var i = 0; i < 1; i++) {
    index = d.indexOf(">", Math.round(Math.random() * (d.length - 1)));
    d =
      d.slice(0, index + 1) +
      h.function[Math.round(Math.random() * (h.function.length - 1))] +
      d.slice(index + 1);
  }

  // document.getElementsByClassName('text')[0].textContent = d;
  d = d.slice(2, d.length);

  d1 = d.replaceAll("<", "|");

  z = d.replace(" ", "ㅤ");
  d1 = d1.split("");

  console.log(d);
  z1 = z.slice(0, 1);
  z = z.slice(1, z.length);
  t1 = new Date().getTime();
  if (d[e] == "<") {
    document.getElementById("sk").style = " background-color:orange";
  } else {
    if (document.getElementById(d[e])) {
      document.getElementById(d[e]).style = "background-color:orange";
    }
  }

  document.getElementsByClassName("text1")[0].textContent = z;
  document.getElementsByClassName("text2")[0].textContent = z1;

  document.addEventListener("keypress", keydown);
}
