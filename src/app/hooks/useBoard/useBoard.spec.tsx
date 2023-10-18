import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useBoard from './useBoard';

describe('useBoard', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useBoard());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
