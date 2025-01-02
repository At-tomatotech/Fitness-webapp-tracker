import React from 'react';
import { calculateMacros } from '../utils/calorieCalculations';

interface MacroBreakdownProps {
  calories: number;
  weight: number;
  goal: 'cut' | 'maintain' | 'bulk';
}

export function MacroBreakdown({ calories, weight, goal }: MacroBreakdownProps) {
  const macros = calculateMacros(calories, weight, goal);

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Recommended Daily Macros:</h4>
      <div className="space-y-2 text-sm text-gray-600">
        <p>• Protein: {macros.protein}g ({Math.round(macros.protein * 4 / calories * 100)}%)</p>
        <p>• Carbs: {macros.carbs}g ({Math.round(macros.carbs * 4 / calories * 100)}%)</p>
        <p>• Fats: {macros.fats}g ({Math.round(macros.fats * 9 / calories * 100)}%)</p>
      </div>
    </div>
  );
}