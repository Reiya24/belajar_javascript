// Superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} send ${message} to ${receiver}`);
    }
}

// Subclass
class MichatService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers){
            this.sendMessage(message, receiver);
        }
    }
}

const reiya = new MichatService("reiya24");

reiya.sendMessage("halo" ,"miki");
reiya.sendBroadcastMessage("PING!!!", ["miki", "misa", "tomkun"])

console.log(reiya instanceof MichatService);
console.log(reiya instanceof MailService);