let browser = "Firefox";

switch (browser) {
  case "Explorer":
    msg = "ActiveX installation required";
    break;
  case "Crome":
  case "Firefox":
  case "Safari":
  case "Opera":
    msg = "Supported browser!";
    break;
  default:
    msg = "Unsupported browser!";
}

console.log(msg);
