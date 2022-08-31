// Array of a String, String, String, and Number
function createEmployeeRecord(array){
  let data
  return data ={
    firstName:array[0],
    familyName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
}
function createEmployeeRecords(arrays){
  return arrays.map(createEmployeeRecord)
}
function createTimeInEvent(employee,punchCards){
  const [date, hour] = punchCards.split(' ')
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  })
  return employee
}
function createTimeOutEvent(employee,punchCards){
  const [date, hour] = punchCards.split(' ')
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  })
  return employee
}
function hoursWorkedOnDate(employee, dYDM){
  const timeIn = employee.timeInEvents.find((e) => e.date === dYDM).hour
  const timeOut = employee.timeOutEvents.find((e) => e.date === dYDM).hour
  return (timeOut - timeIn)/100
}
function wagesEarnedOnDate(employee, dYMD){
  const wage = hoursWorkedOnDate(employee, dYMD) * employee.payPerHour
  return parseFloat(wage.toString())
}
function allWagesFor(employee){
  const totalDates = employee.timeInEvents.map((e) => e.date)
  const payable = totalDates.reduce((memo, d) => memo + wagesEarnedOnDate(employee, d), 0)

return payable
}
function calculatePayroll(records){
  const Allpayment = (records.map((employee) => {return allWagesFor(employee)}))
  return Allpayment.reduce((acc, cv) => acc + cv)}