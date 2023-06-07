const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
let lang = []
const threeLang = users.filter(el => {
    if(el.languages.length >= 3) {
        lang.push({
            name: el.name,
            languages: el.languages
        })
    }
    return lang
})

console.log(lang);

let emails = []
const email = users.map(el => {
   emails.push(el.email)
    return emails
})

console.log(emails);

const sum = users.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber.yearsOfExperience;
}, 0);

console.log(sum);



const getLongestEmail = users.reduce((total, {email}) => {
    if(total.length < email.length){
        total = email
    }
    return total
}, '');

console.log(getLongestEmail);

let names = users.reduce((accumulation, currentNumber) => {

    return accumulation += currentNumber.name + ', ';
}, 'Your Instructors are: ');


console.log(names);