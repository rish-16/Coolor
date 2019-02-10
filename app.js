document.head.innerHTML += '<script src="prism.js"></script>';
document.head.innerHTML += '<link rel="stylesheet" src="prism.css" />';

var pres = document.getElementsByTagName("pre");

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};

if (pres.length >= 1) {
  for (var i = 0; i < pres.length; i++) {
    pres[i].style.backgroundColor = "rgb(42,51,74)";
    pres[i].style.color = "#fff";

    var code = pres[i].innerText;

    code = code.replace(/\'/g, '"');
    code = code.replace(/n\"t/g, "n't");
    // code = code.replace(/\`/g, '"');

    // Comments
    code = code.replace(
      /\/\/ (.*)/g,
      "<span style='color: #4b6584 !important;'>$&</span>"
    );
    code = code.replace(
      /\/\* (.*?) \*\//g,
      `<span style='color: #4b6584 !important;'>/* $& */</span>`
    );

    // Brackets and symbols
    code = code.replaceAll(/\{/g, "<span style='color: #fff;'>{</span>");
    code = code.replaceAll(/\}/g, "<span style='color: #fff;'>}</span>");
    code = code.replaceAll(/\(/g, "<span style='color: #fff;'>(</span>");
    code = code.replaceAll(/\)/g, "<span style='color: #fff;'>)</span>");
    code = code.replaceAll(/\[/g, "<span style='color: #fff;'>[</span>");
    code = code.replaceAll(/\]/g, "<span style='color: #fff;'>]</span>");
    code = code.replaceAll(/\./g, "<span style='color: #fff;'>.</span>");
    code = code.replaceAll(/\,/g, "<span style='color: #fff;'>,</span>");
    code = code.replaceAll(
      /\s\=\s/g,
      `<span style='color: #8395a7;'> ${"="} </span>`
    );
    code = code.replaceAll(/\=>/g, "<span style='color: #ff6b6b;'>=></span>");

    // Keywords
    code = code.replace("true", "<span style='color: #feca57;'>true</span>");
    code = code.replace("false", "<span style='color: #feca57;'>false</span>");
    code = code.replaceAll("let ", "<span style='color: #ff6b6b;'>let </span>");
    code = code.replaceAll("var ", "<span style='color: #ff6b6b;'>var </span>");
    code = code.replaceAll("set ", "<span style='color: #ff6b6b;'>set </span>");
    code = code.replaceAll("new", "<span style='color: #00b894;'>new</span>");
    code = code.replaceAll(
      "const ",
      "<span style='color: #ff6b6b;'>const </span>"
    );
    code = code.replaceAll(
      "function",
      "<span style='color: #ff6b6b;'>function</span>"
    );
    code = code.replaceAll(
      "return",
      "<span style='color: #1dd1a1;'>return</span>"
    );
    code = code.replaceAll(
      "console",
      "<span style='color: #feca57;'>console</span>"
    );
    code = code.replaceAll("this", "<span style='color: #feca57;'>this</span>");
    code = code.replaceAll(
      "log",
      "<span style='color: #54a0ff;font-weight: bold;'>log</span>"
    );
    code = code.replaceAll(
      "alert",
      "<span style='color: #54a0ff;'>alert</span>"
    );
    code = code.replaceAll(
      "class",
      "<span style='color: #ff6b6b;'>class</span>"
    );
    code = code.replaceAll(
      "prompt",
      "<span style='color: #54a0ff;'>prompt</span>"
    );
    code = code.replaceAll(
      "indexOf",
      "<span style='color: #54a0ff;font-weight: bold;'>indexOf</span>"
    );
    code = code.replaceAll(
      "includes",
      "<span style='color: #54a0ff;font-weight: bold;'>includes</span>"
    );
    code = code.replaceAll(
      "replace",
      "<span style='color: #54a0ff;font-weight: bold;'>replace</span>"
    );
    code = code.replaceAll(
      "constructor",
      "<span style='color: #54a0ff;'>constructor</span>"
    );
    code = code.replaceAll(
      "prompt",
      "<span style='color: #54a0ff;'>prompt</span>"
    );
    code = code.replaceAll(
      "import",
      "<span style='color: #1dd1a1;'>import</span>"
    );
    code = code.replaceAll(
      "extends",
      "<span style='color: #ff6b6b;'>extends</span>"
    );
    code = code.replaceAll("from", "<span style='color: #1dd1a1;'>from</span>");
    code = code.replaceAll("for", "<span style='color: #1dd1a1;'>for</span>");
    code = code.replaceAll("if", "<span style='color: #1dd1a1;'>if</span>");
    code = code.replaceAll("else", "<span style='color: #1dd1a1;'>else</span>");
    code = code.replaceAll("of", "<span style='color: #00b894;'>of</span>");
    code = code.replaceAll(
      "export",
      "<span style='color: #1dd1a1;'>export</span>"
    );

    // Strings
    code = code.replace(
      /"(.*?)"/g,
      "<span style='color: #fdcb6e;'>&quot;$1&quot;</span>"
    );
    code = code.replace(
      /`(.*?)`/g,
      "<span style='color: #fdcb6e;'>`$1`</span>"
    );

    // Functions
    code = code.replace(
      /"function " + .*\(/g,
      "<span style='color: #54a0ff;font-weight: bold;'>$&()</span>"
    );

    // Parameters
    code = code.replace(
      /\w\(.*\)/g,
      "<span style='color: #ff9f43;'><i>$&</i></span>"
    );

    pres[i].innerHTML = code;
  }
}
