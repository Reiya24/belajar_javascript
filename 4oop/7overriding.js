class MailService {
    // constructor overriding
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} send ${message} to ${receiver}`);
    }
}

class MiChatService extends MailService {
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;

    }

    // method overriding
    sendMessage(message, receiver) {
        super.sendMessage(message, receiver);
        console.log("via MiChat");
    }
}

const reiya = new MiChatService("reiya24", false);
reiya.sendMessage("halo", "miki");



