// 1ST PAGE
//handle form submittion
//store blog article
//redirect to the blog page

const buttonEl = document.querySelector("#submitButton"); //Forming a submit button that goes to next page

document.getElementById("dataForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the form data
  const username = document.getElementById("username").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const submiButton = document.getElementById("submit");

  const blog = {
    username: username,
    title: title,
    content: content,
  };
  console.log(blog);

  const blogsData = localStorage.getItem("blogs");
  let blogs = JSON.parse(blogsData);

  if (!blogs) {
    blogs = [];
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  document.getElementById("username").value = "";
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  window.location.href = `blog.html`;
});
