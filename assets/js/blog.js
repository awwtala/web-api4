const blogsData = JSON.parse(localStorage.getItem("blogs"));

const buttonEl = document.querySelector("#backButton"); 

buttonEl.addEventListener("click", function () {
  window.location = "./index.html";
});

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < blogsData.length; i++) {
    const myBlogs = document.createElement("div");
    const usernameEl = document.createElement("p");
    usernameEl.textContent = blogsData[i].username;
    const titleEl = document.createElement("h1");
    titleEl.textContent = blogsData[i].title;
    const contentEl = document.createElement("p");
    contentEl.textContent = blogsData[i].content;

    console.log = usernameEl;
    myBlogs.appendChild(titleEl);
    myBlogs.appendChild(contentEl);
    myBlogs.appendChild(usernameEl);
    document.getElementById("main").appendChild(myBlogs);
  }
});

//todo: get blogs from local storage.
// Retrieve the blog posts from local storage

//loop through the array
// Check if there are any blog posts in local storage
//paste the blogs on the page. 21-27 week4
