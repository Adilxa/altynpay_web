import { create } from "zustand";

interface HeaderStore {
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  isOpenModal: false,
  setIsOpenModal: (value) => set({ isOpenModal: value }),
}));
