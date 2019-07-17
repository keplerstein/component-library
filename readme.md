# Reusable components for Keplerstein

Reusable components used in the Keplerstein website projects.

The goal is this repository is an npm installable library. Included in the default Craft CMS install, but can be updated anytime by a simple npm install.

- [Reusable components for Keplerstein](#Reusable-components-for-Keplerstein)
  - [Installation](#Installation)
  - [Base styles](#Base-styles)
  - [Components](#Components)
  - [Coding guidelines](#Coding-guidelines)

## Installation

To add this library to a project, install it by the private Github URL

```
yarn add git+ssh://git@github.com:keplerstein/keplerstein-component-library.git
```

Make sure the domain github.com is added to the list of your well known hosts. Just 'ssh github.com' and answer yes to save it automatically.
[More info](https://stackoverflow.com/questions/13363553/git-error-host-key-verification-failed-when-connecting-to-remote-repository)

Make sure your SSH key is added to Github, and Yarn knows about it. (run cli command ssh-add)

## Base styles

Every project starts with some base styles applied (normalize-scss, reset, breakpoints etc.)

[More info]('./docs/base-styles')

```scss
@import "keplerstein-component-library/scss/base";
```

## Components
* [Button](./docs/button)
* [Padding container](./docs/padding-container)

## Coding guidelines

Blabla