$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo-1.png" alt="Logo">'
		},
		offCanvas: {
			position: 'right'
		}
	});
	
	var api = $('#my-menu').data('mmenu');
	api.bind("open:start",function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind("close:before",function(){
		$('.hamburger').removeClass('is-active');
	});
	 // api.bind( "openPanel:start", function( $panel ) {
  //        console.log( "This panel is now opening: #" + $panel.attr( "id" ) );
  //     });
  //     api.bind( "openPanel:finish", function( $panel ) {
  //        console.log( "This panel is now opened: #" + $panel.attr( "id" ) );
  //     });

});
// после редактирования common.js надо перезапустить gulp
   