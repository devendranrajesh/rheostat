import { configure } from '@kadira/storybook';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import '../css/styles.css';
import registerCSSInterfaceWithDefaultTheme from '../scripts/utils/registerCSSInterfaceWithDefaultTheme';


/* Register react with styles interface */
registerCSSInterfaceWithDefaultTheme();

function loadStories() {
  require('../stories/ExampleSlider.jsx');
}

configure(loadStories, module);
