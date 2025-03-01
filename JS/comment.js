    const commentInput = document.getElementById('commentInput');
    const commentOutput = document.getElementById('commentOutput');
    const submitButton = document.getElementById('submitButton');
    const stars = document.querySelectorAll('.star');

    let currentRating = 0;

    stars.forEach(star => {
      star.addEventListener('click', () => {
        currentRating = star.dataset.rating;
        stars.forEach((s, index) => {
          if (index < currentRating) {
            s.textContent = '★';
          } else {
            s.textContent = '☆';
          }
        });
      });
    });

    submitButton.addEventListener('click', () => {
      const comment = commentInput.value;

      const newComment = document.createElement('div');
      newComment.classList.add('comment-card');

      let ratingOutput = '';
      for (let i = 0; i < currentRating; i++) {
        ratingOutput += '★';
      }
      for (let i = currentRating; i < 5; i++) {
        ratingOutput += '☆';
      }

      newComment.innerHTML = `
        <div class="user-info">
            <img src="/IMG/5b6ff500-1663-11ec-ae31-05a670d2d590--rtactordefault.png" alt="⚠︎ Error No image">
          <h3>ชื่อผู้ใช้</h3>
        </div>
        <p class="comment-text">${comment}</p>
        <div class="rating">${ratingOutput}</div>
      `;

      commentOutput.appendChild(newComment);
      commentInput.value = '';
      currentRating = 0;
      stars.forEach(s => s.textContent = '☆');

      // เพิ่ม Event Listener สำหรับการคลิก comment
      const commentText = newComment.querySelector('.comment-text');
      commentText.addEventListener('click', () => {
        newComment.classList.toggle('expanded');
      });
    });
