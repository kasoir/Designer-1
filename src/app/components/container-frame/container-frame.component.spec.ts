import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFrameComponent } from './container-frame.component';

describe('ContainerFrameComponent', () => {
  let component: ContainerFrameComponent;
  let fixture: ComponentFixture<ContainerFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
