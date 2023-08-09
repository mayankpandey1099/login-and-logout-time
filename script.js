const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            updateLastUserActivityTime()
                .then(() => {
                    console.log('Post:', post.title);
                    console.log('Last Activity Time:', lastActivityTime);
                    resolve();
                });
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deletedPost = posts.pop();
            if (deletedPost) {
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}

Promise.all([
    createPost({ title: 'Post 1' }),
    createPost({ title: 'Post 2' }),
    createPost({ title: 'Post 3' })
])
    .then(() => {
        return deleteLastPost();
    })
    .then(deletedPost => {
        console.log('Remaining Posts:', posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
