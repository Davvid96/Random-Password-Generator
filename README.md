# Module 5 Challenge: Password Generator

## The Task:

This week’s challenge requires me to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying the starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I had to write. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

I have been provided with the following image which shows the web application's appearance and functionality:

![password generator demo](./assets/05-javascript-challenge-demo.png)

As well as with the basic HTML and CSS code, which already has the generator design, and was able to focus solely on the JavaScript code.


## Instructions:

I have been provided with the following set of instructions:

The password generator had to;

* Generate a password when the button is clicked
  * Present a series of prompts for password criteria
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc)
  * Code should validate for each input and at least one character type should be selected
  * Once prompts are answered then the password should be generated and displayed in an alert or written to the page


## End Result:

This was the end result of the challenge. So I did not change any of the HTML or CSS, however now when you click the 'Generate Password' button, the website will give a series of prompts asking for the length of the password between 10 to 64, as well as what type of characters you would like included in the password; lower case, upper case, numbers and/or special characters. 

An example 10 character password can be seen in the screenshot below:

![password generator demo](./assets/endresult%20.jpg)


## Regex:

I think the hardest part of the challenge for me personally was to validate the end result displayed to the user after the password was generated as for example if the password was 10 characters, and the user would like to include all types of characters in their password. There was a chance that the password could generate without a number for example. Therefore, after some searching and a prompt from a buddy, I came across 'Regex' and it's 'community patterns' which helped in validating and testing the end result, and generating the password until it matched all criteria.


## Conclusion:

I believe that this was on of the more complex challenges I have completed during the Bootcamp. As I went from creating simple arrays, loops and if statements, to creating functions inside of a function, and multiple complex variables which needed validating, in order to generate a random password which matched the criteria. This was a hard but fun and educational activity, which naturally boosted my skills as well as confidence. Which will hopefully come useful in the future challenges to come.


## Deployment:

* Following is a link to the final version of the Website: 'https://davvid96.github.io/Horiseon-Challenge/'

