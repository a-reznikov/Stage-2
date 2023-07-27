export default function activeAnimation(id: number, time: number): NodeJS.Timer | boolean {
  const carIco: HTMLElement | null = document.getElementById(`${id}`);
  const stepSeconds: number = time / 100;

  if (carIco) {
    const progress: HTMLElement | null = carIco.closest('.progress');
    if (progress) {
      let position: number = 0;
      const IntervalId = setInterval(() => {
        const length: number = progress.clientWidth;
        const stepPx: number = length / 100;
        position += stepPx;
        carIco.style.transform = `translateX(${position}px)`;
        if (position > length) {
          clearInterval(IntervalId);
        }
      }, stepSeconds);
      return IntervalId;
    }
  }

  return false;
}
