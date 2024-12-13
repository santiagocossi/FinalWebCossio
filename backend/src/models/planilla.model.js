import mongoose from 'mongoose';

const planillaSchema = new mongoose.Schema({
  employeeName: { type: String, required: true },
  baseSalary: { type: Number, required: true },
  deductions: { type: Number, required: true },
  bonuses: { type: Number, required: true },
  totalSalary: { type: Number, required: true },
});

export default mongoose.model('PlanillaSueldo', planillaSchema);
