// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.


var WorldCupSquad = ['Shoaib Malik', 'Shaheen Afridi', 'Umer Akmal', 'Babar Azam', 'Muhammad Rizwan', 'Fakhar Zaman', 'Shadab Khan', 'Haris Rauf', 'Muhammad Nawaz', 'Shan Masood', 'Faheem Ashraf', 'Shahid Afridi', 'Naseem Shah', 'Hasan Ali', 'Muhammad Hafeez']
console.log(WorldCupSquad)
var team1 = WorldCupSquad.slice(0, 4)
var team2 = WorldCupSquad.slice(5, 7)
var team3 = WorldCupSquad.slice(9, 11)
var team4 = WorldCupSquad.slice(12, 16)
var finalTeam = team1.concat(team2, team3, team4)
console.log(finalTeam)
var len = finalTeam.length
console.log(len)