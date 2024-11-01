"use client";

import { useState } from "react";
import CategoryLayout from "../layout";
import Books from "./Books";
import Videos from "./Videos";

const tabs = [
  { id: "tab1", label: "Books", Component: <Books /> },
  { id: "tab2", label: "Videos", Component: <Videos /> },
];

function Art() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ActiveTabComponent = tabs.find(
    (tab) => tab.id === activeTab,
  )?.Component;

  return (
    <CategoryLayout
      headerTitle="Art"
      headerSubTitle="Explore a diverse range of educational materials on art, from history and techniques to modern styles and creative expression."
      headerIcon="&#127912;"
    >
      <div className="mt-8">
        <div className="flex space-x-4 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 font-bold"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4">{ActiveTabComponent}</div>
      </div>
    </CategoryLayout>
  );
}

export default Art;
