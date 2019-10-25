$(()=>{
    let funds = 0;
    let time = 8;
    const setUp = (param)=>{ //function that occurs to set up each scene/ game scenario
        $('body').empty();
        $container = $('<div>').addClass('container');       
        $directions = $('<div>').addClass('directions').attr(`id`, `directions`).text(param);
        $work = $('<div>').addClass('work').attr(`id`, `work`);
        $('html').css(`background-image`, `url("images/magic-man-house.jpg"`);
        $('body').append($container);
        $container.append($directions);
        $container.append($work);       
    }
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
        let $container = $('.container');
        setTimeout(()=>{
            $(document).ready(function() {
                $("#work").dialog(task).dialog("open");
                $("#work").append($startingWork);
              });
        }, 300);    
    }
    const work = () => {
        funds++;
        time--;
    }
    //===============================
    // functions for each gameplay scenario
    // 
    //===============================
    // const heartAttack = () =>{ 
    //     // Ricardio's game
    // }
    const $startingWork = $('<p>').addClass('working-directions').text('get to work'); 
    const $chore = [
        `Clean the yard, earn ¥1`,
        `Clean the yard, earn another ¥1`,
        `Clean the yard, earn another ¥1`,
        `Wow, you industrious little scamps. You can buy a sponge to do dishes for ¥3 an hour, or you can clean the yard more, although you can't earn enough to free Bemo by only doing yard work.`,
    ];
    const task = {
        autoOpen: false,
        modal: true,
        width: 550,
        height:300,
        title: 'Earn Bemo back!',
        buttons: {
            "proceed" : {
                text: 'Proceed',
                id: 'proceed',
                click: function () {    
                    for (let i = 0; funds >= 13; i++ ) {
                        work();
                        const keepGoing = `That was ok, but you only have ¥${funds} and ${time} hours left. Not enough to increase your earning capacity. The yard needs more help. Why don't you spend another hour cleaning.`; 
                        setUp(keepGoing);
                        $("#work").dialog(task).dialog("open");
                        $("#work").append($chore[i]);
                    }
                }
            }
        }
    };

    // const work = () =>{
    //     $(".popup-magic").addClass("active");
    //     let time = 8;
    //     let funds = 0;
    // }
    
    $('#magic-man').on('click', function(){
        let howTo = `Magic Man's house is filthy. He has taken Bemo captive because he is wicked. Fionna and Cake offer to clean his house for credit to buy back Bemo. He grudgingly agrees. He agrees to a price of ¥13. You can earn ¥1 for picking up the floor. When you get ¥3 together you can use that to buy a sponge. With the sponge you can do dishes and earn ¥3. You can buy a brush to clean the bathroom for ¥5. Cleaning the bathroom earns you ¥5. Each task takes an hour. You must purchase Bemo before the end of the day. That gives you 8 hours to earn Bemo's freedom.`;
        kingMan(howTo);
    })
});