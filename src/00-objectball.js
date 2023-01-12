// Step 1: define gameObject() - returns a nested object
function gameObject() {

    let nestedObj = {
        home:  {
            teamName: "Brooklyn Nets",
            colors: [
                "Black",
                "White"
            ],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: [
                "Turquoise",
                "Purple"
            ],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
    
    
    return nestedObj;
}


// Step 2: Building Functions Calling Functions Within Functions
function homeTeamName() {
   
    let object = gameObject()
    return object['home']['teamName']
    
}


function numPointsScored(playName) {
    let game = gameObject()
    for (let key in game) {
        let players = game[key]["players"]
        for (let player in players) {
            if (player === playName) {
                return players[player]["points"]
            }

        }

    }
}

function shoeSIze(playName) {
    let game = gameObject()
    for (let key in game) {
        let players = game[key]["players"]
        for (let player in players) {
            if (player === playName) {
                return players[player]["shoe"]
            }

        }

    }
}

function teamColors(teamName) {
    let game = gameObject()
    for (let key in game) {
        if (teamName === game[key]["teamName"]) {
            return game[key]["colors"]
        }

    }  
}


function teamNames() {
    let team = []
    let game = gameObject()
    for (let key in game) {
        team.push(game[key]["teamName"])
    } 
    return team
}

function playerNumbers(teamName) {
    let game = gameObject()
    let jerseyNumber = []
    for (let key in game) {
        if (teamName === game[key]["teamName"]) {
            for (let player in game[key]["players"]) {
                jerseyNumber.push(game[key]["players"][player]["number"])
            }
        }

    }
    return jerseyNumber
}


function playerStats(playerName) {
    let game = gameObject()
    for (let key in game) {
        for (let player in game[key]["players"]) {
            if (playerName === player) {
                return game[key]["players"][player]
            }
        }
    }

}

// Which player has the most points? Call the function mostPointsScored
function mostPointsScored() {
    let mostPoints = 0;
    let player = "";
    let game = gameObject()
    for (let key in game) {
        const playerList = game[key]["players"];
        for (let playerName in playerList) {
            let playerPoints = playerList[playerName]["points"]
            if (playerPoints > mostPoints) {
                mostPoints = playerPoints
                player = playerName
            }
        }
    }
    return `${player} has the most points, ${mostPoints} points`
}


// Which team has the most points? Call the function winningTeam.
function winningTeam() {
    function teamScored(teamName) {
        let score = 0
        let game = gameObject()
        for (let key in game) {
            if (teamName === game[key]["teamName"]) {
                const playerList = game[key]["players"];
                for (let playerName in playerList) {
                    let playerPoints = playerList[playerName]["points"]
                    score += playerPoints
                }
            }
        }
        return [score, teamName]
    }

    const [team1Scores, team1Name] = teamScored("Brooklyn Nets")
    const [team2Scores, team2name] = teamScored("Charlotte Hornets")

    if  (team1Scores > team2Scores) {
        return `The winning team is ${team1Name}! Scored ${team1Scores}`
    } else {
        return `The winning team is ${team2name}! Scored ${team2Scores}.`
    }
}

function teamScored(teamName) {
    let score = 0
    let game = gameObject()
    for (let key in game) {
        if (teamName === game[key]["teamName"]) {
            const playerList = game[key]["players"];
            for (let playerName in playerList) {
                let playerPoints = playerList[playerName]["points"]
                score += playerPoints
            }
        }
    }
    return [score, teamName]
}


// Which player has the longest name? Call the function playerWithLongestName.
function playerWithLongestName() {
    let length = 0
    let player = "";
    let game = gameObject()
    for (let key in game) {
        const playerList = game[key]["players"];
        for (let playerName in playerList) {
            let playerNameLength = playerName.length
            if (playerNameLength > length) {
                length = playerNameLength
                player = playerName
            }

        }
    }
    return `${player} has the longest name, with ${length-1} letters` // minus space in name
}