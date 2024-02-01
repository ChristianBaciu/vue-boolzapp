const{createApp}= Vue
createApp({
    data(){
        return{
            contacts:[
                {   // chat 0
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {   // chat 1
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {   // chat 2
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {   // chat 3
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {   // chat 4
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {   // chat 5
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {   // chat 6
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {   // chat 7
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
                }
                ],
            }
        ],

        activeChat: 0, // chat n.1,2,3,4,5,6,7
        messaggioMio: '',
        cercaContatto: '',

    }
    },
    created(){

    },
    methods:{

        changeChat(index){
            this.activeChat = index
        },

        invioMessaggio(){

            let data = new Date()
            let anno = data.getFullYear()
            let mese = data.getMonth() + 1
            let giorno = data.getDate()

            let ora = data.getHours()
            let minuti = data.getMinutes()
            let secondi = data.getSeconds()

            this.contacts[this.activeChat].messages.push(
                {
                    date: `${giorno}/${mese}/${anno} ${ora}:${minuti}:${secondi}`,
                    message: this.messaggioMio,
                    status: 'sent',
                }
            )
        },














        // invioMessaggio(){

        //     const invioMessaggio = {
        //         date: '10/01/2020 15:30:55',
        //         message: this.messaggioMio,
        //         status: 'sent',
        //     }

        //     if(this.messaggioMio.length === 0){
        //         // this.messaggioMio = ''
        //     }
        //     else{
        //         this.contacts[this.activeChat].messages.push(invioMessaggio)
        //         this.bot()
        //     }
        // },

        // bot(){
        //     setTimeout(() => {

        //         const botChat = {
        //             date: '10/01/2020 15:30:55',
        //             message: 'Ok',
        //             status: 'received',
        //         }
        //         this.contacts[this.activeChat].messages.push(botChat)

        //     },1000);
        // }
    },

    computed:{

        filtroContatti(){
            const ricerca = this.cercaContatto.toLowerCase()
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(ricerca)
            )
        },
    },
}).mount('#app')