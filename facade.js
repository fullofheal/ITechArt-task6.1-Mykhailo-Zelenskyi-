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

const resumeExample = {
  qualification: true,
  meetsRequirements: false,
  meetsSalaryExpectations: true  
}

class CompanyA {
  checkResume(qualification) {
    return qualification ? true : false
  }
}

class CompanyB {
  checkRequirements(meetsRequirements) {
    return meetsRequirements ? true : false
  }
}

class CompanyC {
  checkSalaryExpectations(meetsSalaryExpectations) {
    return meetsSalaryExpectations ? true : false
  }
}

class ApplyResume {
  #companyA = new CompanyA;
  #companyB = new CompanyB;
  #companyC = new CompanyC;
  constructor(resume) {
    this.qualification = resume.qualification,
    this.meetsRequirements = resume.meetsRequirements,
    this.meetsSalaryExpectations = resume.meetsSalaryExpectations
  }
  
  apply() {
    const qualified = this.#companyA.checkResume(this.qualification);
    const requrementsMet = this.#companyB.checkRequirements(this.meetsRequirements);
    const salaryExpectationsMet = this.#companyC.checkSalaryExpectations(this.meetsSalaryExpectations);

    return qualified && requrementsMet && salaryExpectationsMet ? 'Applicant is suitable for this position' : 'Applicant doesnt match the position'
  }
}

const application = new ApplyResume(resumeExample);

console.log(application.apply());