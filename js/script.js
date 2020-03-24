// "use strict"
$ (function() { 
	// left menu block open
		$('.burger-btn').on('mouseenter', () => { 
				$(this).addClass('active'); 
			})  
			$('.burger-btn').on('mouseleave', () => {
				$(this).removeClass('active');
		})   
			$('.burger-btn').on('click', () => {    
				$('.dropmenu').toggleClass('open');
				$('.content').toggleClass('to-right');    
				$('.news').toggleClass('to-right2'); 
		});   
  // search btn 
			$('.search-btn').on('click', () => {  
					$('.contacts__form-wrap').addClass('to-left');
					$('.contacts__form input').focus();  
			});	
 // search overlay
		$(document).on('mouseup', function (e)  {
			var searchField = $("form.contacts__form"), 
				overlay = $('.contacts__form-wrap');   

			if (!searchField.is(e.target) && searchField.has(e.target).length === 0) { 
			overlay.removeClass('to-left'); 
			$('.contacts__form input').val(' ');   
		}  
	});
 
 // tabs  
		$('.news__category-tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.news__category-tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.news__category-tab'),  
				index = $(this).closest('li').index(); 
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab-content').find('div.tabs-item').not('div.tabs- item:eq(' + index + ')').slideUp();
			tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
			 
			g.preventDefault(); 
		} );     
(jQuery);   
  
 // swiper-container
			 var swiper = new Swiper('.swiper-container',{
			 	 autoplay: {
    delay: 2000,   
  },    
      scrollbar: {
        el: '.swiper-scrollbar', 
        hide: true,
      },  
    });  
			  var swiperSec = new Swiper('.swiper-container-sec', {
      slidesPerView: 3, 
      spaceBetween: 30, 
      loop: true, 
      	 autoplay: { 
    delay: 2000,   
  },  
      pagination: {
        el: '.swiper-pagination',
        clickable: true,	 
      },
      navigation: {  
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
      },
	});	
   
   
// update tabs accordion
const titles = document.querySelectorAll('.answers__title'),
			items = document.querySelectorAll('.answers__item');
  
	for (let i = 0; i < items.length; i++) {
 
	    items[i].addEventListener('click', () => {
	        setClass(items, 'active', 'remove'); 
	        if (!items[i].classList.contains('active')) {
	        	items[i].classList.toggle("active");
	        } 
	    });
	}  
function setClass(elem, className, functionName) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].classList[functionName](className);
    }
}
// update tabs accordion end

