// Import
import { App, Utils } from './imports.js';
// Windows
import Overview from './overview/main.js';

const CLOSE_ANIM_TIME = 150;

// Init cache
Utils.exec(`bash -c 'mkdir -p ~/.cache/ags/user'`);

// SCSS compilation
Utils.exec(`sassc ${App.configDir}/scss/main.scss ${App.configDir}/style.css`);
App.resetCss();
App.applyCss(`${App.configDir}/style.css`);

// Config object
export default {
    style: `${App.configDir}/style.css`,
    stackTraceOnError: true,
    windows: [
        Overview(),
    ],
};
