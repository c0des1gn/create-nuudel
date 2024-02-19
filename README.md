# Create Nuudel

create nuudel app

## Use

```bash
npx create-nuudel <name>
```

```bash
yarn create nuudel <name>
```

## Template string reference

> remove this before publishing your package!

- {{name}} => create-nuudel

See https://github.com/uetchy/create-create-app#template for the further details.

# git submodules

git submodule add https://github.com/c0des1gn/nuudel.git templates/default
git submodule update --remote templates/default
rm -rf .git/modules/templates/default
npm publish
