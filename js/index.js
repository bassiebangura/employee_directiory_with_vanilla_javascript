let url = "https://randomuser.me/api/?results=15";
const capitalize = (s) => {
  //capitalize a string passed to it
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

let formatDOB = dob => {
  //function returns DOB in format needed for display
  let { date } = dob;
  let dateOfBirth = new Date(date);
  let day = dateOfBirth.getDate();
  let month = dateOfBirth.getMonth() + 1;
  let year = dateOfBirth.getYear();
  return `${month}-${day}-${year}`;
};
let formatEmployeeData = data => {
  //function recieves data from fetch request as parameter
  //formats data and put them in an array
  let arrayOfEmployeeData = [];
  for (item of data) {
    let firstName = item.name.first;
    let lastName = item.name.last;
    let fullName = `${firstName} ${lastName}`;
    let city = item.location.city;
    let emailAddress = item.email;
    let imgSource = item.picture.medium;

    let dob = formatDOB(item.dob);
    arrayOfEmployeeData.push({ fullName, city, emailAddress, imgSource, dob });
  }
  return arrayOfEmployeeData;
};

fetch(url)
  .then(res => res.json())
  .then(res => res.results)
  .then(res => formatEmployeeData(res))
  .then(res => console.log(res));

// let arrayOfEmployeesData = getEmployeeData(url);
// arrayOfEmployeesData.then(res => console.log(res));
// }

// {
//     fullName,
//     city,
//     emailAddress,
//     imgSource,
//     phoneNumber,
//     address,
//     dob
//   }
