
var data = {
  albums : [
  { title: "Thriller", artist: { name: "Michael Jackson", life: '1955-2009' }},
  { title: "Songs in the Key of Life", artist: { name: "Stevie Wonder", life: '1935-present' }},
  { title: "Legend", artist: { name: "Bob Marley", life: '1945-1979' }}
  ]
};

var rendered = Handlebars.templates['name'];
$('.album_list').append( rendered(data));
