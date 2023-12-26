"strict mode";
// Import
import { App, Utils } from './imports.js';
// Widgets
import Overview from './overview/main.js';

// SCSS compilation
Utils.exec(`sassc ${App.configDir}/scss/main.scss ${App.configDir}/style.css`);
App.resetCss();
App.applyCss(`${App.configDir}/style.css`);

// Config object
export default {
    css: `${App.configDir}/style.css`,
    stackTraceOnError: true,
    windows: [
        Overview(),
    ],
};
