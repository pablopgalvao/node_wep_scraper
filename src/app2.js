var psl = require('psl');

// TLD with some 2-level rules.
psl.get('uk.com'); // null);
psl.get('example.uk.com'); // 'example.uk.com');
const page = psl.get('budweiser.com/pt-br/fwc22'); // 'example.uk.com');

console.log(page)