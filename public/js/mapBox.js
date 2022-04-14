/* eslint-disable */
const mapBox = document.getElementById('map');

if (mapBox) {
  const location = JSON.parse(mapBox.dataset.locations);
  // const locations = location[0];
  console.log(location);
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmFqYW5lZXNoMTQyMTgxIiwiYSI6ImNsMXJic2MxeDBwNXczYnB0ZHlvOXJoZWIifQ.DfBUaISSXGXAq4NIQ5TRDA';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/rajaneesh142181/cl1rc63zx001q15pl02wh375l', // style URL
    // center: [-118.113491, 34.111745], // starting position [lng, lat]
    scrollZoom: false,
    // zoom: 9, // starting zoom
  });
  const bounds = new mapboxgl.LngLatBounds();

  location.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
}
