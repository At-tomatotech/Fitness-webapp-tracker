import React, { useState } from 'react';
import { CalorieCalculator } from '../components/Calculator';
import { MacroBreakdown } from '../components/MacroBreakdown';

interface CalculatorResult {
  calories: number;
  weight: number;
  goal: 'cut' | 'maintain' | 'bulk';
}

export function CalculatorPage() {
  const [calculatorResult, setCalculatorResult] = useState<CalculatorResult | null>(null);

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Calorie & Macro Calculator</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Use our calculator to determine your daily caloric needs and optimal macro distribution based on your goals.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <CalorieCalculator onCalculate={setCalculatorResult} />
          {calculatorResult && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Your Results</h3>
              <p className="text-2xl text-blue-600 font-bold">{calculatorResult.calories} calories/day</p>
              <p className="mt-2 text-gray-600">This is your recommended daily calorie intake based on your goals and activity level.</p>
              <MacroBreakdown 
                calories={calculatorResult.calories}
                weight={calculatorResult.weight}
                goal={calculatorResult.goal}
              />
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Next Steps</h4>
                <p className="text-sm text-gray-600">
                  These calculations provide a starting point for your nutrition plan. For best results, track your progress
                  and adjust based on your body's response over 2-3 weeks.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}