console.log('hello');
$(()=>{
// start each round by on click going to their battle areas
    const setUp = (param)=>{ //function that occurs to set up each scene/ game scenario
        $('body').empty();
        const $container = $('<div>').addClass('container');
        const $div = ('<div>');
        const $directions = $('<div>').addClass('directions').text(param);
        $('body').append($container);
        $container.append($directions);
        
    }
    //===============================
    // functions for each gameplay scenario
    // 
    //===============================
    // const heartAttack = () =>{ 
    //     // Ricardio's game
    // }
    const kingMan = (param) =>{
        const bemoPrice = 13;
        const pickUpYard = {
            cost: 0,
            earnings: 1
        }
        const doDishes = {
            cost: 3,
            earnings: 5
        }
        const cleanBathroom = {
            cost: 6,
            earnings: 7
        }
        const time = 8;
        const $div = $('<div>');
        setUp(param);
        const $magicBoard = $('<div>').addClass('magic').attr('id', 'magicManGame');
        let $container = $('.container');
        let $popupMagic = $('div.popup-magic');
        console.log($popupMagic);
        $container.append($magicBoard);
        $container.append($popupMagic);        
    }
    const work = () =>{
        $(".popup-magic").addClass("active");
        let time = 8;
        let funds = 0;
    }
    const icePalace = (value) =>{
        setUp(value);
        const $meltingMaze = $('<canvas>').addClass('gunter');
        console.log($meltingMaze);
        const $container = $('.container');
        $container.append($meltingMaze);
        $meltingMaze[0].getContext('2d');
        


    }
    const mazePlay = () =>{
            // maze game start
    }
    // $('#ricardio').on('click', function(){
    //     let howTo = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
    //     (howTo);    
    // })
    $('#magic-man').on('click', function(){
        let howTo = `Magic Man's house is filthy. He has taken Bemo captive because he is wicked. Fionna and Cake offer to clean his house for credit to buy back Bemo. He grudgingly agrees. He agrees to a price of ¥13. You can earn ¥1 for picking up the floor. When you get ¥3 together you can use that to buy a sponge. With the sponge you can do dishes and earn ¥3. You can buy a brush to clean the bathroom for ¥5. Cleaning the bathroom earns you ¥5. Each task takes an hour. You must purchase Bemo before the end of the day. That gives you 8 hours to earn Bemo's freedom.`;
        kingMan(howTo);
        setTimeout(()=>{
            $(".popup-magic, popup-content").addClass("active");
            // get the modal to work!
        }, 300)
        // work();
    })
    // $('#marceline').on('click', function(){
    //     let howTo = `directions for the game`;
    //     setUp(howTo);
    // })
    $('#ice-king').on('click', function(){
        let howTo = `Avoid the Angry Penguins in Ice King's palace and get to the end to rescue Finn and Jake. Click on start to begin.`;
        icePalace(howTo);
    })
})