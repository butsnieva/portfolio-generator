const fs = require('fs')
const generatePage = require('./src/page-template')

// ------ capture user input ------ //
const profileDataArr = process.argv.slice(2)  //before  -  process.argv.slice(2, process.argv.length)
const [name, github] = profileDataArr

// ------ print dynamic output ------ //

// const printProfileData = profileDataArr => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// }
// printProfileData(profileDataArr)


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error (err)
    console.log('Portfolio complete! Check out index.html to see the output!')
})

//When an arrow function has one argument, parentheses are optional. However, when there are no arguments—or more than one—parentheses are necessary.