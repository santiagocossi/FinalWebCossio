const API_URL = 'http://localhost:4000/api/planilla';

export const getPlanillas = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Error al obtener las planillas');
  return res.json();
};
