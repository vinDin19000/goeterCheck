# Goeter-Check

Goeter-Check is a simple tool to check Markdown parsing using the goeter package.

## Installation

To install Goeter-Check, you can use npm:

```
npm install goeter-check
```

## Usage

```javascript
const goeterCheck = require('goeter-check');

const markdown = `
# Heading 1
## Heading 2
### Heading 3

* List item 1
* List item 2

Paragraph text.
`;

goeterCheck(markdown);
```

This will parse the Markdown input using the goeter package and log the corresponding HTML to the console.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
