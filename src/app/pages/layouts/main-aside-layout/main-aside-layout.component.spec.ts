import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAsideLayoutComponent } from './main-aside-layout.component';

describe('MainAsideLayoutComponent', () => {
  let component: MainAsideLayoutComponent;
  let fixture: ComponentFixture<MainAsideLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAsideLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAsideLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
