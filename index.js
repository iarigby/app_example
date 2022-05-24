const ballots = []

function castBallot() {
    const choice = "party1"
    const ballot = {
        party: choice,
        invalid: false
    }
    ballots.push(ballot)
}
