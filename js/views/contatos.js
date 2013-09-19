App.Views.Contatos = Backbone.View.extend({
	tagname: 'div',
	className: 'ctts page',
	initialize: function(){
		this.render();
	},
	render: function(){
		el = this.$el;
		
		el.load('contatos.html', function(){
			$elm.ctnt.html(el);
			var template = $('#scriptContatos').html();
			el.html(_.template(template,{items:allContacts.toJSON()}));	//envia a collection para a view
		});
	},
	events:{
		"click .delete" : "deleteContact"
	},
	deleteContact: function(e){
		$(e.target).parent().remove();
		var mail = $(e.target).data('remove');
		var removeCtt = allContacts.where({mail: mail});
		allContacts.remove(removeCtt);
	}
})
