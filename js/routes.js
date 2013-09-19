var Router = Backbone.Router.extend({
	routes: {
		'add-contato' : 'funcAddContato',
		'contatos' : 'loadContatos'
	},
	funcAddContato: function(){ 
		LazyLoad.js('js/views/add-contato.js', function () { //carrega o arquivo add-contato.js antes de iniciar a view AddContato
		  var addContato = new App.Views.AddContato(); 
		});
	},
	loadContatos: function(){ 
		LazyLoad.js('js/views/contatos.js', function () { //carrega o arquivo contatos.js antes de iniciar a view Contatos
		  var contatos = new App.Views.Contatos();
		});
	}
})
var router = new Router();
Backbone.history.start();