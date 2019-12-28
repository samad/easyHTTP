function easyHTTP() {
	this.http = new XMLHttpRequest();
}

// GET
easyHTTP.prototype.get = function(url, callback) {
	this.http.open('GET', url, true);
	var self = this;

	this.http.onload = function() {
		if (self.http.status === 200) {
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	};

	this.http.send();
};

// POST
easyHTTP.prototype.post = function(url, data, callback) {
	this.http.open('POST', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');
	var self = this;

	this.http.onload = function() {
		if (self.http.status >= 200 && self.http.status <= 210) {
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	};

	this.http.send(JSON.stringify(data));
};

// PUT
easyHTTP.prototype.put = function(url, data, callback) {
	this.http.open('PUT', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');
	var self = this;

	this.http.onload = function() {
		if (self.http.status >= 200 && self.http.status <= 210) {
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	};

	this.http.send(JSON.stringify(data));
};

// DELETE
easyHTTP.prototype.delete = function(url, callback) {
	this.http.open('DELETE', url, true);
	var self = this;

	this.http.onload = function() {
		if (self.http.status === 200) {
			callback(null, 'Deleted');
		} else {
			callback('Error: ' + self.http.status);
		}
	};

	this.http.send();
};
