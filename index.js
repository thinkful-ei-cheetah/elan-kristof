'use strict';

function jQuery () {
  $('.thumbnails').on('click', 'input', function(event) {
  let newSrc = this.src;
  $('.hero-img').attr({'src': newSrc, 'alt': this.alt});
  $('.thumbnail').attr('aria-pressed', 'true');
  $('.thumbnail').not(this).attr('aria-pressed', 'false');
});
};

$(jQuery);