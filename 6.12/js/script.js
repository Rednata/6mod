const modalBtn = $('.present__btn');
const modalClose = $('.modal-order__close');
const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');
const modalOrder = $('.modal-order');

const modalWrapper = $('.modal-order__wrapper');

modalBtn.click(function() {
  modalOrder.show(500);
})

modalClose.click(function() {
  modalOrder.hide(500);
  console.log('modalOrder: ', modalOrder);
})

modalOrder.on('click', function({target}) {
  const elem = $(target);  
  if (elem.is(modalOrder)) {
    modalOrder.slideUp(200);
  }
})

modalOrderInput.focus(function() {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder')}`)
})

modalOrderInput.blur(function() {
  modalOrderTitle.text(`Заполните форму`)
})



const bar = function() {
  console.log($(this));
  $(this).animate({
    height: `-=10px`},
    1000,
    function() {alert('sdfsdfsdf')

    }
  );
  
  // $(this).next().slideUp();
}



$('.characteristics__item').on('click', bar)

$('.modal-order__form').submit(function(event) {
  event.preventDefault();
  $.ajax( {
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    // success(data) {
    //   modalOrderTitle.text('Спасибо, Ваша заявка принята, номер заявки' + data.id)
    //   $('.modal-order__form').slideUp(300)
    // },
    success: function(data) {
      modalOrderTitle.text('Спасибо, Ваша заявка принята, номер заявки' + data.id)
      $('.modal-order__form').slideUp(300)
    },
    error() {
      modalOrderTitle.text('Попробуйте позже')
    }

  })
});


//   ===========  Burger-menu ===============
const navigationClose = $('.navigation__close');
const navigation = $('.navigation');

const closeMenu = () => {
  navigation.animate({
    left: '-400px',
  }, 300);
  navigation.removeClass('navigation_active');
};

const openMenu = () => {
  navigation.animate({
    left: 0,
  }, 500, function() {
    navigationClose.animate({
      opacity: 1,
    }, 300,'swing');
    navigation.addClass('navigation_active');
  });
}

$('.header__burger').on('click', function() {
  openMenu();
})

navigationClose.click(() => closeMenu());

$('body').click(function(e) {
  if (navigation.hasClass('navigation_active') &&
    !(e.target.closest('.header'))) {
    closeMenu();
  }
})