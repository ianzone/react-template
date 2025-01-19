import { describe, test } from 'vitest';

// 此测试套件的报告中将显示一个条目
describe.todo('unimplemented suite');

// 此测试的报告中将显示一个条目
describe('suite', () => {
  test.todo('unimplemented test');
});
