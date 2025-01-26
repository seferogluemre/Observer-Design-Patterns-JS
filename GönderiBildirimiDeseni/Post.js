class User {
    constructor(name) {
        this.name = name;
        this.followers = [];
    }

    addFollower(follower) {
        this.followers.push(follower)
    }

    notifyFollowers(post) {
        for (const follower of this.followers) {
            follower.update(this.name, post)
        }
    }

    sharePost(post) {
        console.log(`${this.name} Kişisi Şunu paylaştı: ${post}`)
        this.notifyFollowers(post)
    }
}

class Follower {
    constructor(name) {
        this.name = name;
    }

    update(username, post) {
        console.log(`${this.name} bildirim gönderildi: ${username} shared post ${post}`)
    }

}

const Emre = new User("Emre Seferoglu");

const followerOne = new Follower("Ahmet Mehmetoglu");
const followerTwo = new Follower("Mehmet ahmet");

Emre.addFollower(followerOne);
Emre.addFollower(followerTwo);

Emre.sharePost("Selamlar bugünki blog yazımda C# Üzerinde düşündüklerimi yazımda paylaştım");