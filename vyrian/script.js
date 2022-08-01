// const cuttape=document.querySelector('#cut_tape')
// const reel=document.querySelector('#reel')
// const reels=document.querySelector('#reels')
// const tray=document.querySelector('#tray')
// const trays=document.querySelector('#trays')

// const bulk=document.querySelector('#bulk')

// const bulks=document.querySelector('#bulks')

// const package_type=document.querySelector('#')

const chemical = document.querySelector("#Chemical");
const dimension = document.querySelector("#Dimension");
const terminal = document.querySelector("#Terminal");
const soldering = document.querySelector("#Soldering");
const xray = document.querySelector("#Xray");
const xrf = document.querySelector("#XRF");
const decap = document.querySelector("#Decap");

const btn = document.querySelector("#btn");
const btn_clear = document.querySelector("#btn_clear");
const text_output = document.querySelector("#text_output");
let text_area = document.getElementById("text_area").value;

let text = "";
let empty = "";

function checkSample(x) {
  //status check

  if (x <= 200) {
    return x;
  } else if (x > 200) {
    return 122;
  }
}

function terminalCheck(x) {
  if (x == 0) {
    return "Terminal Inspection: Terminals are free of deformations, corrosion and oxidation. ";
  } else if (x == 1) {
    return "Terminal Inspection: Terminals are free of corrosion and oxidation. Minor scratches were observed on the terminals. ";
  } else if (x == 2) {
    return "Terminal Inspection: Terminals are free of corrosion and oxidation. Minor test contact marks were observed on the terminals.";
  } else if (x == 3) {
    return "Terminal Inspection: Terminals are free of corrosion and oxidation. Minor test contact marks were observed. Minor scratches were observed.";
  } else if (x == 4) {
    return "Terminal Inspection: Terminals are free of deformations. Minor oxidation were observed on the terminals.";
  } else if (x == 5) {
    return "Terminal Inspection: Minor scratches were observed. Minor oxidation were observed on the terminals.";
  } else if (x == 6) {
    return "Terminal Inspection: Minor test contact marks were observed. Minor oxidation were observed on the terminals.";
  } else if (x == 7) {
    return "Terminal Inspection: Minor scratches were observed. Minor test contact marks were observed. Minor oxidation were observed on the terminals.";
  }
}

function showDecap() {
  if (document.getElementById("Decap") === true) {
    document.getElementById("right_container").style.visibility = "visible";
  } else if (document.getElementById("Decap") === false) {
    document.querySelector("right_container").style.visibility = "hidden";
  }
}

btn.onclick = () => {
  text = ""; // reset
  document.getElementById("text_area").value = text;

  let package_type = document.querySelector(
    'input[name="package_type"]:checked'
  ).value;
  let test_type = document.querySelector('input[name="test"]:checked').value;
  let partNumber = document.getElementById("PartNumber").value;
  let Quantity = document.getElementById("Quantity").value;

  let lotcode = document.getElementById("LotCode").value;
  let DC = document.getElementById("DC").value;

  let a = document.querySelector('input[id="scratches"]:checked');

  let numDecap = document.getElementById("NumDecap").value;
  let sample = checkSample(Quantity);

  let xray_sample = checkXray(Quantity);

  text += "Classification: Unused" + "<br>" + "<br>";

  document.getElementById("text_area").value +=
    "Classification: Unused" + "\r\n" + "\r\n";

  text += "Date Code: " + DC + "<br>" + "<br>";

  document.getElementById("text_area").value +=
    "Date Code: " + DC + "\r\n" + "\r\n";

  text += "Lot Code: " + lotcode + "<br>" + "<br>";

  document.getElementById("text_area").value +=
    "Lot Code: " + lotcode + "\r\n" + "\r\n";

  text +=
    Quantity +
    " pieces of " +
    partNumber +
    " were received in " +
    package_type +
    " for external visual inspection. Detailed visual analysis was performed on " +
    sample +
    " samples.  All testing was performed and sampled according to the AS6081 standard." +
    "<br>" +
    "<br>";

  document.getElementById("text_area").value +=
    Quantity +
    " pieces of " +
    partNumber +
    " were received in " +
    package_type +
    " for external visual inspection. Detailed visual analysis was performed on " +
    sample +
    " samples. All testing was performed and sampled according to the AS6081 standard." +
    "\r\n" +
    "\r\n";

  if (dimension.checked) {
    text += POD_check() + "<br>" + "<br>";
    document.getElementById("text_area").value += POD_check() + "\r\n" + "\r\n";
  }

  console.log("a is: " + a);
  let t = terminalStatus();

  console.log("t is "+t)
  text += terminalCheck(t) + "<br>" + "<br>";
  document.getElementById("text_area").value +=
    terminalCheck(t) + "\r\n" + "\r\n";

  //chemical test
  if (chemical.checked) {
    text += chem + "<br>" + "<br>";
    document.getElementById("text_area").value += chem + "\r\n" + "\r\n";
  }

  //Xray test
  if (xray.checked) {
    text +=
      "Radiological Inspection: " +
      xray_sample +
      " of " +
      xray_sample +
      " sample parts passed radiological inspection. No abnormalities observed." +
      "<br>" +
      "<br>";
    document.getElementById("text_area").value +=
      "Radiological Inspection: " +
      xray_sample +
      " of " +
      xray_sample +
      " sample parts passed radiological inspection. No abnormalities observed." +
      "\r\n" +
      "\r\n";
  }
  //xrf
  if (xrf.checked) {
    text += xrf_text + "<br>" + "<br>";
    document.getElementById("text_area").value += xrf_text + "\r\n" + "\r\n";
  }
  // ddecap

  if (decap.checked) {
    text +=
      "Decapsulation Testing: " +
      numDecap +
      " of " +
      numDecap +
      " sample parts passed decapsulation testing with favorable results." +
      "<br>" +
      "<br>";
    document.getElementById("text_area").value +=
      "Decapsulation Testing: " +
      numDecap +
      " of " +
      numDecap +
      " sample parts passed decapsulation testing with favorable results." +
      "\r\n" +
      "\r\n";
  }
  // Note
  text += final + "<br>" + "<br>" + "<br>" + "<br>";
  document.getElementById("text_area").value +=
    final + "\r\n" + "\r\n" + "\r\n" + "\r\n";

  if (decap.checked) {
    text += "Decapsulation Summary:" + "<br>" + "<br>";
    document.getElementById("text_area").value +=
      "Decapsulation Summary:" + "\r\n" + "\r\n";
    if (numDecap == 3) {
      text += "Decapsulation was performed on 3 samples" + "<br>" + "<br>";
      document.getElementById("text_area").value +=
        "Decapsulation was performed on 3 samples" + "\r\n" + "\r\n";
      decap_summary(3);
    } else if (numDecap == 1) {
      text += "Decapsulation was performed on 1 sample" + "<br>" + "<br>";
      document.getElementById("text_area").value +=
        "Decapsulation was performed on 1 samples" + "\r\n" + "\r\n";
      decap_summary(1);
    }
  }

  Print_report(); // last line to store input into text box

  console.log(text_output);

  console.log("Package type is:" + package_type);
};

