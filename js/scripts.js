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
			$('[data-menu="' + $(this).data('drop') +'"]').removeClass('is-active');
			$('#' + $(this).data('drop')).removeClass('open');
      body.removeClass('lock');
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
        el: '.stores__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.stores__arrow--next',
        prevEl: '.stores__arrow--prev',
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

  if ($('#newspageSlider').length) {
    const swiper = new Swiper('#newspageSlider', {
      slidesPerView: 1,
      pagination: {
        el: '.newspage__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.newspage__arrow--next',
        prevEl: '.newspage__arrow--prev',
      },
    });
  }

  if ($('#productSlider').length) {
    const swiper = new Swiper('#productSlider', {
      slidesPerView: 1,
      pagination: {
        el: '.product__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.product__arrow--next',
        prevEl: '.product__arrow--prev',
      },
    });
  }

  if ($('#releaseSlder').length) {
    const swiper = new Swiper('#releaseSlder', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.release__arrow--next',
        prevEl: '.release__arrow--prev',
      },
    });
  }

  if ($('#discographySlider').length) {
    const swiper = new Swiper('#discographySlider', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.discography__arrow--next',
        prevEl: '.discography__arrow--prev',
      },
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
      if (!$(this).hasClass('is-active')) {
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
      }else {
        $this.removeClass('is-active');
        drop.stop().slideUp(200);
      }
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
        backBlur = $('.back-blur');
    btn.on('focus', function () {
      $this = $(this);
      drop = $('#' + $this.data('drop'));
      $this.addClass('is-active');
      drop.stop().slideDown(200);
      backBlur.addClass('active');
      $(document).mouseup(function (e) {
        if (!$this.is(e.target)
          && $this.has(e.target).length === 0
          && !drop.is(e.target)
          && drop.has(e.target).length === 0) {
          $this.removeClass('is-active');
          drop.stop().slideUp(200);
          backBlur.removeClass('active');
        }
      });
    })
  }
  dropBlockFocus($('.js-drop-input'));

  // Видео youtube для страницы
  function uploadYoutubeVideo() {
    if ($(".js-youtube")) {

      $(".js-youtube").each(function () {
        // Зная идентификатор видео на YouTube, легко можно найти его миниатюру
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
        $(this).append($('<div class="video__play"><img src="img/icons/play.svg" alt="Play"></div>'));

      });

      $('.video__play, .video__wrapper').on('click', function () {
        // создаем iframe со включенной опцией autoplay
        let wrapp = $(this).closest('.js-youtube'),
          videoId = wrapp.attr('id'),
          play = wrapp.find('.video__play'),
          iframe_url = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1";

        if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

        // Высота и ширина iframe должны быть такими же, как и у родительского блока
        let iframe = $('<iframe/>', {
          'frameborder': '0',
          'src': iframe_url,
          'allow': "autoplay"
        })

        // Заменяем миниатюру HTML5 плеером с YouTube
        wrapp.find('.video__wrapper').append(iframe);

        // Удаляем кнопку
        play.remove();

      });
    }
  };
  uploadYoutubeVideo();

  // Highcharts | График
  function chartByStatistic() {
    if ($('#chartByStatistic').length) {
      const chart = $('#chartByStatistic');
      const title = chart.data('title');
      const range = chart.data('range');
      Highcharts.chart('chartByStatistic', {
        chart: {
          type: 'spline'
        },
        title: {
          text: title
        },
        xAxis: {
          categories: ['мин. цена', 'средняя цена', 'макс. цена'],
        },
        yAxis: {
          type: 'logarithmic',
          minorTickInterval: 0.1,
          title: false,
          lineColor: '#666666',
        },
        tooltip: {
        },
        series: [{
          name: 'Цена',
          data: range,
          // pointStart: 1
        }],
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: true,
              format: '{y} ₽',
              color: '#3e4757'
            },
            color: '#DDDFE0',
            marker: {
              fillColor: '#5e40e7'
            }
          }
        },
        tooltip: {
          valueSuffix: '₽'
        },
        legend: false,
        credits: false,
      });   
    }
  }
  chartByStatistic();

}