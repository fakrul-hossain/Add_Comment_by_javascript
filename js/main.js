// add comment 
document.getElementById('review-btn').addEventListener('click', function(){
    const comment = document.getElementById('floatingTextarea2');
    const commentValue = comment.value;
    const p = document.createElement('p')
    p.innerText = commentValue
    
    document.getElementById('comment-container').appendChild(p)
    document.getElementById('floatingTextarea2').value = '';
})