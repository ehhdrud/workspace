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
    break; //같은 결과값이므로 break는 여기에만 써줬음 > 라인도 짧아지고 변경시에도 용이함
  default:
    msg = "Unsupported browser!";
}

console.log(msg);
