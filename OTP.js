function Generate() {
  let num = "1234567890";
  let OTP1 = "";
  let OTP2 = "";
  let OTP3 = "";
  let OTP4 = "";

  for (let i = 0; i < 4; i++) {
    OTP1 = num[Math.floor(Math.random() * 10)];
  }
  document.getElementById("otp1").innerHTML = OTP1;

  for (let i = 0; i < 4; i++) {
    OTP2 = num[Math.floor(Math.random() * 10)];
  }
  document.getElementById("otp2").innerHTML = OTP2;

  for (let i = 0; i < 4; i++) {
    OTP3 = num[Math.floor(Math.random() * 10)];
  }
  document.getElementById("otp3").innerHTML = OTP3;

  for (let i = 0; i < 4; i++) {
    OTP4 = num[Math.floor(Math.random() * 10)];
  }
  document.getElementById("otp4").innerHTML = OTP4;
}
Generate();
