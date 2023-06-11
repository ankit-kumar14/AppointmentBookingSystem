class Appointment {
  constructor(id, date, time, patientEmail, patientName, docUtc, modifiedUtc, mobileNumber, status) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.patientEmail = patientEmail;
    this.patientName = patientName;
    this.docUtc = docUtc;
    this.modifiedUtc = modifiedUtc;
    this.mobileNumber = mobileNumber;
    this.status = status;
  }
}

module.exports = Appointment;
