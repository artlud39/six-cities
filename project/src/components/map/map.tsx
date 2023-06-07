import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { OffersType } from '../../types/offer';
import { Icon } from 'leaflet';

const icon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27,39]
});

type MapProps = {
  offers: OffersType,
}

function Map({ offers }: MapProps) {
  return (
    <section className="cities__map map">
      <MapContainer style={{height: '100%'}} center={[52.370216, 4.895168]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {offers.map((offer) => <Marker key={offer.id} position={[offer.location.latitude, offer.location.longitude]} icon={icon}/>)}
      </MapContainer>
    </section>
  );
}

export default Map;
