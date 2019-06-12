import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaAboutComponent } from './berita-about.component';

describe('BeritaAboutComponent', () => {
  let component: BeritaAboutComponent;
  let fixture: ComponentFixture<BeritaAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeritaAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeritaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
