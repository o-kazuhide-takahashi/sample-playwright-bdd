/** Generated from: tests/bdd/features/sample.feature */
import { test } from "playwright-bdd";

test.describe("PL-BDD動作テスト", () => {

  test("Google表示", { tag: ["@sample"] }, async ({ Given, page, And }) => {
    await Given("Googleを表示する", {"docString":{"content":"Given の\n===============\n長いコメント"}}, { page });
    await And("タイトル \"Google\"", {"docString":{"content":"And (*) の\n===============\n長いコメント"}}, { page });
  });

  test("Yahoo表示", { tag: ["@sample"] }, async ({ Given, page, And }) => {
    await Given("URL表示 \"https://www.yahoo.co.jp/\"", null, { page });
    await And("タイトル \"Yahoo! JAPAN\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests/bdd/features/sample.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Google表示": {"pickleLocation":"9:3","tags":["@sample"],"ownTags":["@sample"]},
  "Yahoo表示": {"pickleLocation":"30:3","tags":["@sample"],"ownTags":["@sample"]},
};