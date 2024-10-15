// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Set default icon for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const locations = [
    { id: 1, name: "Location 1", position: [51.505, -0.09] },
    { id: 2, name: "Location 2", position: [51.51, -0.1] },
    { id: 3, name: "Location 3", position: [51.515, -0.12] },
    { id: 3, name: "Location 3", position: [51.515, -0.12] },
    { id: 4, name: "Hyderabad, Telangana", position: [17.385044, 78.486671] }, 
    { id: 5, name: "Visakhapatnam, Andhra Pradesh", position: [17.688331, 83.218482] },
];

const MapComponent = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map(location => (
                <Marker key={location.id} position={location.position}>
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
