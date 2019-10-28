# PageHeadings

Heading component that is able to create any one
of the header tags from h1 - h4 inclusive.

## Params

**text (Required):** type: String, that is required to add text value to the header

**type:** type: enum h1-h4 as string, optional as will default to h1

**outline:** type: boolean, optional as default is false. Will add in text drop shadow of black

## Example

```js
const text = 'Header Text';
<PageHeadings text={text} type="h1" outline />;
```
