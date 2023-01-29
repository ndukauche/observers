class telephone {
    constructor() {
        this.observers = []
    }

    addPhoneNumber(observer) {
        this.observers.push(observer);
    }

    removePhoneNumber(observer) {
        this.observers.delete(observer)
    }

    dialPhoneNumber(data) {
        for (let i= 0; i < this.observers.length; i++){
            this.observers[i](data)
            
        }
    }
}

const uche = new telephone();

const sam = (data) => {
    console.log(09058796238, 
        data
        )
}

uche.addPhoneNumber(sam);

uche.dialPhoneNumber(`Now dialling 09058796238`)


 