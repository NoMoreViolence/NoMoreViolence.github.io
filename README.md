# NoMoreViolence.github.io

This is the source code for the NoMoreViolence website.

## Development

- For vscode users, configure the following settings in your workspace settings:

```json
{
  "search.exclude": {
    "**/.yarn": true,
    "**/.pnp.*": true
  },
  "typescript.tsdk": ".yarn/sdks/typescript/lib",
  "eslint.nodePath": ".yarn/sdks",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  "[javascript]": {
    "editor.formatOnSave": false
  }
}
```
