App.Views.AddContato = Backbone.View.extend({
	tagname: 'div',
	className: 'addCtt page',
	initialize: function(){
		this.render();
	},
	render: function(){
		el = this.$el;

		el.load('add-contato.html', function(){
			$elm.ctnt.html(el);
		});
	},
	events: {
		"click .add": "clickAddContato",
	},
	clickAddContato: function(){
		var name = $('#name');
		var mail = $('#mail');
		var error = $('#error');
		var success = $('#success');

		if(name.val() == '' || mail.val() == '') {
			error.fadeIn();
			setTimeout(function(){
				error.fadeOut('slow');
			},2000);
		}else{

			if(allContacts.where({mail: mail.val()}).length > 0){
				alert('e-mail já cadastrado');
				return false;
			}

			allContacts.add([
				{name: name.val(), mail: mail.val()}
			]);
			name.val("").focus();
			mail.val("");

			success.fadeIn();
			setTimeout(function(){
				success.fadeOut('slow');
			},2000);
		} 
	},
})