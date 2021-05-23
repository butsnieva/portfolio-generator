const profileDataArr = process.argv.slice(2, process.argv.length);
console.log(profileDataArr);

const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
}

printProfileData(profileDataArr)