// SETTIMEOUT & SETINTERVAL
// ========================
console.log("Hello!!!!")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

const id = setInterval(() => {
console.log(Math.random()* 10) 
}, 2000);

// clearInterval(id);

// =======================
// FILTER METHOD
// =======================

const marks = [50, 85, 65, 98, 89, 36, 78, 69, 92, 59, 34, 73, 66];
const odds = marks.filter(m => {
    return m % 2 === 1; 
})

const smallMarks = marks.filter(m => m <= 50);

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2013
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2004
    },
    {
        title: 'Alien',
        score: 90,
        year: 1986
    },
    {
        title:'Waterworld',
        score:62,
        year: 1995
    },
    {
        title:'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title:'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 1979
    }
]

const goodMovies = movies.filter(movies => {
    return movies.score > 80
});
// OR
const badMovies = movies.filter(m => m.score < 80);
const recentMovies = movies.filter(m => m.year >=1999);

// ====================================
// USE FILTER METHOD WITH MAP METHOD
// ====================================
const goodTitles = goodMovies.map(m => m.title);
                //   OR
movies.filter(m => m.score >80).map(m => m.title); 
                    // OR  
movies
.filter(m => m.score >80)
.map(m => m.title);

validUserNames(['mark', 'staceymom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);

function validUserNames (usernames) {
    let filterUsernames = usernames.filter(function(usernames){
        return usernames.length < 10;
})
    return filterUsernames;
}
                    // OR
function validUserNames (usernames) {
    return usernames.filter(function(usernames) {
        return usernames.length < 10;
    })
}

// =============================================
// SOME & EVERY METHODS give true/false result
// =============================================

const exams = [80, 98, 92, 78, 77, 90, 81, 89, 84, 77]

exams.every(score => score >= 75)
                    OR
exams.every(score => {
    return score >= 75;
})

exams.some(score => score >= 90)

const movies = [
        {
            title: 'Amadeus',
            score: 99,
            year: 1984
        },
        {
            title: 'Stand By Me',
            score: 85,
            year: 2013
        },
        {
            title: 'Parasite',
            score: 95,
            year: 2019
        },
        {
            title: 'Alien',
            score: 90,
            year: 1986
        },
        {
            title:'Waterworld',
            score:62,
            year: 1995
        },
        {
            title:'Jingle All The Way',
            score: 71,
            year: 1996
        },
        {
            title:'Notting Hill',
            score: 77,
            year: 1999
        },
        {
            title: '13 Going On 30',
            score: 70,
            year: 1979
        }
    ]
    movies.some(movie => movie.year > 2012)

    function allEvens(array) {
        return array.every(num => num % 2 === 0)
    }
    

