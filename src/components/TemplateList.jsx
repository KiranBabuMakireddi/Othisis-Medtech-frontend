import React, { useState } from "react";

import { MagnifyingGlass, PencilSimple } from "phosphor-react";
import TemplateItem from "./Templateitem";

const allItems = [
  { id: 1, text: "Subjective" },
  { id: 2, text: "Objective" },
  { id: 3, text: "Assessment & Plan" },
  { id: 4, text: "Findings" },
  { id: 5, text: "Diagnoses" },
  { id: 6, text: "Treatment" },
  { id: 7, text: "Recovery" },
  { id: 8, text: "Objective" },
  { id: 9, text: "Assessment & Plan" },
  { id: 10, text: "Treatment" }
];

const TemplateList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = allItems.filter(item =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="w-[315px] h-[85%] bg-templatebg flex flex-col m-4 rounded-lg font-urbanist relative">
      <h2 className="text-2xl font-bold text-center mt-4">Template</h2>

      <div className="flex-1 bg-templatelistbg m-5 mt-4 rounded-md shadow-inner flex flex-col overflow-hidden">
        <div className="relative px-2 pt-2 h-[43px] m-2">
          <input
            type="text"
            placeholder="Search Templates"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md px-3 py-2 bg-templateItembg text-sm font-medium shadow-sm placeholder-searchColor hover:bg-gray-100 focus:outline-none"
          />
          <MagnifyingGlass
            size={16}
            className="absolute right-4 top-4 text-searchColor pointer-events-none"
          />
        </div>

        <div className="flex-1 overflow-y-auto mt-2 space-y-3 px-2 pb-8 scrollbar-hide">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <TemplateItem key={item.id} item={item} />
            ))
          ) : (
            <p className="text-sm text-searchColor text-center">No templates found</p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-[#E3E3E3]">
        <button className="bg-navbarscolor h-[43px] text-white py-2 rounded-md w-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-200">
          <PencilSimple size={16} />
          Edit
        </button>
      </div>
    </aside>
  );
};

export default TemplateList;
