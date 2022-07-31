// randomWright
var randomWright = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "wright/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomWright = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomEdgeworth
var randomEdgeworth = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "edgeworth/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomEdgeworth = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomMia
var randomMia = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "mia/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomMia = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomMaya
var randomMaya = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "maya/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomMaya = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomPearl
var randomPearl = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "pearl/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomPearl = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomLarry
var randomLarry = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "Larry/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomLarry = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomGumshoe
var randomGumshoe = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "gumshoe/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomGumshoe = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomEma
var randomEma = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "ema/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomEma = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomFranziska
var randomFranziska = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "franziska/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomFranziska = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomGodot
var randomGodot = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "godot/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomGodot = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomApollo
var randomApollo = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "apollo/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomApollo = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomTrucy
var randomTrucy = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "trucy/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomTrucy = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomKlavier
var randomKlavier = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "klavier/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomKlavier = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomAthena
var randomAthena = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "athena/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomAthena = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomSimon
var randomSimon = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "simon/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomSimon = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};

// randomNahyuta
var randomNahyuta = function(params) {
	var options = $.extend({
		bucket: "randomgs",
		path: "nahyuta/",
		awsRegion: "us-east-2"
			}, params);

			var renderImage = function(bucket, path) {

			var url = "https://randomgs.s3.us-east-2.amazonaws.com/" + path + "?delimiter=%2F&encoding-type=url&marker=&max-keys=1000&prefix=" + encodeURI(path);

			$.get(url, function(xml) {

				if ($(xml).find("Contents").length > 1) {
					var d = [];
					var objects = $(xml).find("Contents");
					objects.splice(0, 1);
					var allowed = /^jpg|jpeg|png$/;

					$.each(objects, function(k, v) {
						if ($(v).find("Key").length) {
                var key = $(v).find("Key").text();
                // console.log(key);
                var exten = key.split(".").pop().toLowerCase();
                if (key.lastIndexOf("__w_") === -1 && allowed.test(exten)) {
                  d.push(key);
                }
              }
					});

					var random = Math.floor((Math.random() * d.length));
						var randomNahyuta = "<img src='/" + d[random]+ "' alt='' class='random-image random" + random + "' />";

				} else {
					console.log("Please check the path in the paramater.");
				}


			}).error(function(error) {
				console.log(error);
			});

		};

		renderImage(options.bucket, options.path);

	} else {
		console.log('please define parameters bucket, path like {bucket: "my.bucket.com", path: "random/images/"}');
	}

};
