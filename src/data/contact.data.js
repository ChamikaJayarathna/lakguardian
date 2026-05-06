import { Phone, Mail, MapPin, Clock } from "lucide-react";

const locationCoordinates = "6.857494,79.899162";

export const contactMap = {
  title: "Lak Guardian location map",
  embedUrl: `https://maps.google.com/maps?q=${locationCoordinates}&z=16&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${locationCoordinates}`,
};

export const contactInfo = [
  { icon: Phone, label: "Phone", value: "+94701122577" },
  { icon: Mail, label: "Email", value: "info@guardian.lk" },
  { icon: MapPin, label: "Location", value: "Colombo, Sri Lanka" },
  { icon: Clock, label: "Hours", value: "24/7 Available" },
];
