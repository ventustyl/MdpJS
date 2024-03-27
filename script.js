const dataLowerCase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!@#$%^&*()_+";
const rangeValue = document.getElementById("rangeValue");
const mdp = document.getElementById("password");

console.log(mdp.value);

const generatePassword = () => {
  let data = [];

  if (lowerCase.checked) {
    data.push(...dataLowerCase);
  }
  if (upperCase.checked) {
    data.push(...dataUppercase);
  }
  if (numbers.checked) {
    data.push(...dataNumbers);
  }
  if (symbols.checked) {
    data.push(...dataSymbols);
  }
  if (data.length === 0) {
    mdp.value = "Veuillez sélectionner des critères";
    return;
  }
  let password = "";
  for (let i = 0; i < rangeValue.value; i++) {
    password = password + data[Math.floor(Math.random() * data.length)];
  }
  mdp.value = password;
};

generate.addEventListener("click", generatePassword);

mdp.addEventListener("click", () => {
  if (mdp.value != "") {
    navigator.clipboard.writeText(mdp.value);
    const copy = document.querySelector("h2");
    copy.classList.add("copy");
    setInterval(() => {
      copy.classList.remove("copy");
    }, 3000);
  }
});
