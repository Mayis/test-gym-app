import React from "react";

interface Props {
  count: number;
}

function MessageTracker({ count }: Props) {
  return (
    <div className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500">
      <span className="text-l text-white">{count}</span>
    </div>
  );
}

export default MessageTracker;
