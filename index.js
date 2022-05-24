const ballots = []

function castBallot() {
    const choice = document.getElementById('party-selection').value
    const ballot = {
        party: choice,
        invalid: false
    }
    ballots.push(ballot)
}
const finalVotes = {
    "party-1": 0,
    "party-2": 0,
    "party-3": 0
}

function countVotes() {
    for (let i = 0; i < ballots.length; i++) {
        const ballot = ballots[i]
        const choice = ballot.party
        finalVotes[choice]++
    }
    console.log(finalVotes)
}
