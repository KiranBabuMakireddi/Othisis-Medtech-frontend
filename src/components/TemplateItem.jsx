import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

const TemplateItem = ({ item }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: "TEMPLATE_ITEM",
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      {/* Use transparent drag preview to keep original styling visible */}
      <DragPreviewImage connect={preview} src="/transparent.png" />

      <div
        ref={drag}
        className="h-[43px] rounded-md px-3 py-2 m-2 bg-[#f2f2f2] text-[#151515] text-sm text-center font-medium cursor-grab shadow-sm opacity-100"
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        {item.text}
      </div>
    </>
  );
};

export default TemplateItem;
