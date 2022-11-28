const chalk = require('chalk');
const readline = require('readline');
const figlet = require('figlet');

// It really is this much trouble:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter some text: ', function (response) {
    console.log(
        chalk.yellow(
            figlet.textSync(response, {
                font: 'Cricket',
                verticalLayout: 'default',
                horizontalLayout: 'default'
            })
        )
    );
    rl.close();
});

/*

  ___     ___     _______ ___ ___ _______     ______  _______ ______   _______   _______ _______
 |   |   |   |   |   _   |   Y   |   _   |   |   _  \|   _   |   _  \ |   _   | |   _   |   _   |
 |.  |   |.  |   |.  |   |.  |   |.  1___|   |.  |   |.  |   |.  |   \|.  1_____|___|   |   1___|
 |.  |   |.  |___|.  |   |.  |   |.  __)_    |.  |   |.  |   |.  |    |.  __)|__|.  |   |____   |
 |:  |   |:  1   |:  1   |:  1   |:  1   |   |:  |   |:  1   |:  1    |:  1   | |:  1   |:  1   |
 |::.|   |::.. . |::.. . |\:.. ./|::.. . |   |::.|   |::.. . |::.. . /|::.. . | |::.. . |::.. . |
 `---'   `-------`-------' `---' `-------'   `--- ---`-------`------' `-------' `-------`-------'

*/