import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammeDetailComponent } from './gamme-detail.component';

describe('GammeDetailComponent', () => {
  let component: GammeDetailComponent;
  let fixture: ComponentFixture<GammeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
