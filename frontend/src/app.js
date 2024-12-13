const app = document.getElementById('app');

const fetchPlanillas = async () => {
  try {
    const res = await fetch('http://localhost:4000/api/planilla');
    if (!res.ok) throw new Error('Error al obtener las planillas');
    const data = await res.json();

    app.innerHTML = `
      <h1>Planilla de Sueldos</h1>
      <ul>
        ${data.map(p => `
          <li>
            <strong>${p.employeeName}</strong> - Sueldo Total: $${p.totalSalary.toFixed(2)}
          </li>`).join('')}
      </ul>
    `;
  } catch (error) {
    console.error(error);
    app.innerHTML = `<p>Error al cargar los datos. Por favor, inténtalo más tarde.</p>`;
  }
};

fetchPlanillas();

