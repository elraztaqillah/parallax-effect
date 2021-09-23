// #btw ini harus tersambung jquery, script ada di file index
/*sebelumnya kita harus tau jarak antar element dgn browser */

// $(window).scroll(function(){
// 	 var wScroll = $(this).scrollTop();
// 	 console.log(wScroll);
// 	 });
	// @jquery tlg carikan element window(seluruhnya),jika di scroll


////

//parallax
//about
$(window).on('load', function() {
	//load; refresh
	$('.kiri').addClass('muncul');
	$('.kanan').addClass('muncul');
});

$(window).scroll(function(){
	 var wScroll = $(this).scrollTop();
	 
	 // Jumbotron
	 $('.jumbotron img').css({
	 	'transform' : 'translate(0px, '+ wScroll/4 +'%)'

	 	// @mengubah ke file css & mengeditnya
	 	// @ x=0=horizontal ; tdk kita atur 
	 	// @/4; agar gambar jalan lambat
	 });

	 $('.jumbotron h1').css({
	 	'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	 });

	 $('.jumbotron p').css({
	 	'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	 });

	 // Portfolio
	 // if (wScroll > 1000) {
	 // 	console.log('ok');
	 // }
	 // @jika sdh mencapai ketinggian tsb akan menampilkan 'ok'

	 if (wScroll > $('.portfolio').offset().top - 250 ) {

	 	$('.portfolio .card-img-top').each(function(i) {
	 								// @each; setiap element akan diberikan fungsi
	 		setTimeout(function() {
	 			$('.portfolio .card-img-top').eq(i).addClass('muncul');
	 								// i; index utk setiap element gambar
	 		}, 300 * (i+1));
	 	});
	 	
	 }
	 // @jquery carikan .portfolio jarak dr atas
	 // disaat ketinggian tertentu tambahin class
	  // @eq; element yg keberapa/memanggil
	  // 2000 = 2 second, 200 = 0.2 second

});
