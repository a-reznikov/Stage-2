import { deleteCar, selectTrack, startDrive, stopDrive, unselectTrack } from './eventer';
import { getCarId, getTrack } from './getter';

export default function eventTrack(target: HTMLElement, id?: number): void {
  const isRemoveButton: boolean = target.classList.contains('settings__buttons_remove');
  const isSelectButton: boolean = target.classList.contains('settings__buttons_select');
  const isStartButton: boolean = target.classList.contains('engine-control__buttons_start');
  const isStopButton: boolean = target.classList.contains('engine-control__buttons_stop');
  if (isRemoveButton) {
    deleteCar(getCarId(target));
    getTrack(target)?.remove();
  }
  if (isSelectButton) {
    const track: HTMLElement | null = getTrack(target);
    if (track && id) selectTrack(track, id);
  } else {
    unselectTrack();
  }
  if (isStartButton) {
    startDrive(getCarId(target));
  }
  if (isStopButton) {
    stopDrive(getCarId(target));
  }
}
