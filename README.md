## Info
- It's just the overview widget from [my dotfiles](https://github.com/end-4/dots-hyprland/tree/illogical-impulse)

## Installation
- Install [AGS](https://github.com/Aylur/ags/wiki/installation) 1.5.0 (or git that's after 1.4.0)
> [!IMPORTANT]
> since ags introduces breaking changes like every week, it is recommended that you install the correct version
> (so you might have to install manually)

- Copy the contents of this repo to home folder
- Run `ags`. You might wanna add it as an exec-once in your Hyprland config.

## Usage
- Run `ags -t overview` using a keybind or something to open the widget
- Drag n' drop to move windows to different workspaces
- Type to search apps
- Type something starting with a number for a quick calculation (use with caution, since it's a JS evaluation)
- Type a command to execute it. If it starts with `sudo`, it'll be launched in foot terminal.

## Please note
- that it likely won't work with multiple monitors
