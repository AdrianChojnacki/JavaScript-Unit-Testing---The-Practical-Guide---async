import { expect, it } from "vitest";
import { generateToken } from "./async-example";

it("should generate a token value", () => {
  const testUserEmail = "test@test.pl";

  generateToken(testUserEmail, (err, token) => {
    // expect(token).toBeDefined();
    expect(token).toBe(2);
  });
});
