"use strict";


$(document).ready(function() {

  $('#kt_table_2').on('click', ' #modalBtn' , function () {
    
    $('#kt_modal_sub_KTDatatable_remote').modal("show");
});

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
			debug: true,
			autoProceed: false,			
			restrictions: {
				maxFileSize: 1000000, // 1mb
				maxNumberOfFiles: 5,
				minNumberOfFiles: 1,
				allowedFileTypes: ['image/*', 'video/*']
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




    $('#kt_table_2').DataTable( {
        "responsive": true,
        "scrollX": true,
        "columnDefs": [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: 4 }
        ]
    } );

    $('#kt_table_1').DataTable( {
      
      "scrollX": true
      
  } );
  


} );









// $('#myModal').on('shown.bs.modal', function() {
//     $('#myInput').focus()
//   })


// $( document ).ready(function() {
  
//     $('#Modall').modal('hide');
  
  
//     $(document).on("click","#modalBtn",function() {
//       $('#Modall').modal('show');
//   });
  
//   });







// $(document).ready(function() {
//     $('#kt_table_2').dataTable({
//         "responsive": true,
//         "scrollX": true,
// 		"columnDefs": [
// 		            { responsivePriority: 1, targets: 0 },
// 		            { responsivePriority: 2, targets: 4 }
// 		        ]
//     } );
// } );


// var KTDatatablesBasicScrollable = function() {

// 	// var initTable1 = function() {
// 	// 	var table = $('#kt_table_1');

// 	// 	// begin first table
// 	// 	table.DataTable({
// 	// 		scrollY: '50vh',
// 	// 		scrollX: true,
// 	// 		scrollCollapse: true,
// 	// 		columnDefs: [
// 	// 			{
// 	// 				targets: -1,
// 	// 				title: 'Actions',
// 	// 				orderable: false,
// 	// 				render: function(data, type, full, meta) {
// 	// 					return `
//     //                     <span class="dropdown">
//     //                         <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
//     //                           <i class="la la-ellipsis-h"></i>
//     //                         </a>
//     //                         <div class="dropdown-menu dropdown-menu-right">
//     //                             <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>
//     //                             <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>
//     //                             <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>
//     //                         </div>
//     //                     </span>
//     //                     <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
//     //                       <i class="la la-edit"></i>
//     //                     </a>`;
// 	// 				},
// 	// 			},
// 	// 			{
// 	// 				targets: 8,
// 	// 				render: function(data, type, full, meta) {
// 	// 					var status = {
// 	// 						1: {'title': 'Pending', 'class': 'kt-badge--brand'},
// 	// 						2: {'title': 'Delivered', 'class': ' kt-badge--danger'},
// 	// 						3: {'title': 'Canceled', 'class': ' kt-badge--primary'},
// 	// 						4: {'title': 'Success', 'class': ' kt-badge--success'},
// 	// 						5: {'title': 'Info', 'class': ' kt-badge--info'},
// 	// 						6: {'title': 'Danger', 'class': ' kt-badge--danger'},
// 	// 						7: {'title': 'Warning', 'class': ' kt-badge--warning'},
// 	// 					};
// 	// 					if (typeof status[data] === 'undefined') {
// 	// 						return data;
// 	// 					}
// 	// 					return '<span class="kt-badge ' + status[data].class + ' kt-badge--inline kt-badge--pill">' + status[data].title + '</span>';
// 	// 				},
// 	// 			},
// 	// 			{
// 	// 				targets: 9,
// 	// 				render: function(data, type, full, meta) {
// 	// 					var status = {
// 	// 						1: {'title': 'Online', 'state': 'danger'},
// 	// 						2: {'title': 'Retail', 'state': 'primary'},
// 	// 						3: {'title': 'Direct', 'state': 'success'},
// 	// 					};
// 	// 					if (typeof status[data] === 'undefined') {
// 	// 						return data;
// 	// 					}
// 	// 					return '<span class="kt-badge kt-badge--' + status[data].state + ' kt-badge--dot"></span>&nbsp;' +
// 	// 						'<span class="kt-font-bold kt-font-' + status[data].state + '">' + status[data].title + '</span>';
// 	// 				},
// 	// 			},
// 	// 		],
// 	// 	});
// 	// };

// 	var initTable2 = function() {
// 		var table = $('#kt_table_2');

// 		// begin second table
// 		table.DataTable({
// 			scrollY: '50vh',
// 			scrollX: true,
// 			scrollCollapse: true,
// 			createdRow: function(row, data, index) {
// 				var status = {
// 					1: {'title': 'Pending', 'class': 'kt-badge--brand'},
// 					2: {'title': 'Delivered', 'class': ' kt-badge--danger'},
// 					3: {'title': 'Canceled', 'class': ' kt-badge--primary'},
// 					4: {'title': 'Success', 'class': ' kt-badge--success'},
// 					5: {'title': 'Info', 'class': ' kt-badge--info'},
// 					6: {'title': 'Danger', 'class': ' kt-badge--danger'},
// 					7: {'title': 'Warning', 'class': ' kt-badge--warning'},
// 				};
// 				var badge = '<span class="kt-badge ' + status[data[18]].class + ' kt-badge--inline kt-badge--pill">' + status[data[18]].title + '</span>';
// 				row.getElementsByTagName('td')[18].innerHTML = badge;

// 				status = {
// 					1: {'title': 'Online', 'state': 'danger'},
// 					2: {'title': 'Retail', 'state': 'primary'},
// 					3: {'title': 'Direct', 'state': 'success'},
// 				};
// 				badge = '<span class="kt-badge kt-badge--' + status[data[19]].state + ' kt-badge--dot"></span>&nbsp;' +
// 					'<span class="kt-font-bold kt-font-' + status[data[19]].state + '">' + status[data[19]].title + '</span>';
// 				row.getElementsByTagName('td')[19].innerHTML = badge;
// 			},
// 			columnDefs: [
// 				{
// 					targets: -1,
// 					title: 'Actions',
// 					orderable: false,
// 					render: function(data, type, full, meta) {
// 						return `
//                         <span class="dropdown">
//                             <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">
//                               <i class="la la-ellipsis-h"></i>
//                             </a>
//                             <div class="dropdown-menu dropdown-menu-right">
//                                 <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>
//                                 <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>
//                                 <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>
//                             </div>
//                         </span>
//                         <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">
//                           <i class="la la-edit"></i>
//                         </a>`;
// 					},
// 				}],
// 		});
// 	};

// 	return {

// 		//main function to initiate the module
// 		init: function() {
// 			initTable1();
// 			initTable2();
// 		},

// 	};

// }();

// jQuery(document).ready(function() {
// 	KTDatatablesBasicScrollable.init();
// });