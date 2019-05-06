import React from 'react';
import { render } from 'react-testing-library';
import ReactTinymce from '../src/main';

describe('Basic Test', () => {
  it('renders to document', () => {
    const { container } = render(<ReactTinymce />);
    const cnt = container.querySelector('.react-tinymce')
      .innerHTML;
    expect(cnt).toMatch(/Hello React/);
  });
});
