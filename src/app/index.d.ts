interface Complaint {
  timestamp: string;
  email: string;
  fromSail: string;
  staffNumber: string;
  complaineeName: string;
  department: string;
  contactNumber: string;
  quarterType: string;
  blockNumber: string;
  unitNumber: string;
  newAllotment: string;
  quarterNumber: string;
  workNature: string;
  complaintDetails: string;
  status: string;
  pendingDays: string;
  attendingWorkId: string;
  contract: string;
  jobCardNumber: string;
  attendPeriodFrom: string;
  attendPeriodTo: string;
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
