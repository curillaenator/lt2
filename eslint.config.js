import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierCfg from "eslint-config-prettier";
import airbnbCfg from "eslint-config-airbnb";

import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      airbnbCfg,
      prettierCfg, // Добавляем конфигурацию Prettier
    ],

    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    plugins: {
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
      react: pluginReact, // Плагин для React
      prettier: pluginPrettier,
      "jsx-a11y": pluginJsxA11y, // Плагин для проверки доступности
    },

    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off", // React 17+ не требует импорта React
      "react/prop-types": "off", // Если вы не используете PropTypes
      "jsx-a11y/anchor-is-valid": "warn", // Предупреждение о некорректных ссылках
      "prettier/prettier": "error", // Используем Prettier для форматирования
    },
  }
);
