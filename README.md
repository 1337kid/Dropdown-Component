# Dropdown Component

This is a reusable component that can be used with any react project.

```js
<CustomDropdown
  items={items}
  defaultSelected={2}
  showCheck={true}
  showSearchBar={true}
  openUpwards={false}
/>
```

```js
const items = [
  { label: 'Selected Option' },
  { label: 'Default Option' },
  { label: 'Hovered Option' },
  { label: 'Disabled Option', disabled: true },
  { label: 'Text Option' },
  { label: 'Icon and Text Option', icon: LuFilm },
];
```