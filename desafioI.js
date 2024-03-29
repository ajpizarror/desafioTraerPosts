let BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

const postData = document.getElementById("post-data");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  showPosts();
});

const showPosts = async () => {
  let response = await getPosts();
  let dataPost = "";
  response.forEach(
    (response) =>
      (dataPost += `<ul><li><h3>${response.title}</h3><p>${response.body}</p></li></ul>
  `)
  );
  postData.innerHTML = dataPost;
};

const getPosts = async (url = BASE_URL) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data.map((titlePar) => (titlePar.title)))
    return data;
  } catch (error) {
    console.error("Este es el error:", error);
  }
};
