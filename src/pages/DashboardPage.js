import { useState, useEffect } from 'react';
import { supabase } from '../App';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ProfileInfo } from '../components/ProfileInfo';
import { WorkoutPlanForm } from '../components/WorkoutPlanForm';
import { NutritionTracker } from '../components/NutritionTracker';

export function DashboardPage() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [workoutPlan, setWorkoutPlan] = useState({});
  const [nutrition, setNutrition] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fats: 0
  });

  // Fetch user profile on component mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');

      console.log('Fetching profile for user:', user.id); // Debug log

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error); // Debug log
        throw error;
      }

      console.log('Profile data:', data); // Debug log

      if (!data) {
        console.log('No profile found, showing onboarding'); // Debug log
        setShowOnboarding(true);
      } else {
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      setShowOnboarding(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {showOnboarding ? (
        <OnboardingModal onComplete={fetchUserProfile} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            {userProfile && (
              <div className="space-y-4">
                <ProfileInfo profile={userProfile} onUpdate={fetchUserProfile} />
              </div>
            )}
          </div>

          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Workout Calendar</h2>
            <Calendar
              onChange={setCalendarDate}
              value={calendarDate}
              className="w-full"
            />
            <WorkoutPlanForm 
              date={calendarDate}
              workoutPlan={workoutPlan}
              setWorkoutPlan={setWorkoutPlan}
            />
          </div>

          {/* Nutrition Tracking */}
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Nutrition Tracking</h2>
            <NutritionTracker 
              nutrition={nutrition}
              setNutrition={setNutrition}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Onboarding Modal Component
function OnboardingModal({ onComplete }) {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: '',
    activity_level: '',
    goal: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          ...formData
        }, {
          onConflict: 'id',
          returning: 'minimal'
          
        });

      if (error) throw error;
      onComplete();
    } catch (error) {
      console.error('Error details:', error);
      alert('Error saving profile: ' + error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Welcome! Let's get to know you</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={(e) => setFormData({...formData, weight: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={(e) => setFormData({...formData, height: e.target.value})}
            className="w-full p-2 border rounded"
          />
          <select
            value={formData.gender}
            onChange={(e) => setFormData({...formData, gender: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <select
            value={formData.activity_level}
            onChange={(e) => setFormData({...formData, activity_level: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Lightly Active</option>
            <option value="moderate">Moderately Active</option>
            <option value="very">Very Active</option>
            <option value="extra">Extra Active</option>
          </select>
          <select
            value={formData.goal}
            onChange={(e) => setFormData({...formData, goal: e.target.value})}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Goal</option>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
} 