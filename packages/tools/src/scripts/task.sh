#!/bin/bash

CMD=$1
PROJECT_BIN=../../node_modules/.bin
shift

output() { echo "Running $1 for $(pwd)"; }

case $CMD in
  test)
    output "test"
    if [ -d "./test" ]; then
      exe "../../node_modules/.bin/jest -c $(pwd)/jest.config.js --rootDir ."
    else
      echo "No tests to run"
    fi
    ;;
  prettier)
    output "prettier"
    $PROJECT_BIN/prettier --write $(pwd)/src/**/*.ts
    ;;
  lint-fix)
    output "lint-fix"
    find -E ./src -regex ".*\.(ts|tsx|js|jsx)" | xargs $PROJECT_BIN/eslint -c $(pwd)/.eslintrc.js --fix
    ;;
  lint)
    output "lint"
    find -E ./src -regex ".*\.(ts|tsx|js|jsx)" | xargs $PROJECT_BIN/eslint -c $(pwd)/.eslintrc.js
    ;;

  *)
    if [[ -z "$CMD" ]]; then
      echo "USAGE: ./task (prettier|lint-fix|lint|<node_modules_bin_command>) command_args"
      exit 0
    fi
    $PROJECT_BIN/$CMD $@
    ;;
esac
