import { render } from '@testing-library/react';

import $Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <$Button label={'Custom Button'} color={'primary'} />
    );
    expect(baseElement).toBeTruthy();
  });
});
