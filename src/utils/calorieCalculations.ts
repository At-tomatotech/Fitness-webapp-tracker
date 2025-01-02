interface CalorieMultipliers {
  [key: string]: number;
}

interface MacroBreakdown {
  protein: number;
  carbs: number;
  fats: number;
}

export const ACTIVITY_MULTIPLIERS: CalorieMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9
};

export const GOAL_ADJUSTMENTS: CalorieMultipliers = {
  cut: 0.8,    // 20% caloric deficit
  maintain: 1, // No adjustment
  bulk: 1.15   // 15% caloric surplus
};

export function calculateBMR(weight: number, height: number, age: number, gender: string): number {
  if (gender === 'male') {
    return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  }
  return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
}

export function calculateTotalCalories(
  bmr: number, 
  activityLevel: keyof typeof ACTIVITY_MULTIPLIERS,
  goal: keyof typeof GOAL_ADJUSTMENTS
): number {
  const activityCalories = bmr * ACTIVITY_MULTIPLIERS[activityLevel];
  return Math.round(activityCalories * GOAL_ADJUSTMENTS[goal]);
}

// Convert kg to lbs
function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

export function calculateMacros(calories: number, weightKg: number, goal: keyof typeof GOAL_ADJUSTMENTS): MacroBreakdown {
  const weightLbs = kgToLbs(weightKg);

  // Calculate protein based on goal (in grams)
  const proteinGrams = goal === 'cut' 
    ? Math.round(weightLbs * 1.2)  // 1.2g per lb for cutting
    : Math.round(weightLbs);       // 1g per lb for maintaining/bulking

  // Calculate protein calories
  const proteinCalories = proteinGrams * 4;

  // Calculate remaining calories for carbs and fats
  const remainingCalories = calories - proteinCalories;

  // Split remaining calories between carbs (60%) and fats (40%)
  const carbCalories = remainingCalories * 0.6;
  const fatCalories = remainingCalories * 0.4;

  return {
    protein: proteinGrams,
    carbs: Math.round(carbCalories / 4),  // 4 calories per gram
    fats: Math.round(fatCalories / 9)     // 9 calories per gram
  };
}
