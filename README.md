# Never Console Log Again

## Overview
"Never Console Log Again" is a Visual Studio Code extension that allows you to quickly insert `console.log();` statements with keyboard shortcuts.

## Features
- Automatically wraps selected text with `console.log( ... );`
- If no text is selected, inserts a `console.log();` statement at the cursor position and places the cursor inside the parentheses.

## Usage

### Command

### 💡 Console Log Shortcuts

Quickly insert different `console.log` variations using keyboard shortcuts:

| Shortcut (Windows/Linux) | Shortcut (macOS)       | Output                      | Description                              |
|--------------------------|------------------------|-----------------------------|------------------------------------------|
| `Ctrl + Alt + C`         | `Cmd + Option + C`     | `console.log(...)`          | Basic `console.log`                      |
| `Shift + Alt + C`        | `Shift + Option + C`   | `console("...")`            | Quick string logging                     |
| `Ctrl + Shift + Alt + C` | `Cmd + Shift + Option + C` | ``console.log(`...`)`` | Template literal logging with backticks |




## Contributing
Feel free to submit issues or pull requests on the [GitHub repository](https://github.com/TKEriksson/neverconsolelogagain).

## License
This extension is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for more information.