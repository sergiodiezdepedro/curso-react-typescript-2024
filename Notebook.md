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
