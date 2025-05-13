const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('neverconsolelogagain.insertConsoleLog', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection); // Get the selected text

            if (selectedText) {
                // Wrap selected text with console.log()
                editor.edit(editBuilder => {
                    // Insert 'console.log(' before the selection
                    editBuilder.insert(selection.start, 'console.log(');
                    // Insert ')' after the selected text
                    editBuilder.insert(selection.end, ');');
                });
            } else {
                // If no text is selected, insert 'console.log()' at the cursor position
                const position = editor.selection.active;  // Get current cursor position
                editor.edit(editBuilder => {
                    // Insert 'console.log()' at the cursor position
                    editBuilder.insert(position, 'console.log();');
                }).then(() => {
                    // Move cursor inside the parentheses
                    const newPosition = position.translate(0, 12); // Move the cursor 12 characters forward (after 'console.log()')
                    editor.selection = new vscode.Selection(newPosition, newPosition);
                    editor.revealRange(editor.selection);
                });
            }
        }
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
