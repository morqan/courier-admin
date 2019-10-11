"use strict";

// Class definition
var KTUppy = function () {
	const Tus = Uppy.Tus;
	

	// to get uppy companions working, please refer to the official documentation here: https://uppy.io/docs/companion/
	const Dashboard = Uppy.Dashboard;
	const Dropbox = Uppy.Dropbox;
	const GoogleDrive = Uppy.GoogleDrive;
	const Instagram = Uppy.Instagram;
	const Webcam = Uppy.Webcam;

	// Private functions

	var initUppy6 = function(){
		var id = '#kt_uppy_6';
		var options = {
			proudlyDisplayPoweredByUppy: false,
			target: id + ' .kt-uppy__dashboard',
			inline: false,
			replaceTargetContent: true,
			showProgressDetails: true,
			note: 'No filetype restrictions.',
			height: 470,
			metaFields: [
				{ id: 'name', name: 'Name', placeholder: 'file name' },
				{ id: 'caption', name: 'Caption', placeholder: 'describe what the image is about' }
			],
			browserBackButtonClose: true,
			trigger: id + ' .kt-uppy__btn'
		}

		var uppyDashboard = Uppy.Core({ 
			autoProceed: true,
			restrictions: {
				maxFileSize: 1000000, // 1mb
				maxNumberOfFiles: 5,
				minNumberOfFiles: 1
			}
		});

		uppyDashboard.use(Dashboard, options);  
		uppyDashboard.use(Tus, { endpoint: 'https://master.tus.io/files/' });
		uppyDashboard.use(GoogleDrive, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
		uppyDashboard.use(Dropbox, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
		uppyDashboard.use(Instagram, { target: Dashboard, companionUrl: 'https://companion.uppy.io' });
		uppyDashboard.use(Webcam, { target: Dashboard });
	}

	return {
		// public functions
		init: function() {
			
			initUppy6();
		}
	};
}();

KTUtil.ready(function() {	
	KTUppy.init();
});