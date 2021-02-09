import { TestBed } from '@angular/core/testing';

import { FbcloneGuard } from './fbclone.guard';

describe('FbcloneGuard', () => {
  let guard: FbcloneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FbcloneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
