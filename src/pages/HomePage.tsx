import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Target, Heart, Trophy, ArrowRight, Clock, Users, Star } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Transform Your Life Through Expert Fitness Coaching</h1>
              <p className="text-xl mb-8">Personalized workout plans, nutrition guidance, and expert support to help you achieve your fitness goals.</p>
              <Link to="/calculator" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Try Our Calculator <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Fitness Training"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our comprehensive approach to fitness combines expert coaching, personalized plans, and ongoing support to ensure your success.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Train on your schedule with 24/7 access to workout plans and nutrition guidance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Coaches</h3>
              <p className="text-gray-600">Work with certified professionals who are passionate about your success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Star className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-gray-600">Join hundreds of successful clients who have achieved their fitness goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Dumbbell className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Personal Training</h3>
              <p className="text-gray-600">Customized workout plans tailored to your specific goals and fitness level.</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• One-on-one coaching sessions</li>
                <li>• Custom exercise programming</li>
                <li>• Progress tracking</li>
                <li>• Form correction</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Nutrition Coaching</h3>
              <p className="text-gray-600">Expert guidance on nutrition and meal planning to support your fitness journey.</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Personalized meal plans</li>
                <li>• Macro tracking guidance</li>
                <li>• Supplement recommendations</li>
                <li>• Regular check-ins</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Lifestyle Support</h3>
              <p className="text-gray-600">Comprehensive support for sustainable lifestyle changes and habits.</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Habit building strategies</li>
                <li>• Stress management</li>
                <li>• Sleep optimization</li>
                <li>• Recovery techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Take the first step towards your fitness goals with our free calorie and macro calculator.</p>
          <Link to="/calculator" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Calculate Your Needs <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}