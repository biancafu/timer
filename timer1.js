
console.log( process.argv);
for (let i = 2; i < process.argv.length; i++) {
  const time = Number(process.argv[i]);
  if(isNaN(time)|| time < 0) continue;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time*1000);
}
