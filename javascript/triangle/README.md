# Triangle

Write a program that can tell you if a triangle is equilateral, isosceles, or scalene.

The program should raise an error if the triangle cannot exist.

Tests are provided, delete one `skip` at a time.

## Hint

The sum of the lengths of any two sides of a triangle always exceeds the length of the third side, a principle known as the _triangle inequality_.

## Making the Test Suite Pass

Execute the tests with:

```bash
$ jasmine-node bob_test.spec.js
```

All but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

The Ruby Koans triangle project, parts 1 & 2 [view source](http://rubykoans.com)
