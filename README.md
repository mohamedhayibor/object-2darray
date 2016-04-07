
object-2darray ![](https://img.shields.io/badge/status-stable-green.svg)
----
This module takes an object and returns a 2d array and vice versa.

## Installation
```
  > npm install object-2darray
```

## Usage

```js
/**
* params(object || 2d array)
**/
import transform from 'object-2darray';

transform([ ['name', 'Org'], ['age', 13], ['sport', 'soccer'] ]);
// ===> { name: 'Org', age: 13, sport: 'soccer' }
transform({ name: 'Org', age: 13, sport: 'soccer' })
// ===> [ [ 'name', 'Org' ], [ 'age', 13 ], [ 'sport', 'soccer' ] ]

```

## Raison d'être
When tackling large projects, slowing down to write an algorithm to transform objects into 2d arrays or the other way around is annoying. There are no Api to mess with pass in a 2d array or object and get your desired result.

Super Light. No dependencies.
## License
![](https://img.shields.io/badge/license-MIT-blue.svg) © [Mohamed Hayibor](https://github.com/mohamedhayibor)
