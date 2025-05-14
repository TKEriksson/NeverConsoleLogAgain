const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('neverconsolelogagain.insertConsoleLogCode', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);

            if (selectedText) {
                
                editor.edit(editBuilder => {
                    
                    editBuilder.insert(selection.start, 'console.log(');
                    
                    editBuilder.insert(selection.end, ');');
                });
            } else {
                
                const position = editor.selection.active; 
                editor.edit(editBuilder => {
                    
                    editBuilder.insert(position, 'console.log();');
                }).then(() => {
                    
                    const newPosition = position.translate(0, 12); 
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