export var htmlQuestionArr = [
  `0.Add a tooltip to the paragraph  with the text "tooltip".<br>
&ltp&gtAnswer&lt/p&gt`,

  `1.Change the size of the image to 250 pixels wide and 400 pixels tall.<br>
&ltimg src="answer.jpg"&gt`,

  `2.Transform the text "This is a link" into a link that goes to "https://www.google.com".`,

  `3.Change the destination of the link to "www.wwf.org.uk".<br>
&lta href="https://www.google.com"&gtThis is a link&lt/a&gt`,

  `4.The image does not exist. Specify the alternate text "answer.com" for the image.<br>
 &ltimg src="test.jpg" width="135" height="50"&gt`,

  `5.Add a heading with the text "London".`,

  `6.Add a horizontal rule between the heading "London" and the paragraph "Test".`,

  `7.Add six headings to the document with the text "Hello". Start with the most important heading and end with the least important heading.`,

  `8.Mark up the following text with appropriate tags. "Universal Studios Presents" is the most important content. "Jurassic Park" is the next most important content.  "About" is of lesser importance than Jurassic Park.  The last sentence is just a paragraph.`,

  `9.Add a paragraph the text "Hello World!".`,

  `10.Fix the display of the poem . Display the poem over 4 lines using &ltbr&gt elements.<br>
&ltp&gt My Bonnie lies over the ocean. My Bonnie lies over the sea. My Bonnie lies over the ocean. Oh, bring back my Bonnie to me.&lt/p&gt`,

  `11.Fix the display of this poem. Display the poem as suggested in the code using &ltpre&gt.<br>
 &ltp&gt My Bonnie lies over the ocean.&ltbr&gt<br>
  My Bonnie lies over the sea.&ltbr&gt<br>
  My Bonnie lies over the ocean.&ltbr&gt<br>
  Oh, bring back my Bonnie to me.&lt/p&gt`,

  `12.Change the text color of the paragraph to "blue".<br>
&ltp style="color:red"&gtThis is a paragraph.&lt/p&gt`,

  `13.Change the font of the paragraph to "courier".<br>
&ltp&gtThis is a paragraph.&lt/p&gt`,

  `14.Center align the paragraph.<br>
&ltp&gtThis is a paragraph.&lt/p&gt`,

  `15.Change the text size of the paragraph to 50px.<br>
&ltp&gtThis is a paragraph.&lt/p&gt`,

  `16.Change the background color of the page to yellow.<br>
&ltbody&gt<br>
&ltp&gtThis is a paragraph.&lt/p&gt<br>
&lt/body&gt`,

  `17.Center align all content on the page.<br>
&lthtml&gt<br>
&ltbody&gt<br>
&lth1&gtThis is a heading&lt/h1&gt<br>
&lth2&gtThis is also a heading&lt/h2&gt<br>
&ltp&gtThis is a paragraph.&lt/p&gt<br>
&ltp&gtThis is also paragraph.&lt/p&gt<br>
&lt/body&gt<br>
&lt/html&gt`,

  `18.Add extra importance to the word "degradation" in the paragraph below.<br>
&ltp&gtThis mission is to stop the degradation of our planets natural environment.&lt/p&gt`,

  `19.Emphasize the word "metropolitan" in the text below.<br>
 &ltp&gt<br>Tokyo is the capital of Japan, <br> 
 the center of the Greater Tokyo Area,<br>
 and the most populous metropolitan area in the world.<br>
 &lt/p&gt `,

  `20.Highlight the word "FUN" in the text below.<br>
&ltp&gtHTML is FUN to learn!&lt/p&gt`,

  `21.Apply subscript formatting to the number "2" in the text below.<br>
&ltp&gtH2O is the scientific term for water.&lt/p&gt`,

  `22.Use an HTML element to add quotation marks around the letters "cool".<br>
&ltp&gtI am so cool.&lt/p&gt`,

  `23.The text should be a quoted section. Add the proper HTML element to it, and specify that it is quoted from the following URL: http://www.worldwildlife.org/who/index.html. For 50 years, WWF has been protecting the future of nature. `,

  `24.Make the text go right-to-left. What a beautiful day!`,

  `25.The letters "WHO" in the text is an abbreviation of "World Health Organization". <br> Use an HTML element to provide the specified abbreviation of "WHO". <br> &ltp&gtThe WHO was founded in 1948.&lt/p&gt`,

  `26.Add comment tags around the "Do not display this text in the browser" text.`,

  `27.Change the background color of the page  to yellow.<br>
&ltstyle&gt body {background-color:lightgrey;}&lt/style&gt`,

  `28.Add an id with the value "special" to the paragraph.<br>
&ltp&gtI want to be a special paragraph!&lt/p&gt`,

  `29.Add the "intro" class to &ltp&gt elements.<br>
&ltp&gtThis is a paragraph.&lt/p&gt<br>
&ltp&gtThis is a paragraph.&lt/p&gt`,

  `30.Make the link go to https://www.google.com.<br>
 &lta&gtVisit our HTML tutorial.&lt/a&gt`,

  `31.Change the link to a local link.<br>
&lta href="https://www.google.com/html/html_images.asp"&gtHTML Images&lt/a&gt`,

  `32.Change the link to open in a new window.<br>
&lta href="html_images.asp"&gtHTML Images&lt/a&gt`,

  `33.Remove the underline from the link.<br>
&lta href="html_images.asp" target="_blank"&gtHTML Images&lt/a&gt`,

  `34.Add a link to the image (make it go "https://www.google.com" if you click on it).<br>
&ltimg src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0"&gt`,

  `35.Double the width and height of the image.<br>
&ltimg src="programming.gif" alt="Computer Man" width="48" height="48"&gt`,

  `36.Double the width and height of the image.<br>
&ltimg src="html5.gif" alt="HTML5 Icon" style="width:128px;height:128px;"&gt`,

  `37.Make the image float to the left of the paragraph.<br>
&ltp&gt &ltimg src="smiley.gif" alt="Smiley face" style="width:42px;height:42px;"&gt<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
A paragraph with an image.<br>
&lt/p&gt`,

  `38.Change the image address to "pic_trulli.jpg".<br>
&ltimg src="img_the_scream.jpg" style="width:304px;height:228px;"&gt `,

  `39.The image is unavailable on purpose. Specify an alternate text of "google.com" to be used,so it can be read by screen readers.<br>
&ltimg src="google.jpg" width="135" height="50"&gt`,

  `40.Add a caption with the letters "Names" `,

  `41.Complete the description list below. Each name should have a description.&ltdl&gt dt&gtCoffee&lt/dt&gt &ltdt&gtMilk&lt/dt&gt &lt/dl&gt`,

  `42.Disable the input field.&ltinput type="text" name="firstname" value="John"&gt`,

  `43.Make a HTML form containing an &ltinput&gt element with type="button", and value="OK".`,

  `44.Add 2 radio buttons to the form. One for "male", and one for "female", both with name="gender".`,

  `45.Add a drop down list with name="cars" to the form. <br>
Include the following options: "volvo", "ford", "fiat", and "audi".`,

  `46.Add a text area with name="note" to the form.`,

  `47.Set the display text of the &ltbutton&gt to: "Click Me!".`,

  `48.Create an input field for text.`,

  `49.Create a submit button.`,

  `50.Specify an initial value of "John" for the input field.<br>
&ltinput type="text" name="firstname"&gt`,

  `51.Change the size of the input field to display up to 40 characters.<br>
&ltinput type="text" name="firstname" value="John"&gt`,

  `52.Add the text "First name" as a hint to the user of what can be entered in the input field.<br>
&ltinput type="text" name="fname"&gt`,

  `53.Display HTML code in html. <br>
&ltp&gtThis is a paragraph.&lt/p&gt`
];
