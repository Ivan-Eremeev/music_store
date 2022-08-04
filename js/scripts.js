window.onload = function () {

  // Мобильное меню
	function menu(btn) {
		var $this = undefined,
				drop = undefined,
				close = $('.js-menu-close'),
        body = $('body');
        backBlur = $('.back-blur');
		btn.on('click', function () {
			$this = $(this);
			drop = $('#' + $this.data('menu'));
			$this.toggleClass('is-active');
			drop.toggleClass('open');
      body.toggleClass('lock');
      backBlur.toggleClass('active');
			$(document).mouseup(function (e) {
				if (!$this.is(e.target)
					&& $this.has(e.target).length === 0
					&& !drop.is(e.target)
					&& drop.has(e.target).length === 0) {
					$this.removeClass('is-active');
					drop.removeClass('open');
          body.removeClass('lock');
          backBlur.removeClass('active');
				}
			});
		})
		close.on('click', function () {
			$('[data-menu="' + $(this).data('drop') +'"]').removeClass('is-active');
			$('#' + $(this).data('drop')).removeClass('open');
      body.removeClass('lock');
      backBlur.removeClass('active');
		})
	}
	menu($('.js-menu-hamb'));

  // Открытие подменю
  function openSubmenu() {
    let item = $('.menu__link--childin');
    let submenu = $('.menu__submenu');
    item.on('click', function (e) {
      e.preventDefault();
      let itemCurrent = $(this);
      let submenuCurrent = itemCurrent.siblings('.menu__submenu');
      itemCurrent.toggleClass('active');
      submenuCurrent.toggleClass('open');
      $(document).mouseup(function (e) {
        if (!itemCurrent.is(e.target)
          && itemCurrent.has(e.target).length === 0
          && !submenuCurrent.is(e.target)
          && submenuCurrent.has(e.target).length === 0) {
          itemCurrent.removeClass('is-active');
          submenuCurrent.removeClass('open');
        }
      });
      if ($(window).width() <= 768) {
        submenuCurrent.stop().slideToggle(300);
      }
    });
    $(window).resize(function () {
      if ($(window).width() > 768) {
        submenu.show();
      }else {
        submenu.hide();
      }
    });
  }
  openSubmenu();

  // Показать еще в фильтрах
  function showMoreFilters() {
    const list = $('.js-more-list');
    const btn = $('.js-more-btn');
    list.each(function () {
      $(this).find('li').each(function (index) {
        if (index > 4) {
          $(this).fadeOut();
        }
      })
    })
    btn.on('click', function () {
      $(this).fadeOut();
      $(this).parent().find($('.js-more-list li')).fadeIn();
    })
  }
  showMoreFilters();

  // Очистить фильтр 
  function clearFilter() {
    let clearBnt = $('.js-filters__clear');
    clearBnt.on('click', function () {
      $(this).closest('.js-filters').find('input').prop('checked', false).val('');
      $(this).closest('.js-filters').find('select').prop('selectedIndex', 0);
    })
  }
  clearFilter();

  // Swiper
  if ($('#storesSwiper').length) {
    const swiper = new Swiper('#storesSwiper', {
      slidesPerView: 1,
      spaceBetween: 26,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        500: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 4,
        }
      }
    });
  }

  // Magnific Popup
  $('.open-popup-link').magnificPopup({
    mainClass: 'mfp-fade',
    callbacks: {
      open: function () {
        $('.back-blur').addClass('active');
      },
      close: function () {
        $('.back-blur').removeClass('active');
      }
    }
  });

  // JQuery Inputmask
  $('.js-mask-tel').inputmask("+7 999 999-99-99");

  // Показать пароль
  $('.popup__input-show-password').on('click', function () {
    let $this = $(this);
    let input = $this.siblings('input');
    if (input.attr('type') == 'password') {
      $this.addClass('active');
      input.attr('type', 'text');
    }else {
      $this.removeClass('active');
      input.attr('type', 'password');
    }
  })

  // Табы
	function tabs() {
    const tabs = $('.js-tabs');
		if (tabs.length) {
			tabs.each( function () {
        let triggers = $(this).find('.js-tabs-trigger');
        let contents = $(this).find('.js-tabs-content');
        let time = 300;
        triggers.on('click', function (e) {
          e.preventDefault();
          let trigger = $(this);
          let content = $('.js-tabs-content[data-href="' + trigger.attr('href') +'"]');
          if (!trigger.hasClass('active')) {
            triggers.removeClass('active');
            trigger.addClass('active');
            contents.hide();
            contents.removeClass('open');
            content.fadeIn(time, function () {
              $(this).addClass('open');
            });
          }else {
            return false;
          }
        })
      });
		}
	}
	tabs();

  // Выпадайки при клике по кнопке slide
	function dropBlockSlide(btn) {
		var $this = undefined,
				drop = undefined,
				close = $('.js-drop-close');
		btn.on('click', function () {
			$this = $(this);
			drop = $('#' + $this.data('drop'));
			$this.toggleClass('is-active');
			drop.stop().slideToggle(200);
			$(document).mouseup(function (e) {
				if (!$this.is(e.target)
					&& $this.has(e.target).length === 0
					&& !drop.is(e.target)
					&& drop.has(e.target).length === 0) {
					$this.removeClass('is-active');
					drop.stop().slideUp(200);
				}
			});
		})
		close.on('click', function () {
			$('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
      $('#' + $(this).data('drop')).stop().slideUp(200);
		})
	}
	dropBlockSlide($('.js-drop-btn-slide'));

  // Выпадайки при фокусе по input
  function dropBlockFocus(btn) {
    var $this = undefined,
      drop = undefined,
      close = $('.js-drop-close');
    btn.on('focus', function () {
      $this = $(this);
      drop = $('#' + $this.data('drop'));
      $this.addClass('is-active');
      drop.stop().slideDown(200);
      $(document).mouseup(function (e) {
        if (!$this.is(e.target)
          && $this.has(e.target).length === 0
          && !drop.is(e.target)
          && drop.has(e.target).length === 0) {
          $this.removeClass('is-active');
          drop.stop().slideUp(200);
        }
      });
    })
    close.on('click', function () {
      $('[data-drop="' + $(this).data('drop') + '"]').removeClass('is-active');
      $('#' + $(this).data('drop')).stop().slideUp(200);
    })
  }
  dropBlockFocus($('.js-drop-input'));

}