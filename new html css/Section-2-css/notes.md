# CSS Units

### Absolute

- cm - Centimeters
  
- mm - Milimeters
- in - Inches
- ***px*** - Pixels (1px = 1/96 of 1in)
- pt - Points (1pt = 1/72 of 1in)
- pc - Picas picas (1pc = 12pt)
  
### Relative

- % - compared to parent element

- em - compared to font size of parent element
- rem - compared to font size of root element
- vw - compared to 1% of viewport width
- vh - compared to 1% of viewport height 

# Style Attribute Precedence
- When we set multiple attributes for the same styling, the ones that are further down i.e. more detailed ***OVERWRITE*** the ones that are further up i.e. more general.
  - For example, `padding-top`, `padding-bottom`, `padding-left`, `padding-right` overwrite `padding`

# Position Values 

- Static (default): Not effected by tblr(top, bottom, left, right) properties/values
- Relative: tblr values cause element to be moved from its normal position
- Absolute: Positioned relative to its parent element that is positioned "relative"
- Fixed: Positioned relative to the viewport i.e. stay at that one spot wherever you scroll to
- Sticky: Positioned based on scroll position