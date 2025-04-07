import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Thermometer, Droplets, Activity, Bell } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const tempData = [
  { time: "10:00", value: 22 },
  { time: "11:00", value: 23 },
  { time: "12:00", value: 26 },
  { time: "13:00", value: 27 },
  { time: "14:00", value: 24 },
];

const humidityData = [
  { time: "10:00", value: 60 },
  { time: "11:00", value: 62 },
  { time: "12:00", value: 65 },
  { time: "13:00", value: 70 },
  { time: "14:00", value: 68 },
];

export default function LivestockDashboard() {

  console.log(tempData);
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* 실시간 온도 */}
      <Card className="bg-white shadow-xl rounded-2xl p-4">
        <CardContent className="flex items-center space-x-4">
          <Thermometer className="text-red-500" />
          <div>
            <p className="text-xl font-bold">26.5°C</p>
            <p className="text-sm text-gray-500">실시간 온도</p>
          </div>
        </CardContent>
      </Card>

      {/* 평균 습도 */}
      <Card className="bg-white shadow-xl rounded-2xl p-4">
        <CardContent className="flex items-center space-x-4">
          <Droplets className="text-blue-500" />
          <div>
            <p className="text-xl font-bold">66%</p>
            <p className="text-sm text-gray-500">평균 습도</p>
          </div>
        </CardContent>
      </Card>

      {/* 모션 감지 상태 */}
      <Card className="bg-white shadow-xl rounded-2xl p-4">
        <CardContent className="flex items-center space-x-4">
          <Activity className="text-yellow-500" />
          <div>
            <p className="text-xl font-bold">감지됨</p>
            <p className="text-sm text-gray-500">최근 움직임</p>
          </div>
        </CardContent>
      </Card>

      {/* 부저 상태 */}
      <Card className="bg-white shadow-xl rounded-2xl p-4">
        <CardContent className="flex items-center space-x-4">
          <Bell className="text-red-500 animate-pulse" />
          <div>
            <p className="text-xl font-bold">작동 중</p>
            <p className="text-sm text-gray-500">부저 상태</p>
          </div>
        </CardContent>
      </Card>

      {/* 온도 변화 그래프 */}
      <Card className="col-span-1 md:col-span-2 bg-white shadow-xl rounded-2xl p-4">
        <p className="text-lg font-semibold mb-2">온도 변화</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={tempData}>
            <XAxis dataKey="time" />
            <YAxis domain={[20, 30]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* 습도 변화 그래프 */}
      <Card className="col-span-1 md:col-span-2 bg-white shadow-xl rounded-2xl p-4">
        <p className="text-lg font-semibold mb-2">습도 변화</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={humidityData}>
            <XAxis dataKey="time" />
            <YAxis domain={[50, 80]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* 경고 메시지 */}
      <Card className="col-span-1 md:col-span-4 bg-red-100 border-l-4 border-red-500 p-4">
        <CardContent className="flex items-center space-x-4">
          <AlertCircle className="text-red-500" />
          <div>
            <p className="text-md font-semibold text-red-700">⚠️ 현재 온도가 허용 범위를 초과했습니다!</p>
            <p className="text-sm text-red-600">26.5°C / 허용 범위: 0~25°C</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
