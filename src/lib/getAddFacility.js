export const getAaddFacility = async () => {
  const res = await fetch("");
  const data = await res.json();
  return data;
};