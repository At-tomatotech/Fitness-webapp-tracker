import { useState, useEffect } from 'react';
import { supabase } from '../App';

export function NutritionTracker() {
  const [nutritionData, setNutritionData] = useState({
    calories: '',
    protein: '',
    carbs: '',
    fats: ''
  });
  const [dailyLog, setDailyLog] = useState(null);

  useEffect(() => {
    fetchTodayLog();
  }, []);

  const fetchTodayLog = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const today = new Date().toISOString().split('T')[0];
      
      const { data, error } = await supabase
        .from('nutrition_logs')
        .select('*')
        .eq('user_id', user.id)
        .eq('date', today)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      if (data) setDailyLog(data);
    } catch (error) {
      console.error('Error fetching nutrition log:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const today = new Date().toISOString().split('T')[0];

      const { error } = await supabase
        .from('nutrition_logs')
        .upsert({
          user_id: user.id,
          date: today,
          ...nutritionData
        });

      if (error) throw error;

      setDailyLog({
        ...nutritionData,
        date: today
      });
      
      // Clear form
      setNutritionData({
        calories: '',
        protein: '',
        carbs: '',
        fats: ''
      });
    } catch (error) {
      alert('Error saving nutrition data: ' + error.message);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Calories</label>
          <input
            type="number"
            value={nutritionData.calories}
            onChange={(e) => setNutritionData({...nutritionData, calories: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter calories"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Protein (g)</label>
          <input
            type="number"
            value={nutritionData.protein}
            onChange={(e) => setNutritionData({...nutritionData, protein: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter protein"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Carbs (g)</label>
          <input
            type="number"
            value={nutritionData.carbs}
            onChange={(e) => setNutritionData({...nutritionData, carbs: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter carbs"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fats (g)</label>
          <input
            type="number"
            value={nutritionData.fats}
            onChange={(e) => setNutritionData({...nutritionData, fats: e.target.value})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter fats"
          />
        </div>
        <button
          type="submit"
          className="md:col-span-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Log Nutrition
        </button>
      </form>

      {dailyLog && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Today's Nutrition Log</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">Calories</p>
              <p className="text-xl font-semibold">{dailyLog.calories}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">Protein</p>
              <p className="text-xl font-semibold">{dailyLog.protein}g</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">Carbs</p>
              <p className="text-xl font-semibold">{dailyLog.carbs}g</p>
            </div>
            <div className="bg-red-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">Fats</p>
              <p className="text-xl font-semibold">{dailyLog.fats}g</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 