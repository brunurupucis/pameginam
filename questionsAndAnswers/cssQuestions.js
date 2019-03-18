export var cssQuestionArr = [
  `0.Change the color of all &ltp&gt elements to "red".<br>
   &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt`,
  
  `1.Change the color of all elements with the class "colortext", to "red"<tb>t
  &ltp class="colortext"&gtThis is another paragraph.&lt/p&gt<br>
  &ltp class="colortext"&gtThis is also a paragraph.&lt/p&gt
  `,
  
  `2.Change the color of all &ltp&gt and &lth1&gt elements, to "red". Group the selectors to minimize code.<br>
  &lth1&gtThis is a heading&lt/h1&gt<br>
  &lth2&gtThis is a smaller heading&lt/h2&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  `,
  
  `3.Add an external style sheet with the URL: "mystyle.css".`,
  
  `4.Set "background-color: linen" for the page, using an internal style sheet.`,
  
  `5.Set "background-color: linen" for the page, using an inline style.`,
  
  `6.Set the background color for the page to "linen" and the background color for &lth1&gt to "lightblue".`,
  
  `7.Set "paper.gif" as the background image of the page.`,
  
  `8.Set "gradient_bg_vertical.png" as the background image of the page, and repeat it vertically only.`,
  
  `9.Specify that the background image should be shown once, in the top right corner. img_tree.png`,
  
  `10.Use the shorthand background property to set background image to "img_tree.png", show it once, in the top right corner.`,
  
  `11.Set a "4px", "dotted" border for &ltp&gt.<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `12.Set the border color for &ltp&gt to "red".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  p {<br>
    border-style: dotted;<br>
    border-width: 4px;<br>
  }  `,
  
  `13.Change the 3 border properties, so that they only show the border on the top side.<br> 
  &ltp&gtThis is a paragraph.&lt/p&gt.<br>
   p {<br>
      border-style: dotted;<br>
      border-width: 4px;<br>
      border-color: red;<br>
    }
  `,
  
  `14.With the border property: Set the border for p to "10px", "solid" and "green".<br>
   &ltp&gtThis is a paragraph.&lt/p&gt
  `,
  
  `15.Set the left margin of &lth1&gt to "20px".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `16.Set all margins for &lth1&gt to "25px".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `17.Use the margin property to set the top and bottom margins for &lth1&gt to "50px", and left and right margins to "25px". <br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `18.Use the margin property to center align the &lth1&gt element.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `19.Set the top padding of &ltp&gt to "30px".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt `,
  
  `20.Set all paddings for &ltp&gt to "50px".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `21.Use the padding property to set the top and bottom paddings for &ltp&gt to "25px", and left and right paddings to "50px". <br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `22.Set the height of &lth1&gt to "100px".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `23.Set the width of &lth1&gt to "50%".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `24.Set the width of the div to "200px".<br>
  &ltdiv&gtLorem ipsum dolor sit amet. &lt/div&gt`,
  
  `25.Set the padding of the div to "25px".<br>
  &ltdiv&gtLorem ipsum dolor sit amet. &lt/div&gt`,

  
  `26.Set the border of the div to "25px solid navy".<br>
  &ltdiv&gtLorem ipsum dolor sit amet. &lt/div&gt`,
  
  `27.Set the margin of the div to "25px".<br>
  &ltdiv&gtLorem ipsum dolor sit amet. &lt/div&gt`,
  
  `28.Set a "solid", "5px" outline for &ltp&gt.<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `29.Set the outline color for &ltp&gt to "green".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `30.With the outline property: Set the outline for p to "red", "dotted" and "10px".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `31.Set the text color for the page to "red", and the text color for &lth1&gt to "blue".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `32.Center align the &lth1&gt element.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `33.Remove the underline from the link.<br>
  &ltp&gt&lta href="css_text.asp"&gtCSS text tutorial&lt/a&gt&lt/p&gt`,
  
  `34.Style text in &lth1&gt to uppercase letters, and text in &ltp&gt to capitalized letters.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt
  `,
  
  `35.Indent the first line of the &ltp&gt element with 20px.<br>
  &ltp&gtLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua &lt/p&gt`,
  
  `36.Set the font family for the page to "Courier New", and the font family for &lth1&gt to "Verdana".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `37.Show &ltp&gt elements as "italic" text.<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `38.Set the font size for the page to "20px", and the font size for &lth1&gt to "3em".<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `39.Set &ltp&gt elements as "bold" text.<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `40.With the font property: Set the &ltp&gt to "italic", "20px" and "Verdana".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt`,
  
  `41.Set the color for links to "green".<br>
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,
  
  `42.Set the color for unvisited links to "red", and the color for visited links "blue".<br>
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,
  
  `43.Remove underlines for visited and unvisited links, and specify "underline" for the hover and active link states.<br>
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,
  
  `44.Set the background color for visited and unvisited links to "lightblue", and the background color for the hover and active link states to "yellow"<tb>t
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,
  
  `45.Set the list style for unordered lists to "square", and the list style for ordered lists to "upper-roman".
  &ltp&gtThis is an unordered list:<br>
  &lt/p&gt<br>
  &ltul&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ul&gt<br>
  <br>
  &ltp&gtThis is an ordered list:&lt/p&gt<br>
  &ltol&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ol&gt<br>
  `,
  
  `46.Set the image "sqpurple.gif" as the list item marker for the unordered list.<br>
  &ltp&gtThis is an unordered list:<br>
  &lt/p&gt<br>
  &ltul&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ul&gt<br>
  <br>
  &ltp&gtThis is an ordered list:&lt/p&gt<br>
  &ltol&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ol&gt<br>`,
  
  `47.With the list-style property: Set the unordered list marker to "img_marker.png", with a backup style of "circle", and display the markers inside the content flow.<br>
  &lt/p&gt<br>
  &ltul&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ul&gt<br>
  `,
  
  `48.Remove the bullets/markers from the list items.
  <br>
  &lt/p&gt<br>
  &ltul&gt<br>
    &ltli&gtCoffee&lt/li&gt<br>
    &ltli&gtTea&lt/li&gt<br>
    &ltli&gtCoca Cola&lt/li&gt<br>
  &lt/ul&gt<br>
  `,
  
  `49.Set the border to "2px solid green" for table, th and td elements.<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>
  `,
  
  `50.Collapse the table borders into a single border.<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>
  `,
  
  `51.Set the width of the table to "100%".<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>
  `,
  
  `52.Set the text alignment in &lttd&gt elements to "right".<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>
  `,
  
  `53.Set the background color of &ltth&gt elements to "lightblue".<br>
  &lttable&gt<br>
  &lttr&gt<br>
    &ltth&gtFirstname&lt/th&gt<br>
    &ltth&gtLastname&lt/th&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtPeter&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lttr&gt<br>
    &lttd&gtLois&lt/td&gt<br>
    &lttd&gtGriffin&lt/td&gt<br>
  &lt/tr&gt<br>
  &lt/table&gt<br>`,
  
  `54.Hide the &lth1&gt element. It should still take up the same space as before.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `55.Hide the &lth1&gt element. It should not take up any space.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `56.Display the list items as inline elements.<br>
  &ltul&gt<br>
  &ltli&gtApple&lt/li&gt<br>
  &ltli&gtOrange&lt/li&gt<br>
  &ltli&gtPear&lt/li&gt<br>
  &lt/ul&gt<br>
  `,
  
  `57.Display the &ltstrong&gt elements as block elements.<br>
  &ltp&gtThis is a &ltstrong&gtparagraph&lt/strong&gt, with some words more &ltstrong&gtimportant&lt/strong&gt than others &lt/p&gt`,
  
  `58.Position the &lth1&gt element relative to the browser window. 50px from the top, and 50px from the right.`,
  
  `59.Position the &lth1&gt element 20px left, and 30px down, relative to its normal position.`,
  
  `60.Position the &lth1&gt element 50px from the left, and 100px from the top, relative to the HTML page.
  `,
  
  `61.Position the &ltimg&gt element behind the text.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &ltimg src="w3css.gif" width="100" height="140"&gt
  `,
  
  `62.Position the element with the "topleft" class 30px from the left, and 15px from the top, relative to its container.<br>
  &ltdiv class="container"&gt<br>
  &ltimg src="img_5terre.jpg" alt="Cinque Terre" width="1000" height="300"&g<tb>t
  &ltdiv class="topleft"&gtTop Left&lt/div&gt<br>
  &lt/div&gt
  `,
  
  `63.Add a scrollbar to the &ltdiv&gt element.<br>
  div {<br>
    background-color: #eee;<br>
    width: 200px;<br>
    height: 70px;<br>
    border: 1px dotted black;<br>
    <br>
  }
  `,
  
  `64.Specify that the overflowing text in the &ltdiv&gt element should not be visible, not even with scrolling.<br>
  div {<br>
    background-color: lightblue;<br>
    width: 200px;<br>
    height: 200px;<br>
    <br>
  }
  `,
  
  `65.Add a horizontal scrollbar to &ltdiv&gt.<br>
  div {<br>
    background-color: #eee;<br>
    width: 150px;<br>
    height: 70px;<br>
    border: 1px dotted black;<br>
    white-space: nowrap;<br>
    <br>
  }
  `,
  
  `66.Center align the &ltdiv&gt element using margins.<br>
  div {<br>
    <br>
    <br>
    width: 300px;<br>
    background-color: #b0e0e6;<br>
  }
  `,
  
  `67.Position the &ltdiv&gt element all the way to the right using absolute positioning.<br>
  div {<br>
    <br>
    <br>
    width: 300px;<br>
    background-color: #b0e0e6;<br>
  }
  `,
  
  `68.Change the color of all &ltp&gt elements, that are descendants of &ltdiv&gt elements, to "red".<br>
  &ltdiv&gt<br>
    &ltp&gtThis is a paragraph inside a div element.&lt/p&gt<br>
    &ltp&gtThis is another paragraph inside a div element.&lt/p&gt<br>
    &ltspan&gt&ltp&gtThis a paragraph inside a span element, inside a div element.&lt/p&gt&lt/span&gt<br>
  &lt/div&gt<br>
  &ltp&gtThis is a paragraph, not inside a div element.&lt/p&gt<br>
  &ltp&gtThis is another paragraph, not inside a div element.&lt/p&gt<br>
  `,
  
  `69.Change the color of all &ltp&gt elements, that are immediate children of &ltdiv&gt elements, to "red".<br>
  &ltdiv&gt<br>
    &ltp&gtThis is a paragraph inside a div element.&lt/p&gt<br>
    &ltp&gtThis is another paragraph inside a div element.&lt/p&gt<br>
    &ltspan&gt&ltp&gtThis a paragraph inside a span element, inside a div element.&lt/p&gt&lt/span&gt<br>
  &lt/div&gt<br>
  `,
  
  `70.Change the color of &ltp&gt elements, that are the adjacent (immediately following) sibling of a &ltdiv&gt element, to "red".<br>
  &ltdiv&gt<br>
    &ltp&gtThis is a paragraph inside a div element.&lt/p&gt<br>
    &ltp&gtThis is another paragraph inside a div element.&lt/p&gt<br>
    &ltspan&gt&ltp&gtThis a paragraph inside a span element, inside a div element.&lt/p&gt&lt/span&gt<br>
  &lt/div&gt<br>
  `,
  
  `71.Change the color of &ltp&gt elements, that are the siblings of a &ltdiv&gt element, to "red".<br>
  &ltdiv&gt<br>
    &ltp&gtThis is a paragraph inside a div element.&lt/p&gt<br>
    &ltp&gtThis is another paragraph inside a div element.&lt/p&gt<br>
    &ltspan&gt&ltp&gtThis a paragraph inside a span element, inside a div element.&lt/p&gt&lt/span&gt<br>
  &lt/div&gt<br>
  `,
  
  `72.Set the background color for visited and unvisited links to "lightblue", and the background color for the hover and active link states to "yellow<tb>t
  &ltp&gt&lta href="https://www.google.com"&gtgoogle.com&lt/a&gt&lt/p&gt`,
  
  `73.Change the background color, when a user hovers over p elements, with the class "highlight", to "lightblue".<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp class="highlight"&gtThis is another paragraph.&lt/p&gt
  `,
  
  `74.Set the background color of &ltp&gt elements, that are the first child of any element, to "lightblue".<br>
  &ltbody&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is also a paragraph&lt/p&gt<br>
  &lt/body&gt<br>
  `,
  
  `75.Set the background color of &ltinput&gt elements that are in focus (clicked or active), to "lightblue".<br>
  &ltform action="/action_page.php" method="get"&gt<br>
    First name: &ltinput type="text" name="fname"&gt<br>
    Last name: &ltinput type="text" name="lname"&gt<br>
    &ltinput type="submit" value="Submit"&gt<br>
  &lt/form&gt
  `,
  
  `76.Set text color to red, for the first line of the &ltp&gt element.<br>
  &ltp&gtIn my younger and more vulnerable years my father gave me some advice  <br> that I've been turning over in my mind ever since.&lt/p&gt`,
  
  `77.Set text color to "red", and the text size to "xx-large", for the first letter of the &ltp&gt element.<br>
  &ltp&gtIn my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.&lt/p&gt`,
  
  `78.Insert the image "smiley.gif" before, and after &ltp&gt elements, using the ::before and ::after pseudo-elements.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  `,
  
  `79.Set the transparency/opacity of the &ltimg&gt element to "0.4".<br>
  &ltimg src="klematis.jpg" width="150" height="113"&gt`,
  
  `80.Remove the transparency/opacity of the &ltimg&gt element when the user hovers over it with the mouse pointer.<br>
  &ltimg src="klematis.jpg" width="150" height="113"&gt<br>
  img {<br>
    opacity: 0.4;<br>
  }`,
  
  `81.Set the background-color to "lightblue" for elements with a "target" attribute.<br>
  &lta href="https://www.google.com"&gtgoogle.com&lt/a&gt<br>
  &lta href="http://www.disney.com" target="_blank"&gtdisney.com&lt/a&gt<br>
  &lta href="http://www.wikipedia.org" target="_top"&gtwikipedia.org&lt/a&g<tb>t
  `,
  `82.Set a border 5px solid red , around elements with a "title" attribute containing the word "red".<br>
  &ltimg src="klematis_small.jpg" title="two red flowers" width="107" height="90"&gt<br>
  &ltimg src="klematis2_small.jpg" title="purple flower" width="107" height="80"&gt<br>
  &ltimg src="klematis3_small.jpg" title="red flower" width="116" height="90"&gt<br>
  &ltimg src="klematis4_small.jpg" title="two white flowers" width="120" height="90"&gt
  `,
  
  `83.Set a border 5px solid red, around elements with a "title" attribute starting with "red".<br>
  
  &ltimg src="klematis_small.jpg" title="two red flowers" width="107" height="90"&gt<br>
  &ltimg src="klematis2_small.jpg" title="purple flower" width="107" height="80"&gt<br>
  &ltimg src="klematis3_small.jpg" title="red flower" width="116" height="90"&gt<br>
  &ltimg src="klematis4_small.jpg" title="two white flowers" width="120" height="90"&gt<br>
  `,
  
  `84.Set a border 5px solid red, around elements with a "title" attribute ending with the word "flower" (not flowers).<br>
  
  &ltimg src="klematis_small.jpg" title="two red flowers" width="107" height="90"&gt<br>
  &ltimg src="klematis2_small.jpg" title="purple flower" width="107" height="80"&gt<br>
  &ltimg src="klematis3_small.jpg" title="red flower" width="116" height="90"&gt<br>
  &ltimg src="klematis4_small.jpg" title="two white flowers" width="120" height="90"&gt<br>
  `,
  
  `85.Set a border 5px solid red, around elements with a "title" attribute containing the value "flow".<br>
  
  &ltimg src="klematis_small.jpg" title="two red flowers" width="107" height="90"&gt<br>
  &ltimg src="klematis2_small.jpg" title="purple flower" width="107" height="80"&gt<br>
  &ltimg src="klematis3_small.jpg" title="red flower" width="116" height="90"&gt<br>
  &ltimg src="klematis4_small.jpg" title="two white flowers" width="120" height="90"&gt<br>
  `,
  
  `86.Give the &ltdiv&gt element rounded corners (use the shorthand property and the value "25px").<br>
  &ltdiv&gtThis is a div element. It has some text.&lt/div&gt<br>
  div {<br>
    <br>
    background: #73AD21;<br>
    padding: 20px; <br>
    width: 200px;<br>
  }`,
  
  `87.Give the &ltdiv&gt element a rounded corner (25px radius) on the bottom left side.<br>
  &ltdiv&gtThis is a div element. It has some text.&lt/div&gt<br>
  div {<br>
    <br>
    background: #73AD21;<br>
    padding: 20px; <br>
    width: 200px;  <br>
  }`
  ,
  
  `88.Give the &ltdiv&gt element an image border using the image "border.png". Slice the image at 30px and repeat it.<br>
  &ltdiv&gtThis is a div element. It has some text.&lt/div&gt<br>
  div { <br>
    border: 10px solid transparent;<br>
    <br>
  }
  `,
  
  `89.Give the &ltdiv&gt element an image border using the image "border.png". Slice the image at 30px and stretch it.<br>
  &ltdiv&gtThis is a div element. It has some text.&lt/div&gt<br>
  div { <br>
    border: 10px solid transparent;<br>
    <br>
  }
  `,
  
  `90.Add a second background image ("img_flwr.gif") to the &ltbody&gt element. Make sure that "img_flwr.gif" is displayed on top of the current background image.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  `,
  
  `91.Change the size of the background image to: width 100px, height 80px<tb>t
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  body {<br>
    background:url(img_flwr.gif);<br>
    <br>
    background-repeat: no-repeat;<br>
  }
  `,
  
  `92.Change the size of the background image so it always fits the entire page.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  html { <br>
    background: url(img_flower.jpg) <br>
    <br>
  }
  `,
  
  `93.Specify that the background image position should start from the upper left corner of the content-box.<br>
  &ltdiv&gt<br>
    &lth1&gtThis is a Heading&lt/h1&gt<br>
    &ltp&gtThis is a paragraph.&lt/p&gt<br>
    &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &lt/div&gt<br>
  div { <br>
    border: 10px solid black;<br>
    padding: 35px;<br>
    background: url(img_flwr.gif);<br>
    background-repeat: no-repeat;<br>
    <br>
  }
  `,
  
  `94.Specify that the "painting area" of the background should be to the outside edge of the padding.<br>
  &ltdiv&gt<br>
    &lth1&gtThis is a Heading&lt/h1&gt<br>
    &ltp&gtThis is a paragraph.&lt/p&gt<br>
    &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &lt/div&gt<br>
  div { <br>
    border: 10px dotted black;<br>
    padding: 35px;<br>
    background: lightblue;<br>
    <br>
  }
  
  `,
  
  `95.Set the opacity for the background color of the &lth1&gt element to "0.3" by using a RGBA color instead of RGB.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    background-color: rgb(0,255,0);<br>
  }
  `,
  
  `96.Set the following HSL color as the background of the &lth1&gt element: Set the Hue to red (0), Saturation to 100%, and lightness to 50%.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `97.Set the opacity for the background color of the &lth1&gt element to "0.3" by using a HSLA color instead of HSL.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    background-color: hsl(0,100%,50%);<br>
  }
  `,
  
  `98.Set the transparency/opacity of the &lth1&gt element to "0.4".<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    background-color: red;<br>
  }`,
  
  `99.Set a linear gradient background for the &ltdiv&gt element, going from the top to bottom, transitioning from "white" to "green".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt<br>
  `,
  
  `100.Set a linear gradient background for the &ltdiv&gt element, going from the top left to the bottom right, transitioning from "white" to "green"<tb>t
  &ltdiv style="height:200px"&gt&lt/div&gt`,
  
  `101.Set a linear gradient background for the &ltdiv&gt element, going at a 70 degree angle, transitioning from "white" to "green".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt<br>
  div {<br>
    background-image: linear-gradient(white, green);<br>
  }
  `,
  
  `102.Set a linear gradient background for the &ltdiv&gt element, going from the top to bottom, transitioning from "white" to "red" to "blue" to "green"<tb>t
  &ltdiv style="height:200px"&gt&lt/div&gt`,
  
  `103.Set a linear gradient background for the &ltdiv&gt element, going from the top to bottom, transitioning from "rgba(0,255,0,0.2)" to "rgba(0,255,0,1)".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt`,
  
  `104.Set a radial gradient background for the &ltdiv&gt element, transitioning from "white" to "green".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt`,
  
  `105.Set a radial gradient background for the &ltdiv&gt element, with a circle shape, transitioning from "white" to "green".<br>
  &ltdiv style="height:200px"&gt&lt/div&gt<br>
  div {<br>
    background-image: radial-gradient(white, green);<br>
  }
  `,
  
  `106.Set a "2px" horizontal, and "2px" vertical, text shadow for the &lth1&gt element.<br>
  &lth1&gtThis is a Heading&lt/h1&gt`,
  
  `107.Change the color of the text shadow to "green", and set a "5px" blur radius.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    text-shadow: 2px 2px;<br>
  }
  `,
  
  `108.Add a new shadow (do not remove the current one) to the &lth1&gt element with: no horizontal or vertical shadow, 10px blur, and a red color.<br>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  h1 {<br>
    text-shadow: 2px 2px 5px green;<br>
  }
  `,
  
  `109.Set a "10px" horizontal, and "10px" vertical, box shadow for the &ltdiv&gt element.<br>
  &ltdiv style="background-color: lightblue; width: 350px; padding: 15px;"&g<tb>t
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &lt/div&gt
  `,
  
  `110.Change the color of the box shadow to "grey", and set a "5px" blur<tb>t
  &ltdiv style="background-color: lightblue; width: 350px; padding: 15px;&gt <br>
  <tb>
  &lth1&gtThis is a Heading&lt/h1&gt<br>
  &ltp&gtThis is a paragraph.&lt/p&gt<br>
  &ltp&gtThis is another paragraph.&lt/p&gt<br>
  &lt/div&gt<br>
  <br>
  div {<br>
    box-shadow: 10px 10px;<br>
  }
  `,
  
  `111.Specify that the overflowed content for the &ltp&gt element should be signaled with an ellipsis (...)<br>
  &ltp&gtThis paragraph contains a very long word: supercalifragilisticexpialidocious.&lt/p&gt<br>
  p {<br>
    white-space: nowrap; <br>
    width: 200px; <br>
    border: 1px solid #000000;<br>
    overflow: hidden;<br>
    <br>
  }
  `,
  
  `112.Specify that text in the &ltp&gt element should wrap, even if it needs to split in the middle of a word.<br>
  &ltp&gtThis paragraph contains a very long word: supercalifragilisticexpialidocious.&lt/p&gt<br>
  p {<br>
    width: 150px; <br>
    border: 1px solid #000000;<br>
    <br>
  }
  `,
  
  `113.Specify that text in the &ltp&gt element can break between any two letters.<br>
  &ltp&gtThis paragraph contains a very long word: super-cali-fragi-listic-expialidocious.&lt/p&gt<br>
  p {<br>
    width: 150px; <br>
    border: 1px solid #000000;<br>
    <br>
  }
  `,
  
  `114.Add a web font with the name "sansation" and the URL "sansation_light.woff".<br>
  body {<br>
    font-family: sansation;<br>
    
  }
  `,
  
  `115.Add @font-face rule for bold characters of the "sansation" font. Use the URL "sansation_bold.woff".<br>
  @font-face {<br>
    font-family: sansation;<br>
    src: url(sansation_light.woff);<br>
    <br>
  }<br>
  <br>
  body {<br>
    font-family: sansation;<br>
  }<br>
  &ltp&gtThis is &ltstrong&gtanother&lt/strong&gt paragraph.&lt/p&gt
  `,
  
  `116.With the transform property, move the &ltdiv&gt element 100px to the right, and 200px down.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  `,
  
  `117.With the transform property, rotate the &ltdiv&gt element 45 degrees<tb>t
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    margin: 50px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }
  `,
  
  `118.With the transform property, change the size of the &ltdiv&gt to half its width, but double its height.
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    margin: 50px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }
  `,
  
  `119.With the transform property, skew the &ltdiv&gt element 20 degrees along the X-axis, and 30 degrees along the Y-axis.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    margin: 50px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }
  `,
  
  `120.With the transform property, rotate the &ltdiv&gt element 150deg around its X-axis.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }<br>
  &ltdiv&gtThis is a div element&lt/div&gt
  `,
  
  `121.With the transform property, rotate the &ltdiv&gt element 120deg around its Y-axis.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }<br>
  &ltdiv&gtThis is a div element&lt/div&gt<br>
  `,
  
  `122.With the transform property, rotate the &ltdiv&gt element 90deg around its Z-axis.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: lightblue;<br>
    border: 1px solid black;<br>
    <br>
  }<br>
  &ltdiv&gtThis is a div element&lt/div&gt<br>
  `,
  
  `123.Add a 2 second transition effect for width changes of the &ltdiv&gt element.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    <br>
  }<br>
  div:hover {<br>
    width: 300px;<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  
  `,
  
  `124.Specify that the transition of the &ltdiv&gt element should have a "ease-in-out" speed curve.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    transition: width 2s;<br>
    <br>
  }<br>
  <br>
  div:hover {<br>
    width: 300px;<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  
  `,
  
  `125.Specify that the transition of the &ltdiv&gt element should have a "0.5" second delay before starting.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    transition: width 2s;<br>
    <br>
  }<br>
  <br>
  div:hover {<br>
    width: 300px;<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  `,
  
  `126.Add a 2 second transition effect for background, and transform changes of the &ltdiv&gt element.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    <br>
  }<br>
  <br>
  div:hover {<br>
    background: blue;<br>
    transform: rotate(180deg);<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  `,
  
  `127.Using the transition shorthand property, specify width changes for the &ltdiv&gt element should have:
  "2" second duration, "ease-in-out" speed curve, and a "0.5" second delay before starting.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background: red;<br>
    <br>
  }<br>
  <br>
  div:hover {<br>
    width: 400px;<br>
  }<br>
  &ltdiv&gt&lt/div&gt<br>
  <br>
  &ltp&gtHover over the div element above.&lt/p&gt<br>
  `,
  
  `128.Add a 2 second animation for the &ltdiv&gt element, which changes the color from red to blue. Call the animation "example"<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    background-color: red;<br>
    <br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    <br>
  }
  `,
  
  `129.
  Add the following 5 steps to the animation "example" (using 0%, 25%, 50%, 75%, and 100%):<br>
  1.	0% - Set background color to "red", left position to "0px", top position to: "0px"<br>
  2.	25% - Set background color to "blue", left position to "0px", top position to: "200px"<br>
  3.	50% - Set background color to "green", left position to "200px", top position to: "200px"<br>
  4.	75% - Set background color to "yellow", left position to "200px", top position to: "0px"<br>
  5.	100% - Set background color to "red", left position to "0px", top position to: "0px"<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 4s;<br>
  }<br>
  <br>
  @keyframes example {<br>
  }
  
  `,
  
  `130.Specify that the animation of the &ltdiv&gt element should have a "1" second delay before starting.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 2s;<br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    0%   {background-color: red; left:0px;}<br>
    50%  {background-color: yellow; left:200px;}<br>
    100% {background-color: red; left:0px;}<br>
  }
  
  `,
  
  `131.Specify that the animation of the &ltdiv&gt element should continue to loop for ever.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 2s;<br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    0%   {background-color: red; left:0px;}<br>
    50%  {background-color: yellow; left:200px;}<br>
    100% {background-color: red; left:0px;}<br>
  }
  `,
  
  `132.Specify that the animation of the &ltdiv&gt element should alternate between running forwards and backwards.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 4s;<br>
    animation-iteration-count: infinite;  <br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    0%   {background-color: red; left:0px; top:0px;}<br>
    25%  {background-color: blue; left:0px; top:200px;}<br>
    50%  {background-color: green; left:200px; top:200px;}<br>
    75%  {background-color: yellow; left:200px; top:0px;}<br>
    100% {background-color: red; left:0px; top:0px;}<br>
  }
  `,
  
  `133.Specify that the animation of the &ltdiv&gt element should have a "ease-in-out" speed curve.<br>
  div {<br>
    width: 100px;<br>
    height: 100px;<br>
    position: relative;<br>
    background-color: red;<br>
    animation-name: example;<br>
    animation-duration: 4s;<br>
    <br>
  }<br>
  <br>
  @keyframes example {<br>
    0%   {background-color: red; left:0px;}<br>
    50%  {background-color: yellow; left:200px;}<br>
    100% {background-color: red; left:0px;}<br>
  }
  `

  ];