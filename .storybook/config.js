import { addDecorator, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

const req = require.context('../src/components', true, /[^/]+\/stories.js$/);

function loadStories() {
	req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

addDecorator(withA11y);
