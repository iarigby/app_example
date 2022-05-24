const ballots = []

function castBallot() {
    const choice = document.getElementById('party-selection').value
    const ballot = {
        party: choice,
        invalid: false
    }
    ballots.push(ballot)
}
