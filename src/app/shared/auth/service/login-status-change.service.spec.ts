import { TestBed } from '@angular/core/testing';

import { LoginStatusChangeService } from './login-status-change.service';

describe('LoginStatusChangeService', () => {
  let service: LoginStatusChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginStatusChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
