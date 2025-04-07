import React from "react";
import {
  ThermometerSun,
  Wind,
  Droplets,
  Sun,
  Gauge,
  Eye,
  CloudRain,
  SunSnow,
} from "lucide-react";

const iconMap = {
  temperature: <ThermometerSun className="text-orange-500" size={32} />,
  feelslike: <SunSnow className="text-blue-400" size={32} />,
  wind: <Wind className="text-blue-500" size={32} />,
  humidity: <Droplets className="text-cyan-500" size={32} />,
  uv: <Sun className="text-yellow-400" size={32} />,
  pressure: <Gauge className="text-purple-400" size={32} />,
  visibility: <Eye className="text-green-400" size={32} />,
  rain: <CloudRain className="text-indigo-400" size={32} />,
};

const DashboardCard = ({ title, value, unit, type }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 w-full max-w-sm">
      <div className="p-3 bg-gray-100 rounded-full">
        {iconMap[type] || <Sun size={32} />}
      </div>
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">
          {value}{" "}
          <span className="text-base font-normal text-gray-600">{unit}</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;
