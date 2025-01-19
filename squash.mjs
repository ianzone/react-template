import { $ } from 'zx';

const currentBranch = (await $`git branch --show-current`).stdout.trim();

if (currentBranch !== 'main') {
  const forkPoint = (await $`git merge-base --fork-point main`).stdout.trim();
  await $`git reset --soft ${forkPoint}`;
}
