/*
          JS Exercises
          EX11) Write a function to add a new link into the navbar
          EX12) Write a function to change the color of the main title
          EX13) Write a function to change the background of the jumbotron
          EX14) Write a function to remove all the links under "Elsewhere"
          EX15) Write a function to change the column size for heading in jumbotron
          EX16) Write a function to remove the "Search" magnifying glass icon
          EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
          EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
          EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
          EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
      */

// 1
const addNewLink = function () {
    let navbarId = document.getElementById("page-nav")
    let createLink = document.createElement("a")
    createLink.innerText = "Math"
    navbarId.appendChild(createLink)
}
let output1 = addNewLink()
// console.log(output1)

// 2
const changeTitle = function () {
    let getTitle = document.getElementById("title-page")
    getTitle.style.backgroundColor = " green"
}
// console.log(changeTitle())

// 3
// querySelectorAll is not work
const changeBackgroundJumbotron = function () {
    let jumbotron = document.querySelector(".jumbotron")
    jumbotron.setAttribute(`style`, `background-color: #551122 !important`)
}
// console.log(changeBackgroundJumbotron())

// 4
const js4 = function () {
    document.querySelectorAll('.blog-sidebar ol')[1].innerHTML = ''
}
// console.log(js4())

// 5
// it will affect if you remove task 1 of CSS
const changeHeadingSize = function () {
    document.querySelectorAll('.jumbotron div')[0].classList.remove('col-md-6')
}
// console.log(changeHeadingSize())

// 6
const removeIcon = function () {
    document.getElementById("search-icon").style.display = "none"
}
// console.log(removeIcon())