---
title: Markdown Demo
description: A demo presentation written entirely in Markdown.
---

# Markdown Slides

Write your entire presentation in a single `.md` file.

---

## How It Works

- Horizontal slides are separated by `---`
- Vertical slides are separated by `--`
- Speaker notes start with `Note:`

Note: These are speaker notes! Press **S** to see them.

---

## Code Blocks

Syntax highlighting works out of the box:

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

list(fibonacci(10))
```

---

## Lists & Formatting

- **Bold text** for emphasis
- *Italic text* for nuance
- `inline code` for references
- [Links](https://revealjs.com/markdown/) work too

1. First ordered item
2. Second ordered item
3. Third ordered item

---

## Blockquotes

> The best way to predict the future is to invent it.
>
> — Alan Kay

---

## Tables

| Feature       | Supported |
|---------------|-----------|
| Headers       | Yes       |
| Alignment     | Yes       |
| Inline code   | Yes       |
| **Bold**      | Yes       |

---

## Images

![Placeholder](https://picsum.photos/600/300)

---

## Vertical Slides

Press **down** to see nested content.

--

### Vertical Slide 1

This is a nested slide underneath the parent.

Useful for diving deeper into a topic.

--

### Vertical Slide 2

You can nest as many as you need.

Press **right** to continue the main flow.

---

## Fragments

Reveal content step by step: <!-- .element: class="fragment" -->

- First point <!-- .element: class="fragment" -->
- Second point <!-- .element: class="fragment" -->
- Third point <!-- .element: class="fragment" -->

---

## That's it!

Everything in this presentation lives in a single Markdown file.

[← Back to site](/)
