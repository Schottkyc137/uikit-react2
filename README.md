# UIkit Components for React

uikit-react2 is a Component Library that enables you to use [UIkit](https://getuikit.com)
components with react. It is designed to be easily accessible by React developers, but Developers that are used to UIkit
will also find it easy to migrate.

## Work in Progress

This library is currently work in progress and not stable. Expect Bugs and breaking changes. 
PRs are appreciated.

## What happened to uikit-react1?

There is a Component Library called [uikit-react](https://github.com/vacarsu/uikit-react). It was last updated on
November 2021 and seems inactive. I am planing to use UIkit and react in some form or another for at least three years
from now, so I think I will be able to maintain this project.

## Design Philosophy

UIkit Components come in one of three forms:

- Full Blown components that require Javascript to work, for example the `Accordion`
  or the `Switcher` Components
- Components that only change the style of an HTML element, for example the `Comment`
  or the `Form` component
- Overlays, Modals or other components that require Javascript to work

The first two components are modelled in the same way here. They are both React Components with individual props.

For full-blown components, a React class component is used. Getting the ref of these components returns an instance of
the class which can be used to change the component imperatively. Example:

```tsx
import { Accordion, AccordionItem, Button } from 'uikit-react2';
import { useRef } from 'react';

function MyAccordion() {
  const ref = useRef<Accordion | null>(null);

  return (
    <>
      <Accordion ref={ref}>
        <AccordionItem>
          Lorem Ipsum
        </AccordionItem>
        <AccordionItem>
          dolor sit amet
        </AccordionItem>
      </Accordion>
      <Button onClick={() => ref?.toggle(0)}>Toggle Pane 0</Button>
    </>
  )
}
```

When you click on the button, you can imperatively change the state of the accordion.

The second type that only changes the style is designed as functional component
with a forward Ref. Usually, the component enables you to use the same attributes
that you would use with the same plain html component.

The third type of component, such as overlays, modals or other 'function components'
are modelled using a function that accepts a `ReactNode` as parameter.
It will then render this parameter using the UIkit functions.

## TODO's

The following components are not yet implemented:

- Cover
- Filter
- Image
- Inverse
- (Lightbox) _partial implementation_
- Overlay
- Parallax
- Scrollspy
- Search
- Slidenav
- Slider
- Slideshow
- Sortable
- Sticky
- Subnav
- SVG
- Switcher
- Table
- Thumbnav
- Tile
- Toggle
- Tooltip
- Totop
- Upload
- Video

If you want to implement any of these components, feel free to do so. It's quite simple actually!

If you need any of these components, but don't have time to implement them yourself or don't know how to, be sure to
open an issue so that the component will be treated with higher priority.

