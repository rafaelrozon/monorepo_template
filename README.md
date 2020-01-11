# Monorepo Template

Playground and reference for implementing monorepos in Typescript for web projects.

Structure:

```
|-- monorepo_template
    |-- packages
        |-- api
        |-- core
        |-- db
        |-- style-dictionary
        |-- tools
        |-- ui
        |-- web
```

### Important
- I assume the whole stack is in Typescript
- No implementations provided for api, db, ui, and web. Just the bare minimum to ensure configuration is working

Features:

- [X] Typescript
- [X] Commitizen
- [X] Style Dictionary
- [X] ESLINT
- [X] Prettier
- [X] .env files loader
- [ ] JEST
- [X] Shared config across projects
- [X] Run same command across projects

### UI Project
- [X] Storybook

### TODO

- [] Make sure that projects can import code from core
- [] Add examples