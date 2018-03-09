'use strict';

function showComments(list) {
  console.log(list);
  const commentsContainer = document.querySelector('.comments');
  const fragment = list.reduce((commFragm, comment) => {
    commFragm.appendChild( createComment(comment) );
    return commFragm;
  }, document.createDocumentFragment());
  commentsContainer.appendChild(fragment);

  commentsContainer.style.whiteSpace = 'pre-line';
  commentsContainer.firstElementChild.style.whiteSpace = 'normal';
}

function createComment(comment) {
  const commentWrap = document.createElement('div');
  const photo = document.createElement('div');
  const avatar = document.createElement('div');
  const commentBlock = document.createElement('div');
  const commentText = document.createElement('p');
  const bottomComment = document.createElement('div');
  const commentDate = document.createElement('div');
  const commentActions = document.createElement('ul');
  const complain = document.createElement('li');
  const reply = document.createElement('li');

  commentWrap.classList.add('comment-wrap');
  photo.classList.add('photo');
  photo.setAttribute('title', comment.author.name);
  avatar.style = `background-image: url('${comment.author.pic.toString()}')`;

  commentBlock.classList.add('comment-block');
  commentText.classList.add('comment-text');
  commentText.textContent = comment.text;
  // commentText.textContent = comment.text.split('\n').join('\r\n');
  // comment.text.split('\n').map(str => document.createTextNode(str)).forEach(textNode => {
  //   commentText.appendChild(textNode);
  // });

  bottomComment.classList.add('bottom-comment');
  commentDate.classList.add('comment-date');
  commentDate.innerText = new Date(comment.date).toLocaleString('ru-Ru');

  commentActions.classList.add('comment-actions');
  complain.classList.add('complain');
  reply.classList.add('reply');


  commentWrap.appendChild(photo);
  commentWrap.appendChild(commentBlock);
  photo.appendChild(avatar);

  commentBlock.appendChild(commentText);
  commentBlock.appendChild(bottomComment);

  bottomComment.appendChild(commentDate);
  bottomComment.appendChild(commentActions);
  commentActions.appendChild(complain);
  commentActions.appendChild(reply);

  return commentWrap;
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);

// Почему если добавить whiteSpace = 'pre-line', то первый верхний блок (с формой) 
// стоновится больше? там ведь в тексте нет переносов строки.
