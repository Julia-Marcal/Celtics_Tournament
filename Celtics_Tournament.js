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
            },
            get: function(){
                return overall;
            },
        
        });    

    };
};

function Battle_of_Player(Player1_name , Player1_over, Player2_name , Player2_over ){
        
        if (typeof Player1_name !== 'string' || typeof Player2_name !== 'string' ){
            throw("Player's name has to be a string")
        }
        else if (typeof Player1_over !== 'number' || typeof Player2_over !== 'number' ){
            throw("Player's overall has to be a Number")
        }

        let Rand_num_1 = Math.floor((Math.random() * 100)+1);
        let Rand_num_2 = Math.floor((Math.random() * 100)+1);
        let Rand_num_10 = Math.floor((Math.random() * 9)+1);

        let Better_over = Player1_over - Player2_over;

        let Lucky_factor_p1 = Player1_over % Rand_num_1;
        let Lucky_factor_p2 = Player2_over % Rand_num_2;
        
        console.log(`Between ${Player1_name} and ${Player2_name}`)
        if (Better_over <= 13 || Better_over >= -13 ){
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
const Derrick_White = new Player('Derrick White', 78)
const Grant_Williams = new Player ('Grant Williams', 77);
const Blake_Griffin = new Player ('Blake Griffin', 76);
const Payton_Pritchard = new Player ('Payton Pritchard', 76);
const Noah_Vonleh = new Player ('Noah Vonleh', 74);
const Justin_Jackson = new Player ('Justin Jackson', 72);
const Sam_Hauser = new Player ('Sam Hauser', 71);
const Mfiondu_Kabengele = new Player ('Mfiondu Kabengele', 70);
const Luke_Kornet = new Player ('Luke Kornet', 70);
const JD_Davison  = new Player ('JD Davison', 69);

//List of players
const Players_list = [Jayson_Tatum,JD_Davison,Luke_Kornet,Jaylen_Brown, Robert_W_III,Mfiondu_Kabengele,
Sam_Hauser,Malcom_Brogdon,Marcus_Smart,Justin_Jackson,Noah_Vonleh,Al_Horford,Payton_Pritchard,
Danilo_Gallinari,Blake_Griffin, Derrick_White, Grant_Williams];


function Choosing_Players(){
    let Random_Selection_P1 = Math.floor((Math.random()*16)+1)
    let Random_Selection_P2 = Math.floor((Math.random()*16)+1)
    if (Random_Selection_P1 !== Random_Selection_P2){
        console.log(Battle_of_Player(Players_list[Random_Selection_P1].name
            ,Players_list[Random_Selection_P1].overall
            ,Players_list[Random_Selection_P2].name
            ,Players_list[Random_Selection_P2].overall))
    }
    else{
        Choosing_Players();
        return;
    }
};

Choosing_Players();
