import React from 'react';
import { render } from '@testing-library/react';

import Layout from '../Layout';

// @ts-ignore
test('Basic unit test', () => {
    const { getByText } = render(<Layout>test</Layout>, {});
    expect(getByText('test')).toBeVisible();
});
