
export default {
  "**/*.ts?(x)": [
    "prettier --write",
    () => "tsc -p tsconfig.json --noEmit",
    "eslint . --fix",
  ]
};
