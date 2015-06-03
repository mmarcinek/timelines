var post= {};

var data = $.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function (data){
data.timelines.forEach(function (timeline){
  post = {
  day: moment(timeline.timestamp).format("M/DD/YY"),
  time: moment(timeline.timestamp).format("hh:mm"),
  title: timeline.title,
  text: timeline.content,
  icon: timeline.icon
};
console.log(post);
});
});

// var day, time, title, text, icon;

$('.container').html(template.example(post));


// $.getJSON('http://private-44f6d-timeline6.apiary-mock.com/timeline').done(function(data){
//     data.timelines.forEach(function (timeline){
//     day = moment(timeline.timestamp).format("M/DD/YY");
//     time = moment(timeline.timestamp).format("hh:mm");
//     title = timeline.title;
//     text = timeline.content;
//     icon = timeline.icon;
// });
// });

