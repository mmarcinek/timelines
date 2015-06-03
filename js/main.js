var data = $.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function (data){

  data.timelines.forEach(function(timeline){
    var date = moment(timeline.timestamp);
    timeline.day = date.format("M/DD/YY");
    timeline.time = date.format("H:mm");
  });

  $('.container').html(template.example(data));
});


//Overthinks and creates an object with corrected time formats and other API data, does not get data out to handlebars.js
//so fail ** UPDATE, nearly works... except date and time, needed to pass timelines into Handlebars #each template which I
// incorrectly had as data

// var post= {};

// var data = $.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function (data){
// data.timelines.forEach(function (timeline){
//   post = {
//   day: moment(timeline.timestamp).format("M/DD/YY"),
//   time: moment(timeline.timestamp).format("hh:mm"),
//   title: timeline.title,
//   text: timeline.content,
//   icon: timeline.icon
// };
// $('.container').html(template.example(data));
// });
// });

