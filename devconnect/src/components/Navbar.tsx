// import React from 'react';

type NavbarProps = {
  currentDate: string;
  setCurrentDate: (date: string) => void;
};

export function Navbar({ currentDate, setCurrentDate }: NavbarProps) {
  const today = new Date();
  const dates = [];
  for (let i = -2; i <= 2; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split("T")[0]);
  }

  return (
    <div className="flex space-x-2 mb-4 justify-center">
      {dates.map(date => (
        <button
          key={date}
          onClick={() => setCurrentDate(date)}
          className={`py-2 px-4 rounded-lg font-semibold transition-colors 
                      ${currentDate === date ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {new Date(date).toLocaleDateString()}
        </button>
      ))}
    </div>
  );
}