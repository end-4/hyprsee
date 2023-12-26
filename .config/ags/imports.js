const resource = file => `resource:///com/github/Aylur/ags/${file}.js`;
const require = async file => (await import(resource(file))).default;
const service = async file => (await require(`service/${file}`));

export const App = await require('app');
export const Widget = await require('widget');
export const Service = await require('service');
export const Variable = await require('variable');
export const Utils = await import(resource('utils'));

export const Applications = await service('applications');
export const Hyprland = await service('hyprland');

globalThis['App'] = App; //////////////////////////////
// globalThis['Widget'] = Widget;
// globalThis['Service'] = Service;
// globalThis['Variable'] = Variable;
globalThis['Utils'] = Utils; ///////////////////////////
// globalThis['Applications'] = Applications;
// globalThis['Audio'] = Audio;
// globalThis['Battery'] = Battery;
// globalThis['Bluetooth'] = Bluetooth;
// globalThis['Hyprland'] = Hyprland;
// globalThis['Network'] = Network;
// globalThis['SystemTray'] = SystemTray;


const { exec } = Utils;
export const SCREEN_WIDTH = Number(exec(`bash -c "xrandr --current | grep '*' | uniq | awk '{print $1}' | cut -d 'x' -f1 | head -1" | awk '{print $1}'`));
export const SCREEN_HEIGHT = Number(exec(`bash -c "xrandr --current | grep '*' | uniq | awk '{print $1}' | cut -d 'x' -f2 | head -1" | awk '{print $1}'`));
