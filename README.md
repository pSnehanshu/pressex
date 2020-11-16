# Pressex
Fast, unopinionated, minimalist web framework for Deno.js

# Usage

```javascript
import Pressex from 'https://deno.land/x/pressex/pressex.ts';

const app = Pressex();

app.get('/', (req, res) => res.send('Hello Deno!'));

app.listen(8080);
```

# LICENSE
MIT
