# ts-tinyenv

Make using `process.env` in typescript super simple. (See [here](https://stackoverflow.com/questions/45194598/using-process-env-in-typescript) for motivation.)

The package has one function, which is only 5 lines of code so easily audited.

The function (`env`) takes the name of a `process.env` environment variable and
returns it as a string. If the env var is missing, an `Error` is thrown.

It lets you write simple TS code like this:

```
let currentEnvironment: string;
currentEnvironment = env('NODE_ENV');
```


## Install

```
npm install ts-tinyenv
```


## Usage

```typescript
import { env } from 'ts-tinyenv';

const aString = env('SOME_ENV_VAR'); // return type is always string

console.log('SOME_ENV_VAR is: ', aString);
```

If `process.env.SOME_ENV_VAR` is not set, an `Error` will be thrown with message like:

> Missing: process.env['SOME_ENV_VAR'].


## Tips

You can use something like
[dotenv-safe](https://www.npmjs.com/package/dotenv-safe) to ensure your service
fails fast if you are missing any env variables, and if you use that corretly
then you should never actually see errors thrown by this function.


## Advanced Environment Variable Support

This package is intentionally super minimal. You get a string, or an error.

For more advanced usage, see packages like:

* [env-var](https://www.npmjs.com/package/env-var)
* [getenv](https://www.npmjs.com/package/getenv)
* [envalid](https://www.npmjs.com/package/envalid)

and of course:

* [dotenv](https://www.npmjs.com/package/dotenv)
* [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)
