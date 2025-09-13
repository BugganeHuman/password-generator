// надо что бы при нажатие на generate генерировал
// случайный текст из того на что кликнул юзер
//  длинны num_of_char
// (и вставлял его в password)
let copy = document.getElementById("copy");
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Заглавные буквы
const lowerChars = "abcdefghijklmnopqrstuvwxyz"; // Строчные буквы
const numbersChars = "0123456789"; // Цифры
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
let password = document.getElementById("password");
const generate = document.getElementById("generate");
let num_of_char = document.getElementById("num_of_char");
generate.addEventListener("click", (event) => {
  const upper_case = document.getElementById("upper_case").checked;
  const lower_case = document.getElementById("lower_case").checked;
  const numbers = document.getElementById("numbers").checked;
  const special = document.getElementById("special").checked;
  const length = parseInt(num_of_char.value);
  //
  if (length <= 0 || (!upper_case && !lower_case && !numbers && !special)) {
    password.textContent = "choose at least one option";
    return;
  }
  let result = "";
  if (upper_case) result += upperChars;
  if (lower_case) result += lowerChars;
  if (numbers) result += numbersChars;
  if (special) result += symbolChars;
  if (
    upper_case == false &&
    lower_case == false &&
    numbers == false &&
    special == false
  ) {
    password.textContent = "choose at least one option";
  }
  let pas = "";
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < length; i++) {
    pas += result[array[i] % result.length];
  }
  password.textContent = pas;
  copy.textContent = "copy";
});
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(password.textContent);
  copy.textContent = "copied";
});
