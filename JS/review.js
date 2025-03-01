function rateMovie(rating) {
    const ratingButtons = document.querySelectorAll('.rating-button');
    ratingButtons.forEach((button, index) => {
        if (index < rating) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
