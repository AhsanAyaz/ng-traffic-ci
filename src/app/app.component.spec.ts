import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TrafficLightService } from './traffic-light.service';

let fixture, component;

describe('AppComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [ TrafficLightService ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));
  it('should create the app', (() => {
    expect(component).toBeTruthy();
  }));
  it(`should have title property set`, (() => {
    expect(component.title).toEqual('Traffic Signal App');
  }));
  it('should have red state on calling stop()', (() => {
    component.stop();
    fixture.detectChanges();
    expect(component.trafficLightState).toEqual('red');
  }));
  it('should have yellow state on calling ready()', (() => {
    component.ready();
    fixture.detectChanges();
    expect(component.trafficLightState).toEqual('yellow');
  }));
  it('should have green state on calling go()', (() => {
    component.go();
    fixture.detectChanges();
    expect(component.trafficLightState).toEqual('green');
  }));
  it('should render title in a h3 tag', (() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(component.title);
  }));
});
