'use client'
import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../authHooks/useAuthContext';
import Link from 'next/link';

interface IntakeData {
  [year: string]: {
    [month: string]: {
      [day: string]: {
        value: number;
        id: number;
      };
    };
  };
}

interface IntakeResponse {
  id: number;
  intake: number;
  date: string;
  userId: number;
}

export default function NoriTracker() {
  const { user, fnStateLoggedOut } = useAuthContext();
  const [intakeData, setIntakeData] = useState<IntakeData>({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [intakeValue, setIntakeValue] = useState('');
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function fnFetchIntakeData() {
      if (!user) return;

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/intake`, {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });

        if (res.status === 401) {
          console.warn("Unauthorized access, logging out.");
          localStorage.removeItem("user");
          fnStateLoggedOut();
          return;
        }

        if (!res.ok) {
          throw new Error("Failed to fetch intake data");
        }

        const data = await res.json();
        const transformedData: IntakeData = {};
        data.forEach((intake: IntakeResponse) => {
          const date = new Date(intake.date);
          const year = date.getFullYear().toString();
          const month = date.getMonth().toString();
          const day = date.getDate().toString();
          
          if (!transformedData[year]) transformedData[year] = {};
          if (!transformedData[year][month]) transformedData[year][month] = {};
          transformedData[year][month][day] = {
            value: Number(intake.intake),
            id: intake.id
          };
        });
        setIntakeData(transformedData);
      } catch (err) {
        console.error("Error fetching intake data:", err);
        setError("Failed to load intake data");
      }
    }

    fnFetchIntakeData();
  }, [user, fnStateLoggedOut]);

  // Reset form when date changes
  useEffect(() => {
    const year = selectedDate.getFullYear().toString();
    const month = selectedDate.getMonth().toString();
    const day = selectedDate.getDate().toString();
    const existingIntake = intakeData[year]?.[month]?.[day];
    
    if (existingIntake) {
      setIntakeValue(existingIntake.value.toString());
      setIsEditing(true);
    } else {
      setIntakeValue('');
      setIsEditing(false);
    }
  }, [selectedDate, intakeData]);

  async function fnCreateIntake(value: number) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/intake`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({ intake: value })
      });

      if (res.status === 401) {
        console.warn("Unauthorized access, logging out.");
        localStorage.removeItem("user");
        fnStateLoggedOut();
        return null;
      }

      if (!res.ok) {
        throw new Error('Failed to create intake');
      }

      return await res.json();
    } catch (err) {
      console.error('Error creating intake:', err);
      throw new Error('Failed to create intake');
    }
  }

  async function fnUpdateIntake(id: number, value: number) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/intake/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({ intake: value })
      });

      if (res.status === 401) {
        console.warn("Unauthorized access, logging out.");
        localStorage.removeItem("user");
        fnStateLoggedOut();
        return null;
      }

      if (!res.ok) {
        throw new Error('Failed to update intake');
      }

      return await res.json();
    } catch (err) {
      console.error('Error updating intake:', err);
      throw new Error('Failed to update intake');
    }
  }

  function fnValidateIntakeValue(value: number): string | null {
    if (isNaN(value) || value < 0 || value > 1.5) {
      return 'Please enter a valid number between 0 and 1.5';
    }
    return null;
  }

  async function fnHandleIntakeSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const value = parseFloat(intakeValue);
    const validationError = fnValidateIntakeValue(value);
    if (validationError) {
      setError(validationError);
      return;
    }

    const year = selectedDate.getFullYear().toString();
    const month = selectedDate.getMonth().toString();
    const day = selectedDate.getDate().toString();
    const existingIntake = intakeData[year]?.[month]?.[day];

    try {
      let responseData;
      
      if (existingIntake) {
        responseData = await fnUpdateIntake(existingIntake.id, value);
      } else {
        responseData = await fnCreateIntake(value);
      }

      if (!responseData) return;

      // Update local state
      setIntakeData(prev => ({
        ...prev,
        [year]: {
          ...prev[year],
          [month]: {
            ...prev[year]?.[month],
            [day]: {
              value: value,
              id: responseData.id
            }
          }
        }
      }));
      
      setIntakeValue('');
      setIsEditing(false);
    } catch (err) {
      console.error('Error saving intake:', err);
      setError('Failed to save intake. Please try again.');
    }
  }

  function fnGetDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  function fnGetFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
  }

  function renderCalendar() {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = fnGetDaysInMonth(year, month);
    const firstDay = fnGetFirstDayOfMonth(year, month);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-16 sm:h-24 border border-gray-200"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === month && 
                     new Date().getFullYear() === year;
      
      const intake = intakeData[year]?.[month]?.[day];
      const isSelected = selectedDate.getDate() === day;

      days.push(
        <div 
          key={day} 
          className={`h-16 sm:h-24 border border-gray-200 p-1 sm:p-2 cursor-pointer hover:bg-gray-50 ${
            isToday ? 'bg-blue-50' : ''
          } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
          onClick={() => setSelectedDate(new Date(year, month, day))}
        >
          <div className="font-semibold text-sm sm:text-base">{day}</div>
          {intake !== undefined && (
            <div className="text-xs sm:text-sm text-gray-600">
              {intake.value}
            </div>
          )}
        </div>
      );
    }

    return days;
  }

  if (!user) {
    return (
      <div className="min-h-screen text-center text-xl">
        <h3 className="text-xl mt-3 mb-3">Please log in to track your nori intake.</h3>
        <Link href="/login" className="text-blue-600">Login</Link>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Nori Tracker</h1>
          <p className="text-gray-600 mb-6">Track your daily nori sheet to improve your iodine levels.</p>
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center font-semibold py-1 sm:py-2 text-xs sm:text-sm">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6 text-center mx-auto">
          <p className="text-gray-600 mb-6">The recommended daily intake is 1.5 sheets. The average iodine levels are 10 mg/kg.</p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={fnHandleIntakeSubmit} className="space-y-4">
            <div>
              <label htmlFor="intake" className="block text-sm font-medium text-gray-700">
                Nori Intake for {selectedDate.toLocaleDateString()}
              </label>
              <input
                type="number"
                id="intake"
                step="0.1"
                min="0"
                max="1.5"
                value={intakeValue}
                onChange={(e) => setIntakeValue(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter sheets (0-1.5)"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isEditing ? 'Update Intake' : 'Save Intake'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
