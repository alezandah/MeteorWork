Router.configure({
  layoutTemplate: "masterLayout",
  routeControllerNameConverter: "camelCase",
  notFoundTemplate: '404'
})

Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

Router.route('/projects', function () {
  this.render('projects');
}, {
  name: 'projects',

  data: function() {
  	return {
  		projects: Projects.find().fetch(),
  		pageTitle: 'This is my project page'
  	}
  }
});

Router.route('/projects/:category/', function(){
	this.render('projects');
}, {
	name: 'projectsCategory',

	data: function(){
		return {
			projects: Projects.find({category: this.params.category}).fetch(),
			pageTitle: 'Category: ' + this.params.category
		}
	}
})

Router.route('/projects/details/:_id', function(){
  this.render('projectDetail');
},{
  name: 'projectDetail',

  data: function(){
    var _id = this.params._id;

    return {
      project: Projects.findOne(_id)
    }
  }
})

Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});