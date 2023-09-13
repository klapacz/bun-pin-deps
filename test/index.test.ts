import { describe, it, expect } from "bun:test";
import { pinDeps } from "../src";

describe("should", () => {
  it("pin external dependency", () => {
    const input = `import { z } from "zod"; const number = z.number().parse(1);`;
    const output = pinDeps({ code: input, deps: { zod: "^3.21.4" } });

    expect(output).toMatchSnapshot();
  });
});
