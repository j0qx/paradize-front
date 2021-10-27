import { render } from '@testing-library/react';
import SearchDataSettings from './SearchDataSettings';
describe('SearchDataSettings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchDataSettings />);
    expect(baseElement).toBeTruthy();
  });
});
