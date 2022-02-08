#!/usr/bin/env node

import { create } from "create-create-app";
import { resolve } from "path";
import { stripIndents } from "common-tags";

const templateRoot = resolve(__dirname, "..", "templates");

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("create-nuudel", {
  templateRoot,
  promptForTemplate: false,
  modifyName: (name) => {
    const regexDashCase = /^[a-zA-Z]+(-[a-zA-Z]+)*$/;

    if (!regexDashCase.test(name)) {
      throw new Error("Project name must be dash-cased. For example my-app");
    }

    if (!name.includes("-")) {
      console.log(stripIndents`
              NOTE: Because your project name is not dash-case,
          `);
      return `${name}`;
    }

    return name;
  },
  /*
  extra: {
    architecture: {
      type: 'list',
      describe: 'choose your fave os',
      choices: ['macOS', 'Windows', 'Linux'],
      prompt: 'if-no-arg',
    },
  }, // */
  after: ({ name, answers }) => console.log(`Your project: ${name}.`),
  caveat: ({ name }) => stripIndents`
      Successfully created your Nuudel project!
      Now run:
      cd ${name}
      yarn
  `,
});
