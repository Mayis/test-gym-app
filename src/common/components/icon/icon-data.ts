export const ICONS = {
  message: "/icons/message.svg",
  search: "search.svg",
  "arrow-left": "/icons/arrow-left.svg",
  "arrow-right": "/icons/arrow-right.svg",
  "burger-menu": "/icons/burger-menu.svg",
  "flash-black": "/icons/flash-black.svg",
  "flash-white": "/icons/flash-white.svg"
} as const;

export type IconName = keyof typeof ICONS;
