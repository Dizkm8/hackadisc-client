import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StorageState {
  token?: string;
  setToken: (newToken: string) => void;
  role: number;
  setRole: (newRole: number) => void;
  username: string;
  setUsername: (newUsername: string) => void;
  workerRuts: string[];
  setWorkerRuts: (newWorkerRuts: string[]) => void;
  addWorkerRut: (rut: string) => void;
  removeWorkerRut: (rut: string) => void;
}

const defaultState = {
  token: undefined,
  role: -1,
  username: "Desconocid@",
  workerRuts: [],
};

const useStorage = create<StorageState>()(
  persist(
    (set) => ({
      ...defaultState,
      setToken: (newToken) => set({ token: newToken }),
      setRole: (newRole) => set({ role: newRole }),
      setUsername: (newUsername) => set({ username: newUsername }),
      setWorkerRuts: (newWorkerRuts) => set({ workerRuts: newWorkerRuts }),
      addWorkerRut: (rut) =>
        set((state) => ({ workerRuts: [...state.workerRuts, rut] })),
      removeWorkerRut: (rut) =>
        set((state) => ({
          workerRuts: state.workerRuts.filter((workerRut) => workerRut !== rut),
        })),
    }),
    {
      name: "rehaviour-storage",
      partialize: (state) => ({
        token: state.token,
        role: state.role,
        username: state.username,
      }),
    }
  )
);

export default useStorage;
