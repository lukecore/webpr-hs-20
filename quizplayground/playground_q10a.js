const bonusFormula = "employee.bonus  = employee.revenue * 0.2";


const bonusCalculation = employee => eval(bonusFormula);

const e = {revenue: 10000, bonus: null};
bonusCalculation(e);
const factor_ = 0.2;
e.bonus === e.revenue * factor_;
document.writeln(e.bonus);