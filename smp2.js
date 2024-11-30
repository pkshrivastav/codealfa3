
// Selecting DOM elements
const postForm = document.getElementById('post-form');
const postContent = document.getElementById('post-content');
const postsContainer = document.getElementById('posts-container');

let posts = [];

// Function to create a new post
function createPost(content) {
    const post = {
        id: Date.now(),
        content: content,
        likes: 0
    };
    posts.push(post);
    displayPosts();
}

// Function to display posts in the feed
function displayPosts() {
    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>User</h3>
            <p>${post.content}</p>
            <p class="likes-count">${post.likes} Likes</p>
            <button class="like-btn" data-id="${post.id}">Like</button>
        `;
        postsContainer.appendChild(postElement);
    });

    // Add event listeners to like buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const postId = parseInt(event.target.dataset.id);
            likePost(postId);
        });
    });
}

// Function to like a post
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes += 1;
    displayPosts();
}

// Event listener for form submission
postForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const content = postContent.value.trim();

    if (content) {
        createPost(content);
        postContent.value = '';
    }
});
