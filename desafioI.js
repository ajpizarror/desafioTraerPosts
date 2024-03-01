let BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

const getPosts = async (url = BASE_URL) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Este es el error:", error);
  }
};

const postData = document.getElementById("post-data");

const showPosts = async () => {
  let response = await getPosts();
  let postList = "";
  postList += `<ul><li>${response.title}</li></ul><p>${response.body}</p>`;
  postData.innerHTML = postList;
};

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  showPosts();
});
