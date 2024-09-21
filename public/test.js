const myPck = 'MineSweeper.pck';
const engine = new Engine();

(() => {
  // const canvas = document.getElementById('gameCanvas');
  console.log(engine);
  Promise.all([engine.init('MineSweeper'), engine.preloadFile(myPck)])
    .then(() => {
      return engine.start({ args: ['--main-pack', myPck] });
    })
    .then(() => {
      console.log('Engine has started');
    });
})();
