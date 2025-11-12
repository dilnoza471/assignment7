import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },

  // Map TypeScript path aliases (like '@/...') to the src folder for Jest
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Helpful extensions for Jest to look for
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
