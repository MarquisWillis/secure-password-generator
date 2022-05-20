# secure-password-generator

## Description

This project refactored pre-exisiting code to allow the site to generate a new secure and randomized passwprd based on user choice of charcters to include and size. This solves issues of cybersecurity risks. The random function is a powerful tool for a variety of functions in a variety of settings.

## Usage

When the user clicks the generate password button, a series of prompts display in the following order:
- Asking for size of password (8-128 characters)
- Asking if user wants to include: uppercase, lowercase, numbers, or special characters
- Password is generated based on user criteria
- If selected size is not equal or between 8-128 characters, an alert pops up saying "invalid entry"

```md
![The Password Generator application displays a red button to "Generate Password".](.\Assets\password-generator-pic.png)
```

## Credits

Reference for using character shuffle in generatePassword function:
  https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript



