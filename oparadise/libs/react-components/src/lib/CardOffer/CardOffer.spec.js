import { render } from '@testing-library/react';
import CardOffer from './CardOffer';
describe('CardOffer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardOffer />);
    expect(baseElement).toBeTruthy();
  });
});
