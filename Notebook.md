# Notas del Curso React con TypeScript

## JavaScript

### Objetos

[Documentación en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

### Arrays

[Documentación en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

Un recurso online para saber si un método de un array lo muta o no: [Does it mutate?](https://doesitmutate.xyz/).

### Truthy / Falsy

In JavaScript, a **truthy** value is a value that is considered `true` when encountered in a Boolean context. All values are truthy unless they are defined as **[falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)**. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.

[MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

Examples of `truthy` values in JavaScript (which will be coerced to `true` in boolean contexts, and thus execute the if block):

```javascript
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

### Eventos en el DOM

[Documentacion en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)

## React

### useReducer

En React, `useReducer` es un hook que se utiliza para gestionar el estado de los componentes de una manera más estructurada y predecible, especialmente cuando el estado es complejo o cuando hay varias transiciones de estado posibles. Es una alternativa a `useState`, pero con una arquitectura más parecida a la de Redux, donde se utilizan **acciones** para modificar el estado.

**Sintaxis básica**:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

**Elementos clave**:

1. `state`: el estado actual, que puede ser cualquier tipo de dato (objeto, array, número, etc.).
2. `dispatch`: función que se utiliza para enviar acciones al reducer.
3. `reducer`:  función pura que toma el estado actual y una acción, y devuelve el nuevo estado.
4. `initialState`:  el estado inicial del componente.

**Función `reducer`**:

La función `reducer` es responsable de gestionar cómo cambia el estado en respuesta a las acciones. Sigue el patrón típico de las funciones puras (es decir, no tiene efectos secundarios).

Ejemplo de un `reducer` simple:

````js
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
````

**Ejemplo completo con `useReducer`**:

```js
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;
```

**Cuándo usar `useReducer` en lugar de `useState`**:

- Si tienes **lógica de estado compleja** que involucra múltiples subvalores o transiciones de estado.
- Si necesitas manejar **acciones múltiples** que actualizan el estado de diferentes maneras.
- Si prefieres una forma más estructurada y explícita de gestionar el estado en tu aplicación, similar a Redux.
