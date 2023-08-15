export default function generateRandomNumbers() {
  let numbers = [];
  while (numbers.length < 8) {
    let randomNumber = Math.floor(Math.random() * 20) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}
