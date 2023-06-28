export default function writeAnswer(): void {
  const input: HTMLInputElement | null = document.querySelector('.form__input');
  const text: string = 'answer';
  const { length } = text;
  const speedWrite: number = 500;
  let step: number = 0;
  const increment: number = 1;
  const interval: NodeJS.Timer = setInterval(function IntervalAnsver() {
    if (step === length) {
      clearInterval(interval);
    }
    if (input) input.value = text.slice(0, step);
    step += increment;
  }, speedWrite);
}
