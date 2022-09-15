let users = [
    { id: 1, name: "Christine", lastname: "Haas", city: "New York", country: "USA" },
    { id: 2, name: "Michael", lastname: "Thompson", city: "Boston", country: "USA" },
    { id: 3, name: "Sally", lastname: "Kwan", city: "Washington", country: "USA" },
    { id: 4, name: "John", lastname: "Geyer", city: "London", country: "United Kingdom" },
    { id: 5, name: "Irving", lastname: "Stern", city: "Bristol", country: "United Kingdom" },
    { id: 6, name: "Eva", lastname: "Pulaski", city: "Glasgow", country: "United Kingdom" },
    { id: 7, name: "Eileen", lastname: "Henderson", city: "Cardiff", country: "United Kingdom" },
    { id: 8, name: "Theodore", lastname: "Spenser", city: "Paris", country: "France" },
    { id: 9, name: "Vincenzo", lastname: "Lucchessi", city: "Berlin", country: "Germany" },
    { id: 10, name: "Dolores", lastname: "Quintana", city: "Sao Paulo", country: "Brazil" }
]

function getUsers(response) {
    response.json(users)
}

function getUser(response, id) {
    response.json(users.filter(u => u.id == id)[0])
}

function setUserData(response, id, data) {
    let index = users.findIndex(u => u.id == id)
    users[index].name = data.name
    users[index].lastname = data.lastname
    users[index].city = data.city
    users[index].country = data.country
    response.status(200).send('{}')
}

module.exports = { getUsers, getUser, setUserData };
