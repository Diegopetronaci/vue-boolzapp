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
        search: "",
        /* status: "", */
        /* sent:".inviato",
        received:".ricevuto", */

        /* nomeUtente: "Michele",
        messaggiCorrenti: [],
        imgCorrente: "./assets/img/avatar_1.jpg",
        dataCorrente: "10/01/2020 16:15:22", */
        user: {
                name: "Nome Utente",
                avatar: "_io"
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
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
                avatar: '_2',
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
                avatar: '_3',
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
                avatar: '_4',
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
        selezionaUtente(contatto) {
            console.log(contatto);
            this.activeIndex = this.contacts.indexOf(contatto);
        },
        

        //Milestone 3
        //Aggiunta di un messaggio:
        //l’utente scrive un testo nella parte bassa
        //e digitando“enter” il testo viene aggiunto al
        //thread sopra, come messaggio verde●Risposta
        //dall’interlocutore: ad ogni inserimento di un messaggio,
        //l’utente riceveràun “ok” come risposta,
        //che apparirà dopo 1 secondo.

        inserisciMessaggio() {
            let messaggio = {
                date: new Date().toLocaleString(),
                text: this.frase,
                status: 'sent'
            }
            this.contacts[this.activeIndex].messages.push(messaggio);
            this.frase = "";
            /* console.log(this.contacts[index].messages,index); */
            
            setTimeout( () => {
                newMessaggio = {
                    date: new Date().toLocaleString(),
                    text: "Ok",
                    status: 'received'
                }
                this.contacts[this.activeIndex].messages.push(newMessaggio);   
            }, 1000);

        },

        //Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
        //vengono visualizzati solo i contatti il cui nome contiene le
        //lettere inserite(es, Marco, Matteo Martina -> Scrivo“mar”
        //rimangono solo Marco e Martina)

        cercaUtenti () {
            
        }
    },
    computed: {
        
        filteredList() {
            return this.contacts.filter(element => {
                console.log(element);
                return element.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
        
         
    }
});

