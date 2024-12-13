import PlanillaSueldo from '../models/planilla.model.js';

export const addPlanilla = async (req, res) => {
  try {
    const { employeeName, baseSalary, deductions, bonuses } = req.body;

    const totalSalary = baseSalary - deductions + bonuses;

    const planilla = new PlanillaSueldo({
      employeeName,
      baseSalary,
      deductions,
      bonuses,
      totalSalary,
    });

    await planilla.save();
    res.status(201).json({ message: 'Planilla agregada', planilla });
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar la planilla', error });
  }
};

export const getPlanillas = async (req, res) => {
  try {
    const planillas = await PlanillaSueldo.find();
    res.json(planillas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las planillas', error });
  }
};
