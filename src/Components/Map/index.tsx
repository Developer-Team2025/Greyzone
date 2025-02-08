
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap: React.FC = () => {
  // Explicitly type `center` as a tuple
  const center: [number, number] = [20, 0]; // Center to show the entire world

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer
        center={center} // Center the map
        zoom={2} // Default zoom to show continents
        style={{ width: '100%', height: '100%' }}
        zoomControl={false} // Disable zoom controls
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add a marker */}
        <Marker position={[51.505, -0.09]}>
          <Popup>Marker for London</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WorldMap;
