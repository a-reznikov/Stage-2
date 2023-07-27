export default function resetPosition(id: number): void {
  const carIco: HTMLElement | null = document.getElementById(`${id}`);

  if (carIco) {
    carIco.style.transform = `translateX(0px)`;
  }
}
