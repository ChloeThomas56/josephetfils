import { renderToString } from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MdPlace } from "react-icons/md";

const iconHTML = renderToString(
    <span className="icon icon--dark">
        <MdPlace size={26} />
    </span>
);

const customIcon = L.divIcon({
    html: iconHTML,
    className: "leaflet-custom-icon",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
});

export default function Map() {
    const artisanCoords: [number, number] = [47.6869394, -2.472413];   

    return (
        <MapContainer
            center={artisanCoords}
            zoom={14}
            scrollWheelZoom={false}
            style={{
                height: "100%",
                width: "100%",
                borderRadius: "0",
                overflow: "hidden",
                backgroundColor: "#f4eddb",
                zIndex: 1
            }}
        >
            <TileLayer
                url={`https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key=${process.env.NEXT_PUBLIC_STADIA_MAPS_API_KEY}`}
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                minZoom={0}
                maxZoom={20}
            />

            <Marker position={artisanCoords} icon={customIcon}>
                <Popup>
                    <b>Joseph & Fils</b><br />Artisan Menuisier
                </Popup>
            </Marker>
        </MapContainer>
    )
}