import React, { useEffect, useRef, useState } from "react";

interface Store {
  name: string;
  address: string;
  location: { lat: number; lng: number };
}

const StoreLocator: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [stores, setStores] = useState<Store[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (mapRef.current && !map) {
      const initMap = new google.maps.Map(mapRef.current, {
        center: { lat: 32.18186918708702, lng: 74.18624208324253 },
        zoom: 12,
      });
      setMap(initMap);
    }
  }, [map]);

  const searchStores = async () => {
    if (!map || !searchTerm) return;

    const service = new google.maps.places.PlacesService(map);
    const request: google.maps.places.TextSearchRequest = {
      query: searchTerm,
      location: map.getCenter()!,
      radius: 10000, // 10km
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        const newStores = results.map((place) => ({
          name: place.name!,
          address: place.formatted_address!,
          location: {
            lat: place.geometry?.location?.lat() || 0,
            lng: place.geometry?.location?.lng() || 0,
          },
        }));

        setStores(newStores);

        // Add markers to the map
        results.forEach((place) => {
          const marker = new google.maps.Marker({
            map,
            position: place.geometry?.location,
            title: place.name,
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${place.name}</h3><p>${place.formatted_address}</p>`,
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        });

        // Adjust map bounds
        const bounds = new google.maps.LatLngBounds();
        results.forEach((place) => {
          if (place.geometry?.location) bounds.extend(place.geometry.location);
        });
        map.fitBounds(bounds);
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Store Locator</h1>
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          placeholder="Search for stores..."
          className="flex-grow p-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={searchStores}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div
        ref={mapRef}
        className="w-full md:w-[600px]  h-96 mt-4 border rounded-md"
      />
      <ul className="w-full max-w-md mt-4 space-y-2">
        {stores.map((store, index) => (
          <li
            key={index}
            className="p-2 border rounded-md bg-gray-100 hover:bg-gray-200"
          >
            <h3 className="font-semibold">{store.name}</h3>
            <p>{store.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreLocator;
