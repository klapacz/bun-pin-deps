import { parseModule, generateCode } from "magicast";

type Deps = Record<string, string>;

export function pinDeps({ code: rawCode, deps }: { code: string; deps: Deps }) {
  const mod = parseModule(rawCode);

  for (const key in mod.imports) {
    const value = mod.imports[key];
    if (!Object.keys(deps).includes(value.from)) {
      continue;
    }

    value.from = `${value.from}@${deps[value.from as keyof typeof deps]}`;
  }

  const { code } = generateCode(mod);
  return code;
}
