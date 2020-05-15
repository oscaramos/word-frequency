import text2tables from "./text2tables";

const expectTable = (text, table) => {
  expect(text2tables(text)).toEqual(table);
};

it('when undefined and null then empty table', () => {
  expectTable(undefined, {});
});

it('when single word then single row', () => {
  expectTable("hello", { hello: 1 });
  expectTable("world", { world: 1 });
});

it('when multiple words then multiple rows', () => {
  expectTable("hello world", { hello: 1, world: 1 });
  expectTable("hello hello", { hello: 2 });
  expectTable("world world world", { world: 3 });
  expectTable("its to be or not to be", { its: 1, to: 2, be: 2, or: 1, not: 1});
});