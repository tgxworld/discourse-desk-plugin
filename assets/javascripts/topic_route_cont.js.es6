import TopicRoute from 'discourse/routes/topic';

TopicRoute.on("setupTopicController", function(event) {
  Discourse.ajax("/desk/find_case", {
    dataType: 'json',
    data: { external_id: "community-" + event.currentModel.id },
    type: 'GET'
  }).then(function (the_case) {
    if (the_case) event.controller.setProperties({ deskCase: the_case });
  });
});
