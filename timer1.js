const cli = process.argv.slice(2);

const timer = (time) => {
  for (const value of time) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`BEEP after ${value} seconds!`);
    }, value * 1000);
  }
};

timer(cli);