class WeatherStation {
    constructor() {
        this.temperature = 0;
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        const updates = [];
        for (const observer of this.observers) {
            updates.push(observer.update(this.temperature));
        }
        return updates;
    }

    setTemperature(temp) {
        this.temperature = temp;
        this.notifyObservers();
    }
}

class WeatherObserver {
    update(temp) {
        console.log(`Temperature updated to ${temp}°C`);
        return `Observer notified: ${temp}°C`;
    }
}

// WeatherStation ve Observer örneği
const station = new WeatherStation();
const observer1 = new WeatherObserver();
const observer2 = new WeatherObserver();

station.addObserver(observer1);
station.addObserver(observer2);

station.setTemperature(15); // Observer'ları bilgilendirir
const getNotify = station.notifyObservers(); // Bildirimleri döndürür
console.log(getNotify);
