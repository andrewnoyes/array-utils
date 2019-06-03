# array-utils
Few random array utils

## Installation
```sh
// npm
npm install @andrewnoyes/array-utils --save

// yarn
yarn add @andrewnoyes/array-utils
```

## Usage
```TypeScript
import { immutablePop, immutablePush, reorder } from '@andrewnoyes/array-utils';

// pop
const popResult = immutablePop([1, 2, 3]); // [1, 2]

// push
const pushResult = immutablePush([1, 2, 3], 4); // [1, 2, 3, 4]

// reorder
const reorderResult = reorder([1, 2, 3], 0, 2); // [2, 3, 1]
```
