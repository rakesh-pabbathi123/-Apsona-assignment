const API_URL = "http://localhost:5000/api";

export const getNotes = async () => {
  const response = await fetch(`${API_URL}/notes`);
  return await response.json();
};

export const createNote = async (note) => {
  const response = await fetch(`${API_URL}/notes/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
  return await response.json();
};
