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

const dataMarker = [
    {
        title: "Tari Saman",
        from: "Nanggoroe Aceh Darussalam",
        image: "tariSaman.jpg",
        type: "tarian",
        longlat: {
            lat: parseFloat("4.571568"),
            lng: parseFloat("96.357198"),
        },
    },
    {
        title: "Tari Tor-tor",
        from: "Sumatra Utara",
        image: "tariTorTor.jpg",
        type: "tarian",
        longlat: {
            lat: parseFloat("2.5960115"),
            lng: parseFloat("98.7263639"),
        },
    },
    {
        title: "Tari Erai-erai",
        from: "Sumatra Selatan",
        image: "tariEraiErai.jpg",
        type: "tarian",
        longlat: {
            lat: parseFloat("-3.1328995"),
            lng: parseFloat("104.0944384"),
        },
    },
    {
        title: "Tari Tempurung",
        from: "Sumatra Barat",
        image: "tariTempurung.jpg",
        type: "tarian",
        longlat: {
            lat: parseFloat("-0.8301458"),
            lng: parseFloat("100.5752503"),
        },
    },
    {
        title: "Tari Andun",
        from: "Bengkulu",
        image: "tariAndun.jpg",
        type: "tarian",
        longlat: {
            lat: parseFloat("-3.8251707"),
            lng: parseFloat("102.2221773"),
        },
    },
];

function Map({ apiKey }) {
    console.log(apiKey);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: apiKey,
    });

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
                                url: `https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg`,
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
                                    src={`./images/mapMarker/${selectedMarker.image}`}
                                    width={200}
                                    height={200}
                                    className="object-cover"
                                />
                                <h1 className="font-bold text-xl text-gray-800 mt-3">
                                    {selectedMarker.title}
                                </h1>
                                <small className="text-gray-600">
                                    {selectedMarker.from}
                                </small>
                                <br />
                                {/* {selectedMarker.type == "makanan" ? (
                                    <Link
                                        to={"/ragam-indonesia/makanan/detail"}
                                        className="bg-orange-500 inline-block text-white hover:bg-orange-400 rounded px-8 py-2 mt-5"
                                    >
                                        Baca Selengkapnya
                                    </Link>
                                ) : (
                                    <Link
                                        to={"/ragam-indonesia/tarian/detail"}
                                        className="bg-purple-500 inline-block text-white hover:bg-purple-400 rounded px-8 py-2 mt-5"
                                    >
                                        Baca Selengkapnya
                                    </Link>
                                )} */}
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
