
export const getVisibleNotes = (notes, { sortBy, text }) => {
    return notes.filter((note) => {
        let textMatch = note.title.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'alpha') {
            return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }
    });
};