/* this function exepts 5 args, all exept time in miliseconds exept for the middle one*/

export function generateAppointmentTimes({
  startWorkTime,
  endWorkTime,
  tritmentTime,
  startBreakTime,
  endBreakTime,
}: {
  startWorkTime: number;
  endWorkTime: number;
  tritmentTime: number;
  startBreakTime?: number;
  endBreakTime?: number;
}) {
  const tritmentTimeInMiliseconds = tritmentTime * 60000;
  let changeDate = startWorkTime;
  let timeArr: number[] = [];
  let x: number = 0;
  console.log(tritmentTimeInMiliseconds);
  while (endWorkTime - changeDate > tritmentTimeInMiliseconds) {
    console.log(changeDate);
    if (startBreakTime === undefined && endBreakTime === undefined) {
      timeArr.push(changeDate);
    } else if (changeDate < startBreakTime! || changeDate > endBreakTime!) {
      timeArr.push(changeDate);
    }
    changeDate += tritmentTimeInMiliseconds;
  }
  console.log(timeArr);
  return timeArr;
}
