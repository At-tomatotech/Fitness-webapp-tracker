import { useState } from 'react';
import { supabase } from '../App';

export function WorkoutPlanForm({ date, workoutPlan, setWorkoutPlan }) {
  const [exercises, setExercises] = useState('');
  const dateString = date.toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { error } = await supabase
        .from('workout_plans')
        .upsert({
          user_id: user.id,
          date: dateString,
          exercises: exercises
        });

      if (error) throw error;

      setWorkoutPlan({
        ...workoutPlan,
        [dateString]: exercises
      });
      setExercises('');
    } catch (error) {
      alert('Error saving workout plan: ' + error.message);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">
        Workout Plan for {date.toLocaleDateString()}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={exercises}
          onChange={(e) => setExercises(e.target.value)}
          placeholder="Enter your workout plan..."
          className="w-full p-2 border rounded-md h-32"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Workout
        </button>
      </form>
      {workoutPlan[dateString] && (
        <div className="mt-4">
          <h4 className="font-medium">Saved Workout:</h4>
          <p className="mt-2 p-2 bg-gray-50 rounded-md">
            {workoutPlan[dateString]}
          </p>
        </div>
      )}
    </div>
  );
} 