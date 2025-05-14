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

    // Another for strings.
    let disposable2 = vscode.commands.registerCommand("neverconsolelogagain.insertConsoleLogCodeStr", function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);

            if (selectedText) {
                
                editor.edit(editBuilder => {
                    
                    editBuilder.insert(selection.start, 'console.log("');
                    
                    editBuilder.insert(selection.end, '");');
                });
            } else {
                
                const position = editor.selection.active; 
                editor.edit(editBuilder => {
                    
                    editBuilder.insert(position, 'console.log("");');
                }).then(() => {
                    
                    const newPosition = position.translate(0, 13); 
                    editor.selection = new vscode.Selection(newPosition, newPosition);
                    editor.revealRange(editor.selection);
                });
            }
        }
    });
    context.subscriptions.push(disposable2);

    
    // Another for strings with backtick.
    let disposable3 = vscode.commands.registerCommand("neverconsolelogagain.insertConsoleLogCodeBTStr", function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const selectedText = editor.document.getText(selection);

            if (selectedText) {
                
                editor.edit(editBuilder => {
                    
                    editBuilder.insert(selection.start, 'console.log(`');
                    
                    editBuilder.insert(selection.end, '`);');

                    
                });
            } else {
                
                const position = editor.selection.active; 
                editor.edit(editBuilder => {
                    
                    editBuilder.insert(position, 'console.log(``);');
                }).then(() => {
                    
                    const newPosition = position.translate(0, 13); 
                    editor.selection = new vscode.Selection(newPosition, newPosition);
                    editor.revealRange(editor.selection);
                });
            }
        }
    });
    context.subscriptions.push(disposable3);

    

}

exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;