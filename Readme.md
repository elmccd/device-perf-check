# Device Perf Check

The goal of this library is to determine client's device performance in a naive way by running CPU heavy loop using webworker for the sake of main thread. 

Given number can then be categorized relatively to the results you get across your clients devices.

## Usage

```javascript
import { measure } from 'device-perf-check';

try {
  const score = await measure();
} catch (err) {
  // probably Worker, Blob or Promise not supported
}
```

or with multiple probes:

```javascript
import { measure } from 'device-perf-check';

await Promise.all([...Array(10)].map(() => measure()))
```
