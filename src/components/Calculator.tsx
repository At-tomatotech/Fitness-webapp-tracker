import React, { useState } from 'react';
import { calculateBMR, calculateTotalCalories } from '../utils/calorieCalculations';

interface CalorieCalculatorProps {
  onCalculate: (result: { calories: number; weight: number; goal: 'cut' | 'maintain' | 'bulk' }) => void;
}

export function CalorieCalculator({ onCalculate }: CalorieCalculatorProps) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('moderate');
  const [goal, setGoal] = useState<'cut' | 'maintain' | 'bulk'>('maintain');

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a) return;

    const bmr = calculateBMR(w, h, a, gender);
    const totalCalories = calculateTotalCalories(bmr, activity as any, goal);

    onCalculate({
      calories: totalCalories,
      weight: w,
      goal: goal
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Calorie Calculator</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Activity Level</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (exercise 1-3 times/week)</option>
            <option value="moderate">Moderate (exercise 3-5 times/week)</option>
            <option value="active">Active (daily exercise or intense exercise 3-4 times/week)</option>
            <option value="veryActive">Very Active (intense exercise 6-7 times/week)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Goal</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value as 'cut' | 'maintain' | 'bulk')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="cut">Cut (lose weight)</option>
            <option value="maintain">Maintain</option>
            <option value="bulk">Bulk (gain muscle)</option>
          </select>
        </div>
        <button
          onClick={calculateCalories}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
