var { ClientModel } = require('../models');

const baseClient = {
    firstName: 'Michael',
    lastName: 'Jordan',
    email: 'test@gmail.com',
    password: '406',
    phone: '4062416585',
    heroPhoto: "https://dl.dropboxusercontent.com/s/vng6eseweakij3r/mj-1.png?dl=0",
    aboutHero: 'Michael Jordan is a former American basketball player who led the Chicago Bulls to six NBA championships and won the Most Valuable Player Award five times.',
    aboutHeroLong: 'Michael Jeffrey Jordan, also known by his initials MJ, is an American businessman and former professional basketball player. He is the principal owner and chairman of the Charlotte Hornets of the National Basketball Association (NBA) and of 23XI Racing in the NASCAR Cup Series. He played 15 seasons in the NBA, winning six championships with the Chicago Bulls. His biography on the official NBA website states: "By acclamation, Michael Jordan is the greatest basketball player of all time." He was integral in helping to popularize the NBA around the world in the 1980s and 1990s,[10] becoming a global cultural icon in the process.',
    stats: [
        { headline: 'Games', value: '1072' },
        { headline: 'Ave Points', value: '30.1' },
        { headline: 'Ave Rebounds', value: '6.2' },
        { headline: '3-Point Field Goal Percent', value: '2' },
        { headline: 'Felid Goal Percent', value: '49.7' },
        { headline: 'Free Throw Percent', value: '83.5' },
        { headline: 'Blocks Per Game', value: '.8' },
        { headline: 'Turnovers Per Game', value: '2.7' },
        { headline: 'Games Started', value: '1039' },
    ],
    clientStats: [
        { headline: 'Position', value: 'Guard' },
        { headline: 'Class', value: 'Freshman' },
        { headline: 'Height', value: '6-6' },
        { headline: 'Weight', value: '198' },
        { headline: 'Hometown', value: 'Brooklyn, NY' },
        { headline: 'College', value: 'UNC' },
        { headline: 'NBA Debut', value: 'October 26, 1984' },
    ],
    clientInfo: [
        { headline: 'Personal', value: 'Prepped at Santa Monica High School in Santa Monica, Calif... three-time first team All-Ocean League selection... Vikings made three straight CIF Southern Section playoff appearances... averaged 17 ppg as a sophomore, leading SMHS to the CIF Southern Section title... averaged 19.5 points, 8.0 rebounds and 5.0 assists as a junior as the Vikings advanced to the second round of the section tournament... poured in 38 points in a game against Chino Hills High School... 3-star prospect according to Rivals.com.' },
        { headline: 'Club', value: 'Competed for the California Stars AAU team for three years... made a run to the semifinals of the Fab 48 Tournament.' },
        { headline: '2018-19', value: 'Freshman season with SU… appeared in 15 games… season-high nine points against Prairie View (Dec. 20)… season-high three 3-pointers made against Prairie View (Dec. 20)… had a blocked shot against Utah Valley (Jan. 12).' },
        { headline: '2019-20', value: 'Appeared in 20 games and earned two starts during his sophomore season... averaged 1.8 points in 5.6 minutes per game... went 13-37 (.351) from the field... also hit five threes and was a perfect 4-4 from the free-throw line... scored in eight different games, including a season-high of nine points on three 3-pointers at Chicago State (Jan. 4)... also had a seven-point, three-steal effort in the season opener versus Pacific Lutheran (Nov. 5). and a seven-point, four-rebound outing versus Pacific (Ore.) (Nov. 12)... 2019-20 WAC All-Academic Team.' },
    ],
    headlineStats: [
        { headline: 'Rebounds', value: '4' },
        { headline: 'Assists', value: '2' },
        { headline: 'Blocks', value: '3' },
        { headline: 'Steals', value: '1' },
    ],
    clientLinks: [
        { iconType: 'twitter', url: 'https://twitter.com/Jumpman23?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor', headline: 'Twitter' },
        { iconType: 'instagram', url: 'https://www.instagram.com/jumpman23/', headline: 'Instagram' },
        { iconType: 'link', url: 'https://www.nba.com/history/legends/profiles/michael-jordan', headline: 'The Goat' },
    ],
    photoRefs: [
        // { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', value: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', value: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', value: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', value: '', },

        { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', value: '', },
        { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', value: '', },
        { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', value: '', },
        { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', value: '', },
    ],
    highlightRefs: [
        { url: 'https://www.youtube.com/embed/Jopi5e46PAY', value: 'Only the best and nothing less.', videoId: 'SUo8skGvl-Q' },
        { url: 'https://www.youtube.com/embed/Jopi5e46PAY', value: 'An exclusive mix of 1993 season highlights with many rare footages to celebrate the greatness of the greatest player of all time.', videoId: '5zcq_BaMR2g' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Michael Jordan 39 Pts 11 Ast 6 Threes Full Highlights | Chicago Bulls vs Portland Trail Blazers - Game 1 | 1992 NBA Finals', videoId: 'hynjpv8y1pA' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Michael Jordan delivers his speech upon being enshrined to the Naismith Memorial Basketball Hall of Fame as part of the class of 2009. To learn more about Michael Jordan take a look at his official Hall of Fame bio at http://www.hoophall.com/hall-of-famer...​', videoId: 'XLzBMGXfK4c' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Michael Jordan, one of the greatest athletes of all time, receives the nations highest civilian honor in the Presidential Medal of Freedom. Jordan played 15 seasons in the NBA for the Chicago Bulls and Washington Wizards; he is currently a principal owner and chairman of the Charlotte Hornets.  During his career, he won six championships, five Most Valuable Player awards, and appeared in 14 All-Star games. About the NBA:The NBA is the premier professional basketball league in the United States and Canada. The league is truly global, with games and programming in 215 countries and territories in 47 languages, as well as NBA rosters at the start of the 2016-17 season featuring  a record 113 international players from a record 41 countries and territories. For the 2016-17 season, each of the leagues 30 teams will play 82 regular-season games, followed by a postseason for those that qualify. The NBA consists of the following teams: Atlanta Hawks; Boston Celtics; Brooklyn Nets; Charlotte Hornets; Chicago Bulls; Cleveland Cavaliers; Dallas Mavericks; Denver Nuggets; Detroit Pistons; Golden State Warriors; Houston Rockets; Indiana Pacers; Los Angeles Clippers; Los Angeles Lakers; Memphis Grizzlies; Miami Heat; Milwaukee Bucks; Minnesota Timberwolves; New Orleans Pelicans; New York Knicks; Oklahoma City Thunder; Orlando Magic; Philadelphia 76ers; Phoenix Suns; Portland Trail Blazers; Sacramento Kings; San Antonio Spurs; Toronto Raptors; Utah Jazz; Washington Wizards.The NBA offers real time access to live regular season NBA games with a subscription to NBA LEAGUE PASS, available globally for TV, broadband, and mobile.  Real-time Stats, Scores, Highlights and more are available to fans on web and mobile with the NBA App. For more information, as well as all the latest NBA news and highlights, log onto the leagues official website at http://www.NBA.com​ ', videoId: 'UTWvhpd6Qpo' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'hynjpv8y1pA' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'hynjpv8y1pA' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'hynjpv8y1pA' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'hynjpv8y1pA' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'hynjpv8y1pA' },

    ],
    fullGameRefs: [
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'hynjpv8y1pA' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'Jopi5e46PAY' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'Jopi5e46PAY' },
        { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', value: 'Something', videoId: 'cbuZfY2S2UQ' },
    ],
}


module.exports = {

    create: async function () {
        try {
            const client = await ClientModel.create(baseClient);
            return client

        } catch (e) {
            console.log("Err", e)
        }
    },

    find: async function (client_id) {
        try {
            const client = await ClientModel.find(client_id);
            
            return client

        } catch (e) {
            console.log("Err", e)
        } 
    }
}


// PATRICK'S PHOTO_DATA

// { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', info: '', },
// { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', info: '', },
// { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', info: '', },
// { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', info: '', },

        // { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', info: '', },

        // { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', info: '', },
        // { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', info: '', },

