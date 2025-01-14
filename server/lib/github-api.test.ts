/** @jest-environment setup-polly-jest/jest-environment-node */
import autoSetupPolly from "../utils/auto-setup-polly";
import { getUser, getRepo, getUserRepos } from "./github-api";

// let context: ReturnType<typeof autoSetupPolly>;

beforeAll(() => {
  autoSetupPolly();
});

test("getUser", async () => {
  const user = await getUser("justsml");
  expect(typeof user).toBe("object");
  expect(user?.login).toBe("justsml");
});

test("getRepo", async () => {
  const repo = await getRepo("justsml", "dans-blog");
  expect(typeof repo).toBe("object");
  expect((repo as any)?.name).toBe("dans-blog");
  expect((repo as any)?.owner?.login).toBe("justsml");
});

test("getUserRepos", async () => {
  const repos = await getUserRepos("justsml");
  expect(typeof repos).toBe("object");
  expect(repos.length).toBeGreaterThanOrEqual(10);
});
