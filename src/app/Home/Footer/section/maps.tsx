'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';

// ⚠️ jangan import 'leaflet' langsung di sini
// import L from 'leaflet'; ❌  <-- ini penyebab "window is not defined"

const MapContainer = dynamic(
  async () => (await import('react-leaflet')).MapContainer,
  { ssr: false }
);
const TileLayer = dynamic(
  async () => (await import('react-leaflet')).TileLayer,
  { ssr: false }
);
const Marker = dynamic(
  async () => (await import('react-leaflet')).Marker,
  { ssr: false }
);
const Popup = dynamic(
  async () => (await import('react-leaflet')).Popup,
  { ssr: false }
);

export default function MainMaps() {
  const [L, setLeaflet] = useState<any>(null);
  const position: LatLngExpression = [-6.2, 106.816666];

  // ✅ import leaflet hanya di client
  useEffect(() => {
    (async () => {
      const leaflet = await import('leaflet');
      // Fix icon hilang
      delete (leaflet.Icon.Default.prototype as any)._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl:
          'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
      setLeaflet(leaflet);
    })();
  }, []);

  // sementara belum ada leaflet → jangan render MapContainer
  if (!L) return <div style={{ height: '400px' }}>Memuat peta...</div>;

  return (
    <div
      style={{
        height: '250px',
        width: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>Lokasi kantor kami</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
