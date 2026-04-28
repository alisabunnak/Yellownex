import { useState } from "react";
import { Data } from "../mockData.js/Data";

export default function SuggestedPeople() {
  const [followed, setFollowed] = useState({});

  const [suggestions] = useState(() =>
    [...Data].sort(() => Math.random() - 0.5).slice(0, 5),
  );

  const toggleFollow = (id) => {
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 w-72">
      <h2 className="text-sm font-semibold text-gray-700 mb-3">
        เพิ่มไปยังฟีดของคุณ
      </h2>

      <ul className="flex flex-col gap-3">
        {suggestions.map((person) => (
          <li key={person.id} className="flex items-center gap-3">
            <img
              src={person.image}
              alt={person.firstName}
              className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {person.firstName} {person.lastName}
              </p>
              <p className="text-xs text-gray-500 truncate">{person.role}</p>
              <p className="text-xs text-gray-400 truncate">{person.company}</p>
            </div>
            <button
              onClick={() => toggleFollow(person.id)}
              className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all flex-shrink-0 cursor-pointer ${
                followed[person.id]
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
              }`}
            >
              {followed[person.id] ? "ติดตามแล้ว" : "+ ติดตาม"}
            </button>
          </li>
        ))}
      </ul>

      <button className="mt-4 text-xs text-gray-500 hover:text-gray-700 hover:underline w-full text-left cursor-pointer">
        ดูการแนะนำทั้งหมด →
      </button>
    </div>
  );
}
