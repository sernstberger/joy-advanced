import { render } from '@testing-library/react';

import ListingItem from './ListingItem';

describe('ListingItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListingItem />);
    expect(baseElement).toBeTruthy();
  });
});
