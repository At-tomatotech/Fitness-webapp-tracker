import React from "react";
import { BarChart, Activity, TrendingUp } from "lucide-react";

export function ProgressChart() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Average Client Progress
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <BarChart className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Strength Gains</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-2">+40%</p>
          <p className="text-gray-600">Average strength increase in 3 months</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Activity className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Fat Loss</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-2">-15%</p>
          <p className="text-gray-600">
            Average body fat reduction in 12 weeks
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Goal Achievement</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-2">92%</p>
          <p className="text-gray-600">Clients reaching their fitness goals</p>
        </div>
      </div>
    </div>
  );
}
