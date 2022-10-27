

class Player{
    constructor(name, overall){
        this.name = name;
        this.overall = overall;

        let over_private = overall;
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get: function(){
                return name;
            },
            configurable: false
        });

        Object.defineProperty(this, 'overall', {
            enumerable: true,
            set: function(over){
                if (typeof over  !== 'number'){
                    throw new TypeError('Type error')
                }

                over_private = over;
            }
        });


    };
};

function Battle_of_Player(Player1_name = String, Player1_over = Number, 
    Player2_name = String, Player2_over = Number){

        let Rand_num = Math.floor((Math.random() * 100)+1);
        let Rand_num_10 = Math.floor((Math.random() * 9)+1);

        let Better_over = Player1_over - Player2_over;

        let Lucky_factor_p1 = (Player1_over %  Rand_num);
        let Lucky_factor_p2 = (Player2_over % Rand_num);


        if ((Player1_over - Player2_over) < 15){
            if (Lucky_factor_p1 % Rand_num_10 == 0 && Lucky_factor_p2 % Rand_num_10 == 0){
                if (Better_over > 0){
                    return `${Player1_name} won`}
                else{
                    return `${Player2_name} won`}; 
            }

            else if (Lucky_factor_p2 % Rand_num_10 == 0 && Lucky_factor_p1 % Rand_num_10 != 0){
                return `${Player2_name} won`;
            }

            else{
                return `${Player1_name} won`;
            };

        }

        else{
            if(Better_over < 0){return `${Player2_name} won`;}
            else{return `${Player1_name} won`};
        };
};


//Team of Celtics on 2022-2023
const Jayson_Tatum = new Player('Jayson Tatum', 93);
const Jaylen_Brown= new Player('Jaylen Brown', 87);
const Robert_W_III = new Player('Robert Williams III', 85);
const Malcom_Brogdon = new Player('Malcom Brogdon', 82);
const Marcus_Smart = new Player('Marcus Smart', 82);
const Al_Horford = new Player('Al Horford', 82);
const Danilo_Gallinari = new Player('Danilo Gallinari', 78);
const Derrick_White = new Player('Derrick_White', 78)
const Grant_Williams = new Player ('Grant_Williams', 77);
const Blake_Griffin = new Player ('Blake_Griffin', 76);
const Payton_Pritchard = new Player ('Payton_Pritchard', 76);
const Noah_Vonleh = new Player ('Noah_Vonleh', 74);
const Justin_Jackson = new Player ('Justin_Jackson', 72);
const Sam_Hauser = new Player ('Sam_Hauser', 71);
const Mfiondu_Kabengele = new Player ('Mfiondu_Kabengele', 70);
const Luke_Kornet = new Player ('Luke_Kornet', 70);
const JD_Davison  = new Player ('JD_Davison', 69);


console.log(Battle_of_Player(Jaylen_Brown.name, Jaylen_Brown.over_of_player, 
    Jayson_Tatum.name, Jayson_Tatum.over_of_player));
    
