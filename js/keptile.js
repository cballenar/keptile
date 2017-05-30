User = {
	id: null,
	sessionid: null,
	username: null,
	start: function(_id, _sessionid, _username){
		this.id = _id;
		this.sessionid = _sessionid;
		this.username = _username;
	},
	isValidSession: function() {
		result = null;
		$.get('/session/isvalid/'+this.sessionid+'/', {}, function(data){
			result = data.status
		});
		return result;
	}
};