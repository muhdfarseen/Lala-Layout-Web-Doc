const ts = require('typescript');
const schema = ts.optionDeclarations.find(o => o.name === 'ignoreDeprecations');
console.log(schema.type);
