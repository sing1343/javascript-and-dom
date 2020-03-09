//Task 1
//Access HTML element with id tag-line.
let tag = document.getElementById("tag-line");

//Access all h2 headings that belong to div with the class name bg-main-content.
let headings = document.querySelectorAll(".bg-main-content h2");

//Create the variable collect and assign it with content of tag-line.
let collect = `${tag.textContent}\n`;

//Loop through the array of headings and append the content of each heading to variable collect
for(let heading of headings){
	collect += `t${heading.textContent}\n`;
}

//After the loop, use alert to print collect
alert(collect);

//Printed output:

//Task 2
//Access 13th div with class name box that belongs to div with the class name bg-main-content.
//You can name the variable when_to_launch.
//Use property children to "scoop" in array all HTML elements that belong to that div.
//Create the variable collect and assign it with content of heading that belongs to gotten array.
//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
//After the loop, use alert to print collect
//Printed output:

let bxs = document.querySelectorAll('.bg-main-content .box');
let when_to_launch = bxs[12];
let scoopedElements = when_to_launch.children;

let collect1 = `${scoopedElements[0].innerText}\n${scoopedElements[1].innerText}`
alert(collect1);
//Submission
//Create a GitHub repository called "javascript-and-dom".

//Add the gh-pages branch to the javascript-and-dom repository.

//index.html has to be in the root of your repository .

//Submit the link to your gh-pages rendered site.

//Eg: https://abcd0001.github.io/ui-and-dynamic-content/index.html

//(abcd0001 - your GitHub username)

 

//TEST your link to make sure it works before submitting.

//Links that return a 404 error are worth zero.