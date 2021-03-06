import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorEachComponent } from './author-each.component';

describe('AuthorEachComponent', () => {
  let component: AuthorEachComponent;
  let fixture: ComponentFixture<AuthorEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorEachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
