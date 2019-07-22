# Utilities

## Text truncate

Prevent text from wrapping onto multiple lines, and truncate with an ellipsis.
1. Ensure that the node has a maximum width after which truncation can occur.
2. Fix for IE 8/9 if `word-wrap: break-word` is in effect on ancestor nodes.

```scss
@include textTruncate();
```