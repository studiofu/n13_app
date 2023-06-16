import { create } from 'zustand';

interface NoteModalStore {
    notes: string[];
    addNote: (note: string) => void;
    removeNote: (note: string) => void;    
}

const useNoteModal = create<NoteModalStore>((set) => ({
    notes: [],
    addNote: (note: string) => set((state) => ({ notes: [...state.notes, note] })),
    removeNote: (note: string) => set((state) => ({ notes: state.notes.filter((n) => n !== note) })),
}));

export default useNoteModal;
