var Cat = function( name, favFood, imgSrc ) {
  this.name = name;
  this.favFood = favFood;
  this.imgSrc = imgSrc;
}

var cat1 = new Cat( "Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" );
var cat2 = new Cat( "Barnaby", "Tuna", "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg" );
var cat3 = new Cat( "Max", "Wiskas Temtations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" );
var cat4 = new Cat( "Mr Meow", "Marmite", "https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg" );

var cats = []
cats.push( cat1 );
cats.push( cat2 );
cats.push( cat3 );
cats.push( cat4 );

var newLi = function( text ) {
  var li = document.createElement( 'li' );
  li.innerText = text;
  return li;
};

var newImg = function( width, src ) {
  var img = document.createElement( 'img' );
  img.setAttribute( 'width', width.toString() );
  img.setAttribute( 'src', src );
  return img;
};

var addCat = function( cat ) {
  var container = document.createElement( 'ul' );
  container.classList.add( 'cat' );

  var nameLi = newLi( "Name: " + cat.name );
  var favFoodLi = newLi( "Favourite Food: " + cat.favFood );
  var img = newImg( 500, cat.imgSrc );

  container.appendChild( nameLi );
  container.appendChild( favFoodLi );
  container.appendChild( img );

  var catsSection = document.querySelector( '#cats' );
  catsSection.appendChild( container );
};

window.onload = function() {
  cats.map( function( cat ) {
    addCat( cat );
  });
};
