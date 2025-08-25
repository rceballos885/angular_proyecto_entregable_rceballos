import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessguardGuard } from './accessguard-guard';

describe('accessguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
