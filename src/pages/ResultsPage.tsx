import React from 'react';
import { ProgressChart } from '../components/results/ProgressChart';
import { SuccessStories } from '../components/results/SuccessStories';
import { TransformationGrid } from '../components/results/TransformationGrid';

export function ResultsPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-4">Success Stories & Results</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Real results from real people who committed to their fitness journey with FitCoach Pro.
        </p>

        <ProgressChart />
        <TransformationGrid />
        <SuccessStories />
      </div>
    </div>
  );
}