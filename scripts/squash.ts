import { run } from '@es-proj/utils/bun';

const currentBranch = (await run('git branch --show-current')).stdout;

const forkBranch = currentBranch === 'main' ? 'origin/main' : 'main';

const forkPoint = (await run(`git merge-base --fork-point ${forkBranch}`)).stdout;

await run(`git reset --soft ${forkPoint}`);
