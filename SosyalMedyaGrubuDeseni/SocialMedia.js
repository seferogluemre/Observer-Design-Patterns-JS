class SocialMediaGroup {

    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user)
    }

    sendMessage(message) {
        for (const user of this.users) {
            user.recieveMessage(message)
        }
    }

}

class User {

    constructor(name) {
        this.name = name;
    }

    recieveMessage(message) {
        console.log(`${this.name} recieved:${message}`)
    }
}

const group = new SocialMediaGroup();

const Emre = new User("Emre");
const Berat = new User("Berat");
const Ahmet = new User("Ahmet");

group.addUser(Emre)
group.addUser(Berat)
group.addUser(Ahmet)

group.sendMessage("Arkadaşlar merhaba bugün saat 17:00 da mentorluk olcaktır");