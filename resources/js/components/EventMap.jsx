import React, { useState } from "react";
import {
    GoogleMap,
    InfoWindow,
    Marker,
    useJsApiLoader,
} from "@react-google-maps/api";
// import { Link } from "react-router-dom";

const containerStyle = {
    width: "100%",
    height: "700px",
};

const center = {
    lat: -0.7893,
    lng: 113.9213,
};

function Map({ apiKey, events }) {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: apiKey,
    });

    const dataMarker = events.map((item) => ({
        title: item.title,
        image: item.banner.split("/").pop(), // Mengambil nama file dari URL banner
        longlat: {
            lat: parseFloat(item.latitude || 0), // Parsing latitude, gunakan default 0 jika kosong
            lng: parseFloat(item.longitude || 0), // Parsing longitude, gunakan default 0 jika kosong
        },
    }));

    const [selectedMarker, setSelectedMarker] = useState({
        title: "",
        from: "",
        image: "",
        type: "",
        longlat: {
            lat: -1.8251707,
            lng: 1.2221773,
        },
    });

    const darkModeStyle = [
        { elementType: "geometry", stylers: [{ color: "#212121" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
        {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [{ color: "#757575" }],
        },
        {
            featureType: "administrative.country",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
        },
        {
            featureType: "administrative.land_parcel",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ef4444" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#181818" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#1b1b1b" }],
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#2c2c2c" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8a8a8a" }],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ef4444" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#ef4444" }],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{ color: "#ef4444" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ef4444" }],
        },
        {
            featureType: "transit",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ef4444" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#000000" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#10a5ea" }],
        },
    ];

    return isLoaded ? (
        <section className="rounded overflow-hidden">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                options={{
                    disableDefaultUI: true,
                    keyboardShortcuts: false,
                    restriction: {
                        latLngBounds: {
                            north: 6, // Approximate northernmost point
                            south: -11, // Approximate southernmost point
                            west: 95, // Approximate westernmost point
                            east: 141, // Approximate easternmost point
                        },
                    },
                    styles: darkModeStyle,
                }}
                zoom={6}
            >
                <>
                    {dataMarker.map((marker, i) => (
                        <Marker
                            key={i}
                            position={{
                                lat: marker.longlat.lat,
                                lng: marker.longlat.lng,
                            }}
                            onClick={() => {
                                setSelectedMarker(marker);
                                console.log(marker);
                            }}
                            icon={{
                                // url: `https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg`,
                                url: `https://alope.site/storage/banners/${marker.image}`,
                                scaledSize: new window.google.maps.Size(40, 40),
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(20, 20),
                            }}
                            // animation={"BOUNCE" | unde}
                        />
                    ))}

                    {selectedMarker ? (
                        <InfoWindow
                            position={{
                                lat: parseFloat(selectedMarker.longlat.lat),
                                lng: parseFloat(selectedMarker.longlat.lng),
                                // lat: -3.8251707,
                                // lng: 104.0944384,
                            }}
                            // clickable={true}
                            onCloseClick={() => setSelectedMarker("")}
                        >
                            <div className="bg-white rounded text-center">
                                <img
                                    src={`https://alope.site/storage/banners/${selectedMarker.image}`}
                                    width={100}
                                    height={100}
                                    className="object-cover w-[300px] h-[200px]"
                                />
                                <h1 className="font-bold text-xl text-gray-800 mt-3">
                                    {selectedMarker.title}
                                </h1>
                                <small className="text-gray-600">
                                    {selectedMarker.from}
                                </small>
                            </div>
                        </InfoWindow>
                    ) : (
                        ""
                    )}
                </>
            </GoogleMap>
        </section>
    ) : (
        <></>
    );
}

export default React.memo(Map);
