//Milestone 1
//Replica della grafica ​con la possibilità di avere messaggi scritti
//dall’utente (verdi) edall’interlocutore (bianco) assegnando
//due classi CSS diverse
//Visualizzazione dinamica della lista contatti:​
//tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

let boolzap = new Vue({
    el: "#app",
    data: {
        activeIndex: 0,
        frase: "",
        status: "",
        sent:".inviato",
        received:".ricevuto",
        /* nomeUtente: "Michele",
        messaggiCorrenti: [],
        imgCorrente: "./assets/img/avatar_1.jpg",
        dataCorrente: "10/01/2020 16:15:22", */
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    },
                ],
            },   
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    }, {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './assets/img/avatar_4.jpg',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            
        ],
    },
    
    methods: {
        //Milestone 2
        //Visualizzazione dinamica dei messaggi: 
        //tramite la direttiva v-for,
        //visualizzare tutti i messaggi relativi al contatto
        //attivo all’interno del pannello della conversazione
        //Click sul contatto​ mostra la conversazione
        //del contatto cliccato
        selezionaUtente(index) {
            this.activeIndex = index;
        },

        //Milestone 3
        //Aggiunta di un messaggio:
        //l’utente scrive un testo nella parte bassa
        //e digitando“enter” il testo viene aggiunto al
        //thread sopra, come messaggio verde●Risposta
        //dall’interlocutore: ad ogni inserimento di un messaggio,
        //l’utente riceveràun “ok” come risposta,
        //che apparirà dopo 1 secondo.

        inserisciMessaggio(index) {
            let messaggio = {
                date: new Date().toLocaleString(),
                text: this.frase,
                status: 'sent'
            }
            this.contacts[index].messages.push(messaggio);
            this.frase = "";
            console.log(this.contacts[index].messages,index);

            
            setTimeout(function (index) { 
                let newMessaggio = {
                    date: new Date().toLocaleString(),
                    text: "ok",
                    status: 'received'
                }
                this.contacts[index].messages.push(newMessaggio);
            }, 1000);
            
        },
        /* controlloStatus(index) {
            if (this.contacts[index].messages.status == "sent") {
                this.contacts[index].messages.status;
                this.frase = "";
            } else {
                
            }
        } */
    }
});