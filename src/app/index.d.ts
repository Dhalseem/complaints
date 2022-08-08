interface Complaint {
  id?: string;
  timestamp: string;
  email: string;
  organization: string;
  staffNumber: string;
  name: string;
  department: string;
  contactNumber: string;
  quarterType: string;
  blockNumber: string;
  unitNumber: string;
  isThisANewAllotment: string;
  qrtrNo: string;
  natureOfWork: string;
  complaintDetails: string;
  status: string;
  pendingDays: string;
  attendingWorkId: string;
  contract: string;
  jobCardNo: string;
  attPeriodFrom: string;
  attPeriodTo: string;
  remarks: string;
}
interface userToken {
  username: string;
  email: string;
  fullName: string;
  contactNumber: string;
  organization: string;
  department: string;
  grant: string;
  iat: number;
  exp: number;
}

interface loginResponse {
  message: string;
  token: string;
}
