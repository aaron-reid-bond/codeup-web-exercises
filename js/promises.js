// fetch('https://api.github.com/repos/aaron-reid-bond/codeup-web-exercises/commits', {headers: {'Authorization': GIT_HUB}}).then(response => response.json()).then(response => console.log(response))


fetch('https://api.github.com/repos/aaron-reid-bond/codeup-web-exercises/commits', {headers: {'Authorization': GIT_HUB}}).then(response => response.json()).then(response => {
    let time = response[0].commit.committer.date

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    console.log(formatDate(time));
})

// my failure

// function wait(x){
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, x);
//     });
//     console.log(myPromise);
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// lesson sample
function wait(num){

    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve()
        }, num)

    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

