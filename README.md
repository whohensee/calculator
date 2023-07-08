# calculator

### Stage 1 ###

Create the following functions:

add(a,b)
subtract(a,b)
multiply(a,b)
divide(a,b)

### Stage 2 ###

Add jS variables to store the parts of a calculator operation

calcLHS
calcRHS
calcOperator

### Stage 3 ###

Add an operate() function which can evaluate a LHS and RHS with an operator
by calling the appropriate mathematical function.

### Stage 4 ###

Create a basic html/css mockup of a calculator

As follows:
- It will be roughly a rectangle in center of page
- display/text takes up the entire top of the rectangle
- beneath the text are a 5x4 grid of buttons, mirroring my TI-83+ calculator

### Stage 5 ###
Time to get it working

The process of a calculation goes
-input (the user adds numbers and operators to the display)
-parsing (the user hits 'enter' and the program parses the display str)
-calculate (perform the necessary operations)
-display (modify the display)

In more detail
-input
    -uses function addToDisplay()
    -user hits a button
        -modified behavior if it is the first button hit
        -modified behavior if it is an operator button
        -default: add the text content of that button to displayStr
-parsing
    -uses function parseDisplayString()
        -the goal is to find the first operator and break the str around it
            -returns LHS, RHS, operator

# trying to break down the logic of recursive operate
operate(lhs, rhs, operator)
    if lhs has an operator (regex search):
        lhs = operate(parseDisplayString(lhs))
    if rhs has an operator (regex search):
        rhs = operate(parseDisplayString(rhs))
    (now the switch/case tree)
    return result

### note on 7/8
got around some negative problems by changing " - " to " + -". It is important
to note that for the purposes of future things like multiplication, the string
" - " with whitespace around it is very different than "-" without, due to how
I search for operations in parseDisplayString.
    
        