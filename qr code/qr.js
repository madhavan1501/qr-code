const url = document.querySelector("#url");
const color = document.querySelector("#color");
const downloadbtn = document.querySelector(".download");
const loader = document.querySelector(".load");
const form = document.querySelector(".box");
const qr = document.querySelector(".qr");

form.addEventListener("submit", submit);

function submit(x) {
  x.preventDefault();
  loader.style.display = "grid";
  setTimeout(() => {
    loader.style.display = "none";
    qr.innerHTML = "";
    var qrcode = new QRCode(qr, {
      text: url.value,
      width: 220,
      height: 220,
      colorDark: color.value,
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
    console.log(qr);
  }, 1000);
}

downloadbtn.addEventListener("click", download_qr);

function download_qr() {
  if (qr.hasChildNodes()) {
    const con = confirm("Confirm to Downlord");
    if (con) {
      const src = qr.lastElementChild.src;
      downloadbtn.setAttribute("href", src);
      downloadbtn.download = "qr";
    }
  } else alert("There is no QR to downlord");
}
