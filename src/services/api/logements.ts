import logements from "./logements.json";

export const getLogement = () => {
  return logements;
};

export const getLogementById = (id) => {
  if (!id) return null;

  return logements.find(({ id: _id }) => _id === id);
};
