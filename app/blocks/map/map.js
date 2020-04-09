/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
app.map = {
	mapContainer: document.querySelector('#map-block'),
	mapLoading() {
		if (this.mapContainer) {
			this.initMap();
		}
	},
	initMap() {
		const options = {
			coordinates: {
				lat: 59.911033,
				lng: 30.301238
			},
			markerImage: '',
			styles: [
				{
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#f5f5f5'
						}
					]
				},
				{
					'elementType': 'labels.icon',
					'stylers': [
						{
							'visibility': 'off'
						}
					]
				},
				{
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#616161'
						}
					]
				},
				{
					'elementType': 'labels.text.stroke',
					'stylers': [
						{
							'color': '#f5f5f5'
						}
					]
				},
				{
					'featureType': 'administrative.land_parcel',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#bdbdbd'
						}
					]
				},
				{
					'featureType': 'poi',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#eeeeee'
						}
					]
				},
				{
					'featureType': 'poi',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#757575'
						}
					]
				},
				{
					'featureType': 'poi.park',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#e5e5e5'
						}
					]
				},
				{
					'featureType': 'poi.park',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#9e9e9e'
						}
					]
				},
				{
					'featureType': 'road',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#ffffff'
						}
					]
				},
				{
					'featureType': 'road.arterial',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#757575'
						}
					]
				},
				{
					'featureType': 'road.highway',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#dadada'
						}
					]
				},
				{
					'featureType': 'road.highway',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#616161'
						}
					]
				},
				{
					'featureType': 'road.local',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#9e9e9e'
						}
					]
				},
				{
					'featureType': 'transit.line',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#e5e5e5'
						}
					]
				},
				{
					'featureType': 'transit.station',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#eeeeee'
						}
					]
				},
				{
					'featureType': 'water',
					'elementType': 'geometry',
					'stylers': [
						{
							'color': '#c9c9c9'
						}
					]
				},
				{
					'featureType': 'water',
					'elementType': 'labels.text.fill',
					'stylers': [
						{
							'color': '#9e9e9e'
						}
					]
				}
			]
		};



		const map = new google.maps.Map(this.mapContainer, {
			center: options.coordinates,
			zoom: 12,
			disableDefaultUI: false
		});

		const myoverlay = new google.maps.OverlayView();
		myoverlay.draw = function () {
			this.getPanes().markerLayer.id = 'all-markers';
		};
		myoverlay.setMap(map);

		const locations = [
			['StP', 59.923926, 30.301034, '2', 'StP'],
			['StP', 59.905506, 30.338391, '4', 'StP'],
			['StP', 59.924745, 30.344924, '3', 'StP'],
			['StP', 59.918708, 30.288989, '5', 'StP'],
			['StP', 59.885540, 30.275720, '1', 'StP']
		];
		const allMarkers = [];

		let marker;

		for (let i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				map,
				icon: 'assets/images/marker.png',
				optimized: false,
				title: locations[i][3],
				eventTarget: locations[i][0],
				eventCountry: locations[i][4],
				animation: google.maps.Animation.DROP
			});

			allMarkers.push(marker);
		}

		allMarkers.forEach(item => {
			console.log(item.title);
		});
		map.setOptions({styles: options.styles});
	}
};
