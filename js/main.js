var data = $.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function (data){
data.timelines.forEach(function (timeline){
  day = moment().format("M/DD/YY");
  time = moment().format("hh:mm");
  title = timeline.title;
  text = timeline.content;
  icon = timeline.icon;
});
});

$('.container').html(template.example({

}));

// $.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data){
//   data.timelines.map(function ())
// });

