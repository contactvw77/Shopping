import { render } from '@testing-library/react';

import TsmUi from './tsm-ui';

describe('TsmUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TsmUi />);
    expect(baseElement).toBeTruthy();
  });
});
