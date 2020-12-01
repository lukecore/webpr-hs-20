const bonusFormula = "employee.revenue * 0.2";

const bonusCalculation = employee => employee.bonus = Function("employee", "return " + bonusFormula)(employee);

const e = {revenue: 10000, bonus: null};
bonusCalculation(e);
const factor_ = 0.2;
e.bonus === e.revenue * factor_;
document.writeln(e.bonus);