function Print_report() {
  text_output.innerHTML = text;
  text_area.value = text;
}

// btn.addEventListener('click',fun1);

function terminalStatus() {
  let a = document.querySelector('input[id="scratches"]:checked');
  let b = document.querySelector('input[id="testmark"]:checked');
  let c = document.querySelector('input[id="oxidation"]:checked');

  if (a != null && b != null && c===null) {
    return 3; //3 is both scratches and test mark
  } else if (a === null && b === null && c===null) {
    return 0; // 0 is good
  } else if (a != null && b === null&& c===null) {
    return 1; // scratches only
  } else if (a === null && b != null&& c===null) {
    return 2; // test mark only
  } else if (a === null && b === null && c != null) {
    return 4; // oxidation
  } else if (a != null && b === null && c !== null) {
    return 5; // scratches and oxidation
  } else if (a === null && b != null && c != null) {
    return 6; // test mark and oxidation
  } else if (a != null && b != null && c != null) {
    return 7; // scratches test mark and oxidation
  }
}

let dim =
  "Visual Analysis: Dimensions Height, Width, and Thickness were measured and are within manufacturer's specifications. The parts have the same exterior configuration as the POD.";
let ter =
  "Terminal Inspection: Terminals are free of deformations, corrosion and oxidation.";
let chem =
  "Remarking/Resurfacing: 3 of 3 sample parts passed the remarking and resurfacing test and there is no indication of any tampering on the surface.";
let final =
  "Note: Radiological inspection and XRF material analysis was performed on the sample size in accordance with AS6081 standard";

let xrf_text =
  "XRF Material Analysis: 3 of 3 sample parts passed XRF material analysis.";

function decap_summary(size) {
  let manufacture = document.getElementById("NumDecap").value;
  let marking = document.getElementById("Marking").value;
  let logo = document.getElementById("Logo").value;
  for (var x = 0; x < size; x++) {
    text +=
      "Sample " +
      (x + 1) +
      ", Die " +
      (x + 1) +
      ': Manufacturer logo "' +
      logo +
      '" were observed. "' +
      marking +
      '" were observed- this could be the original device code.' +
      "<br>" +
      "<br>";
    document.getElementById("text_area").value +=
      "Sample " +
      (x + 1) +
      ", Die " +
      (x + 1) +
      ': Manufacturer logo "' +
      logo +
      '" were observed. "' +
      marking +
      '" were observed- this could be the original device code.' +
      "\r\n" +
      "\r\n";
  }
}
function check_status() {
  let status = document.getElementById("All");
  if (status.checked == true) {
    selectAll();
  } else if (status.checked == false) {
    deselectAll();
  }
}

function selectAll() {
  let checkAll = document.getElementsByName("test_name");
  for (var x = 0; x < checkAll.length; x++) {
    checkAll[x].checked = true;
  }
}

function deselectAll() {
  let checkAll = document.getElementsByName("test_name");
  for (var x = 0; x < checkAll.length; x++) {
    checkAll[x].checked = false;
  }
}

function POD_check() {
  let check = document.getElementById("NoPod");
  if (check.checked == true) {
    return "Visual Analysis: Dimensions Height, Width, and Diameter were measured for reference since no POD is available. Terminals are free of deformations, corrosion, and oxidation.";
  } else {
    return "Visual Analysis: Dimensions Height, Width, and Thickness were measured and are within manufacturer's specifications. The parts have the same exterior configuration as the POD.";
  }
}

function checkXray(x) {
  if (x >= 45) {
    return 45;
  } else {
    return x;
  }
}

// function CopyAll(){
//     var x= document.getElementsByClassName('right_container');

//     // x.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(x);

// }

function Copy_area() {
  var x = document.getElementById("text_area").value;

  // x.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(x);
}
