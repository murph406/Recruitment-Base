// var User = require('./../models/user');
// var bcrypt = require('bcryptjs');


const client = {
  firstName: 'Patrick',
  lastName: 'Murphy',
  email: 'test@gmail.com',
  password: '406',
  phone: '4062416585',
  heroPhoto: "https://dl.dropboxusercontent.com/s/qi4bfw2b57yo111/hero-image.png?dl=0",
  aboutHero: 'Kobe Bean Bryant was born on August 23, 1978, in Philadelphia, Pennsylvania. ... When the family returned to Philadelphia in 1991, Bryant joined the Lower Merion High School basketball team, leading it to the state championships four years in a row. With an eye on the NBA, he also started working out with the 76ers.Kobe Bean Bryant was born on August 23, 1978, in Philadelphia, Pennsylvania. ... When the family returned to Philadelphia in 1991, Bryant joined the Lower Merion High School basketball team, leading it to the state championships four years in a row. With an eye on the NBA, he also started working out with the 76ers.Kobe Bean Bryant was born on August 23, 1978, in Philadelphia, Pennsylvania. ... When the family returned to Philadelphia in 1991, Bryant joined the Lower Merion High School basketball team, leading it to the state championships four years in a row. With an eye on the NBA, he also started working out with the 76ers.Kobe Bean Bryant was born on August 23, 1978, in Philadelphia, Pennsylvania. ... When the family returned to Philadelphia in 1991, Bryant joined the Lower Merion High School basketball team, leading it to the state championships four years in a row. With an eye on the NBA, he also started working out with the 76ers.',
  aboutHeroLong: '',
  stats: [
    { type: 'Points', value: '12', date: new Date },
    { type: 'Ave Minutes', value: '26', date: new Date },
    { type: 'Field Goal Attempts', value: '32', date: new Date },
    { type: '3-Point Field Goals Made', value: '2', date: new Date },
    { type: 'Free Throw Percent', value: '84', date: new Date },
    { type: 'Rebounds', value: '4', date: new Date },
    { type: 'Assists', value: '2', date: new Date },
    { type: 'Blocks', value: '3', date: new Date },
    { type: 'Steals', value: '1', date: new Date },
  ],
  personalInfo: [
    { type: 'Position', value: 'Guard' },
    { type: 'Class', value: 'Junior' },
    { type: 'Height', value: '6 6" ' },
    { type: 'Weight', value: '180' },
    { type: 'Hometown', value: 'Spokane, WA' },
    { type: 'Highschool', value: 'Gonzaga Prep' },
    { type: 'Club', value: 'AAU Missoula' },
    { type: 'GPA', value: '3.3' },
  ],
  bio: [
    { headline: 'Personal', text: 'Prepped at Santa Monica High School in Santa Monica, Calif... three-time first team All-Ocean League selection... Vikings made three straight CIF Southern Section playoff appearances... averaged 17 ppg as a sophomore, leading SMHS to the CIF Southern Section title... averaged 19.5 points, 8.0 rebounds and 5.0 assists as a junior as the Vikings advanced to the second round of the section tournament... poured in 38 points in a game against Chino Hills High School... 3-star prospect according to Rivals.com.' },
    { headline: 'Club', text: 'Competed for the California Stars AAU team for three years... made a run to the semifinals of the Fab 48 Tournament.' },
    { headline: '2018-19', text: 'Freshman season with SU… appeared in 15 games… season-high nine points against Prairie View (Dec. 20)… season-high three 3-pointers made against Prairie View (Dec. 20)… had a blocked shot against Utah Valley (Jan. 12).' },
    { headline: '2019-20', text: 'Appeared in 20 games and earned two starts during his sophomore season... averaged 1.8 points in 5.6 minutes per game... went 13-37 (.351) from the field... also hit five threes and was a perfect 4-4 from the free-throw line... scored in eight different games, including a season-high of nine points on three 3-pointers at Chicago State (Jan. 4)... also had a seven-point, three-steal effort in the season opener versus Pacific Lutheran (Nov. 5). and a seven-point, four-rebound outing versus Pacific (Ore.) (Nov. 12)... 2019-20 WAC All-Academic Team.' },
  ],
  links: [
    { type: 'youtube', value: 'www.youtube.com', name: 'Youtube' },
    { type: 'any', value: 'www.youtube.com', name: 'Personal Website' },
    { type: 'linkedIn', value: 'www.youtube.com', name: 'LinkedIn' },
  ],
  photoRefs: [
    { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', info: '', date: new Date },

    { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', info: '', date: new Date },

    { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', info: '', date: new Date },

    { url: 'https://dl.dropboxusercontent.com/s/gcl5bmpay4zy6t9/photo-1.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/0xkmy68f1wggd9z/photo-2.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/86wgcd4tvmy6qhh/photo-3.png?dl=0', info: '', date: new Date },
    { url: 'https://dl.dropboxusercontent.com/s/wzzdvudqt7h6bj5/photo-4.png?dl=0', info: '', date: new Date },
  ],
  highlightRefs: [
    { url: 'https://www.youtube.com/embed/Jopi5e46PAY', info: 'Something', date: new Date, videoId: 'Jopi5e46PAY' },
    { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', info: 'Something', date: new Date, videoId: 'Jopi5e46PAY' },
    { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', info: 'Something', date: new Date, videoId: 'Jopi5e46PAY' },
    { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', info: 'Something', date: new Date, videoId: 'cbuZfY2S2UQ' },
  ],
  fullGameRefs: [
    { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', info: 'Something', date: new Date, videoId: 'Jopi5e46PAY' },
    { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', info: 'Something', date: new Date, videoId: 'Jopi5e46PAY' },
    { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', info: 'Something', date: new Date, videoId: 'Jopi5e46PAY' },
    { url: 'https://www.youtube.com/watch?v=cbuZfY2S2UQ', info: 'Something', date: new Date, videoId: 'cbuZfY2S2UQ' },

  ],
}

module.exports = {

  login: function (req, res, next) {
    let { password } = req.body
    console.log(password)

    if (password == client.password) {
      // ^^^ Obviously do not keep this 
      return res.status(200).send({ success: true });
    } else {
      return res.status(401).send({ error: "Hint 406" });
    }
  },

  get: function (req, res, next) {
    return res.status(200).send(client);
  }
}

