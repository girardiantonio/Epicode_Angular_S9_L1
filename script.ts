const firstNumber = document.getElementById("input1") as HTMLInputElement;
const secondNumber = document.getElementById("input2") as HTMLInputElement;
const formReference = document.getElementById("form") as HTMLFormElement;
const listReference = document.getElementById("list") as HTMLUListElement;

let firstNumberValue: number | undefined;
let secondNumberValue: number | undefined;



formReference.addEventListener("submit", (e) => {
  e.preventDefault();

  let randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  generateListItem(`Il numero random: ${randomNumber}`);

  firstNumberValue = parseFloat(firstNumber.value);
  generateListItem(`Il numero del giocatore 1: ${firstNumberValue}`);

  secondNumberValue = parseFloat(secondNumber.value);
  generateListItem(`Il numero del giocatore 2: ${secondNumberValue}`);

  if (randomNumber === firstNumberValue) {
    generateListItem(`Il giocatore 1 ha indovinato il numero random: ${randomNumber}`);
  } else if (randomNumber === secondNumberValue) {
    generateListItem(`Il giocatore 2 ha indovinato il numero random: ${randomNumber}`);
  } else {
    let n1 = Math.abs(randomNumber - firstNumberValue);
    let n2 = Math.abs(randomNumber - secondNumberValue);

    if (n1 === n2) {
      generateListItem(`La differenza del giocatore 1: ${n1}`);
      generateListItem(`La differenza del giocatore 2: ${n2}`);
      generateListItem(
        `Nessuno dei giocatori ha indovinato il numero, ma i due giocatori hanno dato lo stesso numero e si sono avvicinati entrambi al numero random: ${randomNumber}`
      );
    } else if (n1 < n2) {
      generateListItem(`La differenza del giocatore 1: ${n1}`);
      generateListItem(`La differenza del giocatore 2: ${n2}`);
      generateListItem(
        `Nessuno dei giocatori ha indovinato il numero, ma il giocatore 1 si è avvicinato di più al numero random: ${randomNumber}`
      );
    } else {
      generateListItem(`La differenza del giocatore 1: ${n1}`);
      generateListItem(`La differenza del giocatore 2: ${n2}`);
      generateListItem(
        `Nessuno dei giocatori ha indovinato il numero, ma il giocatore 2 si è avvicinato di più al numero random: ${randomNumber}`
      );
    }
  }
});

function generateListItem(text: string) {
  const listItem = document.createElement("li");
  listItem.textContent = text;
  listReference.appendChild(listItem);
}
