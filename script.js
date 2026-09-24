const name = document.querySelector(".perfil");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");

const warn = document.querySelector(".warn_message");

const form = document.querySelector(".form");

const messageAlert = (message) => {
  warn.innerHTML = `${message}`;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(name);

  if (!name.value && !height.value && !weight.value) {
    messageAlert("Digite nos campos acima");
    return;
  }

  if (isNaN(height.value) || isNaN(weight.value)) {
    messageAlert("Tem digitar numeros");

    return;
  }

  const heightNum = parseFloat(height.value.replace(".", "")).toFixed(3) / 100;

  const weightNum = parseFloat(weight.value);

  const imcCalc = +weightNum / (heightNum * heightNum).toFixed(2);

  const resultImc = Math.floor(imcCalc).toFixed(2);

  if (resultImc < 18.5) {
    messageAlert(
      `${name.value}, seu imc é ${resultImc}<br> Abaixo do Peso <br> Precisa comer mais filho`,
    );
  } else if (resultImc >= 18.5 && resultImc <= 24.9) {
    messageAlert(
      `${name.value}, seu imc é ${resultImc}<br> Peso normal <br> Parabens, você esta no caminho certo`,
    );
  } else if (resultImc >= 25.0 && resultImc <= 29.9) {
    messageAlert(
      `${name.value}, seu imc é ${resultImc}<br> Sobre Peso <br> Cuidado, procure emagrecer senão na quiser ver o céu cedo`,
    );
  } else if (resultImc >= 30.0 && resultImc <= 34.9) {
    messageAlert(
      `${name.value}, seu imc é ${resultImc}<br> Obsidade Grau | <br> Minha calça jeans favorita está operando hoje em regime de milagre. `,
    );
  } else if (resultImc >= 35.0 && resultImc <= 39.9) {
    messageAlert(
      `${name.value}, seu imc é ${resultImc}<br> Obsidade Grau || <br> O único exercício que faço com frequência é o levantamento de garfo com carga pesada.`,
    );
  } else if (resultImc >= 40.0) {
    messageAlert(
      `${name.value}, seu imc é ${resultImc} <br>Obsidade Grau ||| <br> Cuidado, você esta prestes a morrer`,
    );
  }
});
