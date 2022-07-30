window.onload = function () {

  // Мобильное меню
	function menu(btn) {
		var $this = undefined,
				drop = undefined,
				close = $('.js-menu-close'),
        body = $('body');
		btn.on('click', function () {
			$this = $(this);
			drop = $('#' + $this.data('menu'));
			$this.toggleClass('is-active');
			drop.toggleClass('open');
      body.toggleClass('lock');
			$(document).mouseup(function (e) {
				if (!$this.is(e.target)
					&& $this.has(e.target).length === 0
					&& !drop.is(e.target)
					&& drop.has(e.target).length === 0) {
					$this.removeClass('is-active');
					drop.removeClass('open');
          body.removeClass('lock');
				}
			});
		})
		close.on('click', function () {
			$('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
			$('#' + $(this).data('drop')).removeClass('open');
      body.removeClass('lock');
		})
	}
	menu($('.js-menu-hamb'));

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

  // // Swiper
  // if ($('#swiper').length) {
  //   const swiper = new Swiper('#swiper', {
  //     // Optional parameters
  //     slidesPerView: 1,

  //     // If we need pagination
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },

  //     // Navigation arrows
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },

  //     // And if we need scrollbar
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //     },
  //   });
  // }

  // // Air Datepicker
  // new AirDatepicker('#airDatepicker', {
  //   position: 'right top',
  // });

  // // Magnific Popup
  // $('.open-popup-link').magnificPopup({
  //   mainClass: 'mfp-fade'
  // });

  // // Табы
	// function tabs() {
  //   const tabs = $('.js-tabs');
	// 	if (tabs.length) {
	// 		tabs.each( function () {
  //       let triggers = $(this).find('.js-tabs-trigger');
  //       let contents = $(this).find('.js-tabs-content');
  //       let time = 300;
  //       triggers.on('click', function () {
  //         let trigger = $(this);
  //         let content = $('.js-tabs-content[data-href="' + trigger.attr('href') +'"]');
  //         if (!trigger.hasClass('active')) {
  //           triggers.removeClass('active');
  //           trigger.addClass('active');
  //           contents.hide();
  //           contents.removeClass('open');
  //           content.fadeIn(time, function () {
  //             $(this).addClass('open');
  //           });
  //         }else {
  //           return false;
  //         }
  //       })
  //     });
	// 	}
	// }
	// tabs();

  // // Выпадайки при клике по кнопке
	// // Задать блокам выпадайкам айдишник совпадающий с data-drop="" в кнопке для этого блока
	// // Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
	// function dropBlock(btn) {
	// 	var $this = undefined,
	// 			drop = undefined,
	// 			close = $('.js-drop-close');
	// 	btn.on('click', function () {
	// 		$this = $(this);
	// 		drop = $('#' + $this.data('drop'));
	// 		$this.toggleClass('is-active');
	// 		drop.toggleClass('open');
	// 		$(document).mouseup(function (e) {
	// 			if (!$this.is(e.target)
	// 				&& $this.has(e.target).length === 0
	// 				&& !drop.is(e.target)
	// 				&& drop.has(e.target).length === 0) {
	// 				$this.removeClass('is-active');
	// 				drop.removeClass('open');
	// 			}
	// 		});
	// 	})
	// 	close.on('click', function () {
	// 		$('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
	// 		$('#' + $(this).data('drop')).removeClass('open');
	// 	})
	// }
	// dropBlock($('.js-drop-btn'));

}