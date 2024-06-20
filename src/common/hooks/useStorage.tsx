import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StorageState {
  token?: string;
  setToken: (newToken: string) => void;
}

const defaultState = {
  token: undefined,
  currentCheckIDs: [],
};

const useStorage = create<StorageState>()(
  persist(
    (set) => ({
      ...defaultState,
      setToken: (newToken) => set({ token: newToken }),
    }),
    {
      name: "rehaviour-storage",
      partialize: (state) => ({ token: state.token }),
    }
  )
);

export default useStorage;
