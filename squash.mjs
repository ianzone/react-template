import { $ } from 'zx';

const currentBranch = (await $`git branch --show-current`).stdout.trim();

const forkBranch = currentBranch === 'main' ? 'origin/main' : 'main';

const forkPoint = (await $`git merge-base --fork-point ${forkBranch}`).stdout.trim();

await $`git reset --soft ${forkPoint}`;
