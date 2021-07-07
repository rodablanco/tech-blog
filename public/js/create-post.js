
// define function to create post
const createPost = async (event) => {
  event.preventDefault();

  // collect inputs from textarea
  const title = document.querySelector('#create-post-title').value.trim();
  const description = document.querySelector('#create-post-description').value.trim();
  // console.log(title, description);

  if (title && description) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if post creation is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document
  .querySelector('.create-post-form')
  .addEventListener('submit', createPost);