export default function setHover(event: MouseEvent): void {
  event.stopPropagation();
  const target: HTMLElement = <HTMLElement>event.target;
  const targetRelated: HTMLElement = <HTMLElement>event.relatedTarget;
  const table: HTMLElement | null = document.querySelector('.table__top');
  if (target && table?.contains(target) && target !== table) {
    target.classList.add('hovered');
  }
  if (targetRelated) {
    targetRelated.classList.remove('hovered');
  }
}
