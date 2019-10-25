$(()=>{
    let funds = 0;
    let time = 8;
    let i = 0;
    const bemoPrice = 13;
    const $chore = [
        $('<p>').addClass('working-directions').text('get to work'),
        $('<p>').addClass('working-directions').text(`Clean the yard, earn ¥1`),
        $('<p>').addClass('working-directions').text(`Clean the yard, earn another ¥1`),
        $('<p>').addClass('working-directions').text(`3`),
        $('<p>').addClass('working-directions').text(`4`),
        $('<p>').addClass('working-directions').text(`5`),
        $('<p>').addClass('working-directions').text(`6`),
        $('<p>').addClass('working-directions').text(`7`)
    ];
    // const $keepGoing = [
        //     $('<p>').addClass('working-directions').text(`That was ok, but you only have ¥${funds} and ${time} hours left. Not enough to increase your earning capacity. The yard needs more help. Why don't you spend another hour cleaning.`),
        //     $('<p>').addClass('working-directions').text(`You're getting there. Now you have ¥${funds} with only ${time} hours left. Another hour on the yard will allow you to earn enough money to buy a sponge and do dishes for ¥3 an hour.`),
        //     $('<p>').addClass('working-directions').text(`Wow, you've earned enough to buy a sponge. Click OK to purchase or Skinflint to keep on cleaning the yard.`)
        // ]; 
        
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
        const industry = () =>{
            if (i < 2) {
                const keepGoing = [
                    `That was ok, but you only have ¥${funds} and ${time} hours left. Not enough to increase your earning capacity. The yard needs more help. Why don't you spend another hour cleaning.`,
                    `You're getting there. Now you have ¥${funds} with only ${time} hours left. Another hour on the yard will allow you to earn enough money to buy a sponge and do dishes for ¥3 an hour.`,
                    `Wow, you've earned enough to buy a sponge. Click OK to purchase or Skinflint to keep on cleaning the yard.`,
                    `Now that you have the sponge you really raking it in. You have ¥${funds}, but only ${time} hours left. Another hour of dishes and you can buy a brush to clean the bathroom.`,
                    `Wow, you've earned enough to buy a sponge. Click OK to purchase or Skinflint to keep on cleaning the yard.`
                ]; 
                setUp(keepGoing[i]);
                $("#work").dialog(task).dialog("open");
                $("#work").append($chore[i]);
                i++;
            } else if (i < 5) {
                funds+=3;
                time--;
                $("#work").dialog(task2).dialog("open");
                $("#work").append($chore[i]); 
                i++;             
            }
        }
    const kingMan = (param) =>{       
        setUp(param);
        let $container = $('.container');
        setTimeout(()=>{
            $(document).ready(function() {
                if (funds > 2) {
                $("#work").dialog(task).dialog("open");
                $("#work").append($chore[0]);
            } else if (funds < 5){
                $("#work").dialog(task2).dialog("open");
                $("#work").append($chore[i]);
            }
        }, 300);    
    })
    const work = () => {
        funds++;
        time--;
    }
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
                    work();   
                    industry();
                }
            }
        }
    };
    const task2 = {
        autoOpen: false,
        modal: true,
        width: 550,
        height:300,
        title: 'Buy a sponge or toil on yardwork',
        buttons: {
            text: 'Buy',
            id: 'proceed2',
            "buy" : function () { 
                    funds=-3;
                    i = 3
                    industry();
                },
            text: `Skinflint`,
            id: 'proceed',
            "skinflint" : function () { 
                    i = 2; // so it keeps offering the option of buying a sponge upon refusal
                    work();   
                    industry();
                }
            }
        }
    };

    $('#magic-man').on('click', function(){
        let howTo = `Magic Man's house is filthy. He has taken Bemo captive because he is wicked. Fionna and Cake offer to clean his house for credit to buy back Bemo. He grudgingly agrees. He agrees to a price of ¥13. You can earn ¥1 for picking up the floor. When you get ¥3 together you can use that to buy a sponge. With the sponge you can do dishes and earn ¥3. You can buy a brush to clean the bathroom for ¥5. Cleaning the bathroom earns you ¥5. Each task takes an hour. You must purchase Bemo before the end of the day. That gives you 8 hours to earn Bemo's freedom.`;
        kingMan(howTo);
    });
    
});



    // $(`.ui-dialog-titlebar-close`).on('click', function(){
    //     // needs to simply refresh the page
    // })