import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const LIGHT_STATES = {
  STOP: 'red',
  READY: 'yellow',
  GO: 'green'
};

@Injectable()
export class TrafficLightService {
  private _lightState = new BehaviorSubject<string>(LIGHT_STATES.GO);
  private _timer;
  private _timerDuration;
  public lightState = this._lightState.asObservable();
  constructor(private ngZone: NgZone) {
    this.resetSignalToAuto();
  }

  /**
   * @author Ahsan Ayaz
   * The function sends back the observable to which components can subscribe to for any state changes
   */
  public getState() {
    //  we're returning an observable rather than the subject to avoid clustering with inputs :)
    return this.lightState;
  }

  /**
   * @author Ahsan Ayaz
   * The function sets the state of the signal and stops the auto timer
   * @param state {string} value of state as string
   */
  public setState(state: string = LIGHT_STATES.STOP) {
    this._lightState.next(state);
    clearTimeout(this._timer);
  }

  /**
   * @author Ahsan Ayaz
   * Resets the signal to use auto state changer. It changes the state on particular hardcoded durations
   * for now. Simulates how signals actually work
   */
  public resetSignalToAuto() {
    if (this._timer) {
      clearTimeout(this._timer);
    }
    this._changeStateAuto();
  }

  /**
   * @author Ahsan Ayaz
   * This function triggers the automatic handling of the signals.
   * The signal's statge is changed with particular durations based on previous state
   */
  private _changeStateAuto() {
    let nextActionDuration;
    switch (this._lightState.getValue()) {
      case LIGHT_STATES.STOP:
        this._lightState.next(LIGHT_STATES.READY);
        nextActionDuration = 3000;
        break;
      case LIGHT_STATES.READY:
        this._lightState.next(LIGHT_STATES.GO);
        nextActionDuration = 5000;
        break;
      case LIGHT_STATES.GO:
        this._lightState.next(LIGHT_STATES.STOP);
        nextActionDuration = 5000;
        break;
    }

    /**
     * The below code shows how we can run timeouts outside angular.
     * This is because on each timeout it would trigger change detection. But we
     * don't want that. We want it to change detect when the state changes. So we run that code
     * inside the this.ngZone.run() method.
     * One more reason to do so is while e2e tests, protractor would wait for all async operations
     * to complete before going forward. Which stops the tests.
     */
    this.ngZone.runOutsideAngular(() => {
      this._timer = setTimeout(() => {
        this.ngZone.run(() => {
          this._changeStateAuto();
        });
      }, nextActionDuration);
    });
  }

}
