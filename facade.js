// # Façade 1

// You have classes 
// ```
// class CompanyA
//   method checkResume
// class CompanyB
//   method checkRequirements
// class CompanyC
//   method checkSalaryExpectations
// ```
// Implement class that will provide simple interface with one method which allows apply resume for each company and get the result.

class CompanyA {
  checkResume() {}
}

class CompanyB {
  checkRequirements() {}
}

class CompanyC {
  checkSalaryExpectations() {}
}

class ApplyResume {
  #companyA = new CompanyA;
  #companyB = new CompanyB;
  #companyC = new CompanyC;
  
  apply() {
    this.#companyA.checkResume();
    this.#companyB.checkRequirements();
    this.#companyC.checkSalaryExpectations();
  }
}