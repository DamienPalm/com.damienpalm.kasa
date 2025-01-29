import { getLogement, getLogementById } from "../services/api/logements";

export const useLogements = () => {
  return getLogement();
};

export const useLogementById = (id) => {
  return getLogementById(id);
};
