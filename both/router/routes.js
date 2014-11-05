/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {name: 'home'});
Router.route('/add/student', {name: 'addStudent'});
Router.route('/edit/student', {name: 'editStudent'});

// List students
// Lesson type
// Flight record
// Aircraft reference