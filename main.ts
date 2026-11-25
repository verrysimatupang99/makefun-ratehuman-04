const LINE = 'Four stars. Points deducted for making me feel something.';

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function main(): void {
  if (hasFlag('--help')) {
    process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
