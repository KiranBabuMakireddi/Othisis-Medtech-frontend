import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { Microphone, Info } from "phosphor-react";
import shareIcon from "../assets/share-icon.png";
import trashIcon from "../assets/trash-icon.png";


const DropArea = () => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TEMPLATE_ITEM",
    drop: (item) => setDroppedItems((prev) => [...prev, item]),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <main className="relative flex-1 bg-templatebg m-4 overflow-y-auto font-urbanist">
      {/* Overlay covers everything */}
      {isOver && (
        <div className="fixed inset-0 bg-black/30 z-50 h-[100%] pointer-events-none transition-opacity" />
      )}

      <div className=" rounded-lg p-6  flex flex-col relative z-40">
        {/* Header (included in overlay) */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold flex items-center gap-1">
            Root Canal
            <Info size={20} className="text-[#151515]" />
          </h3>

          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 bg-[#fdfdfd] border px-4 py-2 rounded-full shadow-sm hover:shadow-md transition">
              <Microphone size={20} className="text-navbarscolor" weight="fill" />
              <span className="font-medium">Resume</span>
            </button>

            <button className="text-black hover:text-gray-700 text-xl">
              <img src={shareIcon} alt="Share" className="w-5 h-5" />
            </button>

            <button className="text-red-600 hover:text-red-800 text-xl">
              <img src={trashIcon} alt="Delete" className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Drop zone - floats above overlay */}
        <div className="relative z-[60]">
          <div
            ref={drop}
            className={`min-h-[300px] max-h-[70vh] overflow-y-auto scrollbar-hide p-4 rounded-md bg-[#fafafa] shadow-inner`}
          >
            {droppedItems.length === 0 ? (
              <p className="text-gray-400 text-center">
                Drag items from the template and drop them here to build your
                note.
              </p>
            ) : (
              <div className="space-y-4">
                {droppedItems.map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#ECECEC] rounded-md px-4 py-3  w-[460px]"
                  >
                    <p className="font-semibold">{item.text}:</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                      <li>Example line 1</li>
                      <li>Example line 2</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DropArea;
