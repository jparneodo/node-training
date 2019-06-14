# Save your changes

## Export / Import VSCode extensions via shell

```bash
# List all installed extensions
$ code --list-extensions > .vscode.list-extensions
code --list-extensions | xargs -L 1 echo code --install-extension > /tmp/vscode.extension.txt
# Install extensions
source /tmp/vscode.extension.txt
```

## In vscode, in Extensions view (Ctrl-Shif-X) :

- enter `@recommended` (Show Recommended Extensions)
- Install one by one

The recommendatations are in `.vscode/extensions.json` file

## Using `Shan.code-settings-sync` extension and Github Gist

You need to read the documentation for that.
