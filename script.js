function addArticle() {
    const articleTitleInput = document.getElementById('articleTitle');
    const forum = document.getElementById('forum');
    const articleBlock = document.createElement('div');
    articleBlock.classList.add('article');
    const articleTitle = document.createElement('h2');
    articleTitle.textContent = articleTitleInput.value;
    articleBlock.appendChild(articleTitle);
    const commentButton = document.createElement('button');
    commentButton.textContent = 'Add Comment';
    commentButton.onclick = function () {
        addComment(articleBlock);
    };
    articleBlock.appendChild(commentButton);
    forum.appendChild(articleBlock);
    articleTitleInput.value = '';
}

function addComment(articleBlock) {
    const commentBlock = document.createElement('div');
    commentBlock.classList.add('comment');
    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Add a comment...';
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Comment';
    submitButton.onclick = function () {
        submitComment(commentBlock, commentInput);
    };

    
    commentBlock.appendChild(commentInput);
    commentBlock.appendChild(submitButton);
    articleBlock.appendChild(commentBlock);
}

function submitComment(commentBlock, commentInput) {
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
        const commentElement = document.createElement('p');
        commentElement.textContent = commentText;
        commentBlock.appendChild(commentElement);
        commentInput.value = '';
    }
}