// sort goods
function sortGoods() {
	  
const cardTitle = document.querySelectorAll('.cards__titles-item'),
			titleSale = document.querySelectorAll('.cards__titles-item')[1],
			titleTop = document.querySelectorAll('.cards__titles-item')[2],
			titlePresent = document.querySelectorAll('.cards__titles-item')[3],
			rowIcon = document.querySelector('li.in-row'),
			cards = document.querySelectorAll('.cards__list .cards__item'),
			cardsBtn = document.querySelectorAll('.cards__list button'),
			cardsList = document.querySelector('.cards__list'),
			categoriesLi = document.querySelector('li.categories'),
			hideListLi = document.querySelectorAll('.categories__hide-list li'),
			hideListLi1 = document.querySelectorAll('.categories__hide-list li')[0],
			hideListLi2 = document.querySelectorAll('.categories__hide-list li')[1];
			hideListLi3 = document.querySelectorAll('.categories__hide-list li')[2];
 
// title sale
			// titleSale.addEventListener('click', () => {
			// 		titleSale.classList.toggle('focus');    
			// 	cards.forEach( (card) => {  

  	// 						if ( titleSale.classList.contains('focus')) {
  	// 							if (!card.querySelector('.sale')) {
  	// 								card.remove();
  	// 								}   
  	// 							} else {  
  	// 								cardsList.appendChild(card);
  	// 						}    
			// 			}); 
			// 		}); 
// title top
			// titleTop.addEventListener('click', () => { 
			// 		titleTop.classList.toggle('focus'); 
			// 	cards.forEach( (card) => {

  	// 						if ( titleTop.classList.contains('focus')) {
  	// 							if (!card.querySelector('.top')) {
  	// 								card.remove(); 
  	// 								} 
  	// 							} else { 
  	// 							cardsList.appendChild(card);
  	// 				} 
			// 	});  
			// });
// title present
			// titlePresent.addEventListener('click', () => {
			// 		titlePresent.classList.toggle('focus');
			// 	cards.forEach( (card) => {

			// 		if (titlePresent.classList.contains('focus')) {
			// 				if (!card.querySelector('.present')) {
			// 					card.remove();
			// 				}
			// 		} else {
			// 			cardsList.appendChild(card);
			// 		}  
			// 	})
			// })
			for (let i = 0; i < cardTitle.length; i++) {
				cardTitle[i].addEventListener('click', () => {
					setClasses(cardTitle, 'focus', 'remove');
					if (!cardTitle[i].classList.contains('focus')) {
						cardTitle[i].classList.toggle('focus');
					}

				});
					function setClasses(elem, className, funcName) {
				for (let i = 0; i < elem.length; i++) {
					elem[i].classList[funcName](className);
					} 
				}		
			}


			// burger icon
			rowIcon.addEventListener('click', () => {
				rowIcon.classList.toggle('focus');
				if (rowIcon.classList.contains('focus')) {
					cardsList.classList.add('row'); 
				} else {  
					cardsList.classList.remove('row');
				}
			});

			// category menu
			for (let i = 0; i < hideListLi.length; i++) {

					hideListLi[i].addEventListener('mousedown', () => {
						setClasses(hideListLi, 'active', 'remove');
						if (!hideListLi[i].classList.contains('active')) {
							hideListLi[i].classList.toggle('active');
						}
						cards.forEach((card) => { 	 

								if (hideListLi1.classList.contains('active') && !card.dataset.goodDutiki) {
									card.remove();
								} else {
									cardsList.appendChild(card);
								} 

								if (hideListLi2.classList.contains('active') && !card.dataset.goodOdezhda) {
									card.remove();
								} else { 
									cardsList.appendChild(card);
								}

						}); 
					
				});
				function setClasses(elem, className, funcName) {
				for (let i = 0; i < elem.length; i++) {
					elem[i].classList[funcName](className);
					} 
				}			
	}
}
sortGoods();
// sort goods end
  

 // cart toggle
 	const openBtn = document.querySelector('.open-cart'),
 				overlay  = document.querySelector('.overlay'),
 				closeBtn = document.querySelector('.cart__close'),
 				cartEmpty = document.querySelector('.cart__empty-text');
 
 				openBtn.addEventListener('click',() => { 
 					overlay.style.display = "block";
 					document.body.style.overflow = 'hidden';
 				});   
 				closeBtn.addEventListener('click', () => { 
 					overlay.style.display = 'none'; 
 					document.body.style.overflow = 'auto';
 				}); 
 // cart toggle end
   

// add and remove goods in cart  
const cartWrapper = document.querySelector('.cart__wrapper'),
			cards = document.querySelectorAll('.cards__list .cards__item');
			 
	cards.forEach( (card) => {   
		const cardBtn = card.querySelector('button'),
					cardClone = card.cloneNode(true);  

			cardBtn.addEventListener('click', () => {  
					cartWrapper.appendChild(cardClone);
					 card.classList.add('added');   
					 cardBtn.textContent = 'Добавлено';

					 console.log(card.dataset);
					showData();
 
					const removeBtn = cartWrapper.querySelectorAll('button.button');

					removeBtn.forEach( (btn) => {
						btn.textContent = 'Удалить из корзины';

						btn.addEventListener("click", () => {
							btn.parentNode.remove();
							card.classList.remove('added'); 
							cardBtn.textContent = 'Купить';   
							showData();
						})
					});  

				}); 		  
	});     
	// add and remove goods in cart end 

// show goods data
	function showData() {   
			const cartWrapper = document.querySelector('.cart__wrapper'),
						cart = document.querySelector('.cart'),
						cardsCart = cartWrapper.querySelectorAll('.cards__item'), 
						goodsCount = document.querySelector('.open-cart .quantity-goods'),
						goodsCountCart = cart.querySelector('.cart__count .quantity-goods'),
						cardPrice = cartWrapper.querySelectorAll('.cards__item-price b'),
						cardPriceTotal = cart.querySelector('.cart__total-price');
 
					goodsCount.textContent = cardsCart.length;	
					goodsCountCart.textContent = cardsCart.length;

					let totalSum = 0;   
					cardPrice.forEach( (price) => {
						let elemPrice = parseInt(price.textContent);
						totalSum = totalSum + elemPrice;
   
						cardPriceTotal.textContent = totalSum; 
					});

					if (cardsCart.length !==0) { 
							cartEmpty.style.display = "none";
							cart.style.height = '100%';  
						} else {     
							cartEmpty.style.display = "block"; 
							cart.style.height = ''; 
							cardPriceTotal.textContent = '0'; 
						} 	
					}

$(window).on("scroll", function() {
	var a = $(this).scrollTop();
	if (a > 200) { 
		$("header").addClass("small")
	} 
	if (a < 200) { 
		$("header").removeClass("small")
	}
});


$(".phone").mask("+7 (999) 999-99-99");
	}); 		