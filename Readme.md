# Device Perf Check  [![NPM version](https://img.shields.io/npm/v/device-perf-check)](https://www.npmjs.com/package/device-perf-check)


The goal of the library is to determine client's device performance in a naive way by running CPU heavy loop using webworker for the sake of main thread. 

Resulted number can then be categorized relatively to the results you get across your clients devices.

## Usage

```javascript
import { measure } from 'device-perf-check';

try {
  const score = await measure(); // something bigger or equal 0
} catch (err) {
  // probably Worker, Blob or Promise not supported
}
```

or with multiple probes:

```javascript
import { measure } from 'device-perf-check';

await Promise.all([...Array(10)].map(() => measure()))
// example output: [21, 30, 26, 19, 22, 19, 32, 18, 22, 25]
```
