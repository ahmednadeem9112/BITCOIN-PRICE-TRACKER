const program = require('commander');

program
.command('set').description('Set API Key --Get at https://nomics.com')
.action(() => console.log('Hello from the set'));

program.command('set').description('Show API Key').action(() => console.log('Hello from the set'));

program.command('set').description('show API KEY').action(() =>console.log('Hello from remove') )

program.parse(process.argv);
