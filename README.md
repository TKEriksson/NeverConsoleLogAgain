# Never Console Log Again

Writes out `console.log();` for you with a simple keyboard shortcut.

Tired of typing `console.log()` hundreds of times a day? This extension saves you time and keystrokes by inserting the complete statement with a single keyboard shortcut, positioning your cursor right where you need it.

## Usage

1. Install the extension.
2. Press **Ctrl + Alt + C** (Windows/Linux) or **Cmd + Option + C** (macOS) in the editor.
3. `console.log();` will be inserted, and the cursor will be placed inside the parentheses.

## Customizing the Keybinding

The default keybinding for this extension is **Ctrl + Alt + C** (Windows/Linux) or **Cmd + Option + C** (macOS). If you prefer a different keybinding, you can easily change it by following these steps:

1. Open the **Command Palette** (`Ctrl + Shift + P` or `Cmd + Shift + P` on macOS).
2. Search for **"Preferences: Open Keyboard Shortcuts (JSON)"**.
3. Add the following entry in the `keybindings.json` file:

```json
{
  "key": "ctrl+alt+c",  // Change this to your desired key combination
  "command": "neverconsolelogagain.insertConsoleLog",
  "when": "editorTextFocus"
}
```

## Disable the Extension

To stop using the extension, you can simply **disable** it from the Extensions view (`Ctrl + Shift + X` or `Cmd + Shift + X` on macOS) in VS Code.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**