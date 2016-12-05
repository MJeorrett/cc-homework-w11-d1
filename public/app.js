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

var addNewCat = function( name, favFood, imgSrc ) {
  var container = document.createElement( 'ul' );
  container.classList.add( 'cat' );

  var nameLi = newLi( "Name: " + name );
  var favFoodLi = newLi( "Favourite Food: " + favFood );
  var img = newImg( 500, imgSrc );

  container.appendChild( nameLi );
  container.appendChild( favFoodLi );
  container.appendChild( img );

  var catsSection = document.querySelector( '#cats' );
  catsSection.appendChild( container );
};

window.onload = function() {
  addNewCat( "Mr Meow", "Marmite", "https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg" );
};
