const readlineModule = require('readline');

const timer = () => {

  readlineModule.emitKeypressEvents(process.stdin);

  process.stdin.setRawMode(true);

  process.stdin.on('keypress', (character, key) => {

    if (key && key.ctrl && key.name === 'c') {
      console.log(`Thanks for using me, ciao!`);
      process.exit();
    }

    if (key && key.name === 'b') process.stdout.write('\x07');

    const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (const num of number) {
      if (key && key.name === num) {
        console.log(`setting timer for ${num} seconds!`);
        setTimeout(() => {
          process.stdout.write('\x07');
        }, num * 1000);
      }
    }

  });
};

timer();



