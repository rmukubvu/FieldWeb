import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysUsersComponent } from './sys-users.component';

describe('SysUsersComponent', () => {
  let component: SysUsersComponent;
  let fixture: ComponentFixture<SysUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
