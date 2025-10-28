// Initialisierung der Beiträge aus LocalStorage (falls vorhanden)
document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
});

// Funktion zum Laden der Beiträge
function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = 
            <><h3>${post.title}</h3><p>${post.content}</p><button class="comment-btn" data-post-id="${post.id}">Kommentare anzeigen</button><div class="comments" id="comments-${post.id}">
                <textarea id="comment-input-${post.id}" placeholder="Kommentar hinzufügen..."></textarea>
                <button onclick="addComment(${post.id})">Kommentar hinzufügen</button>
                <ul id="comment-list-${post.id}">
                    ${post.comments.map(comment => <li>${comment}</li>).join('')}
                </ul>
            </div></>
        ;
        postsContainer.appendChild(postDiv);
    });
}

// Funktion zum Hinzufügen eines neuen Beitrags
document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    const newPost = {
        id: Date.now(),
        title,
        content,
        comments: []
    };

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    loadPosts(); // Beiträge neu laden
});

// Funktion zum Hinzufügen eines Kommentars
function addComment(postId) {
    const commentInput = document.getElementById(comment-input-${postId});
    const comment = commentInput.value.trim();
    if (comment === '') return;

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts.find(post => post.id === postId);
    if (post) {
        post.comments.push(comment);
        localStorage.setItem('posts', JSON.stringify(posts));
        commentInput.value = ''; // Eingabefeld leeren
        loadPosts(); // Beiträge neu laden
    }
}

// Funktion zum Umschalten der Kommentaransicht
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('comment-btn')) {
        const postId = event.target.getAttribute('data-post-id');
        const commentsSection = document.getElementById(comments-${postId});
        commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
    }
});