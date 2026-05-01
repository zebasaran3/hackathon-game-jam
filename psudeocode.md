# Psuedocode

## wordle

```
BEGIN 

SET random_word to ""

FETCH api data

SET random_word to data

SET attempts to 6

SET current_attempt to 1

SET list_gusses to []

WHILE current_attempt < attempts

    INPUT of users 5 letter guess

    SET guess to user input

    PUSH guess to list_gusses

    FOR each letter in guess

        IF letter and index matches random_word

            make green

        ELSE IF letter matches random_word

            make yellow

        ELSE IF letter does not match random_word

            make grey

    IF all letters marked green

        DISPLAY "correct"
        END game


Display "you lost"

END 
```