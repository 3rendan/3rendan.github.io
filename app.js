$(()=>{
    let funds = 0;
    let time = 8;
    let i = 0;
    const beemoPrice = 13;
    const $startWork = $('<p>').addClass('working-directions').text(`Get to work, you've only got 8 hours. Start by cleaning up the yard. I'll give you ¥1 an hour. There are plenty of dishes to do to. Once you have ¥3 you can go to the canteen and buy a sponge.`);
    const $chore = [
        $('<p>').addClass('working-directions').text(`Clean the yard, earn another ¥1. beemo wants out.`),
        $('<p>').addClass('working-directions').text(`Clean the yard, earn another ¥1`),
        $('<p>').addClass('working-directions').text(`You've worked hard and now you can go to the canteen and buy a sponge. With said sponge, you'd earn ¥3 hourly. You can be stupid and keep cleaning the yard. Click Buy to get yourself a sponge. Click Skinflint if you are stupid and keep cleaning the yard.`),
        $('<p>').addClass('working-directions').text(`Clean more dishes?`),
        $('<p>').addClass('working-directions').text(`Clean more dishes?`),
        $('<p>').addClass('working-directions').text(`Ok, keep working you fools and click on Skinflint or click on Buy to get a brush`),
        $('<p>').addClass('working-directions').text(`Ok, keep working you fools and click on Skinflint or click on Buy to get a brush`),
        $('<p>').addClass('working-directions').text(`Ok, keep working you fools and click on Skinflint or click on Buy to get a brush`),
        $('<p>').addClass('working-directions').text(`Ok, keep working you fools and click on Skinflint or click on Buy to get a brush`),
    ];
    const $choreV2 = [
        "", "", "", "", "", 
        $('<p>').addClass('working-directions').text(`Go ahead, click Buy to get yourself a brush. In that case I'm not likely to eat beemo. Click Skinflint if you are stupid and keep cleaning the yard.`),
        $('<p>').addClass('working-directions').text(`I bet you both feel great about yourselves. One more hour of dishes and beemo is free. Everyone loves to dump on poor Magic Man.`)
    ]
     
    const cleaningYard = {
        autoOpen: false,
        modal: true,
        width: 550,
        height:300,
        title: 'Earn beemo back!',
        buttons: [{
            text: 'Proceed',
            id: 'proceed',
            click : function () { 
                    yardWork();   
                    industry();
                }
            }
        ]
    };
    const buySponge = {
        autoOpen: false,
        modal: true,
        width: 550,
        height:300,
        title: 'Buy a sponge or toil on yardwork',
        buttons: [{
            text: 'Buy',
            id: 'proceed2',
            click: function () { 
                funds = funds - 3;
                doDishes();
                industry();
                }
            },
            {
            text: `Skinflint`,
            id: 'proceed',
            click: function () { 
                yardWork();   
                industry();
                }
            }
        ]
    };
    const dishes = {
        autoOpen: false,
        modal: true,
        width: 550,
        height:300,
        title: 'Keep cleaning dishes',
        buttons: [{
            text: 'Proceed',
            id: 'proceed',
            click : function () { 
                    doDishes();   
                    industry();
                }
            }
        ]
    };     
    const buyBrush = {
        autoOpen: false,
        modal: true,
        width: 550,
        height:300,
        title: 'Buy a brush or keep using your sponge or toil on yardwork',
        buttons: [{
            text: 'Buy',
            id: 'proceed2',
            click: function () { 
                funds=-6;
                cleanBathroom();
                industry();
                }
            },
            {
            text: `Skinflint`,
            id: 'proceed',
            click: function () { 
                yardWork();   
                industry();
                }
            }
        ]
    };  
        const setUp = (param)=>{ //function that occurs to set up each scene/ game scenario
            let i = 0;
            i++;
            $('body').empty();    
            $container = $('<div>').addClass('container');       
            $directions = $('<div>').addClass('directions').text(param); // .attr(`id`, `directions`)
            $work = $('<div>').addClass('work'); //.attr(`id`, `work`);
            $('html').css(`background-image`, `url("images/magic-man-house.jpg"`);
            $('body').append($container);
            $container.append($directions);
            $directions.attr(`id`, `directions`);
            $container.append($work); 
            $work.attr(`id`, `dialog`); 
            if (funds === 0){
                let i = 0;
            }
            return i;     
        }        
        const industry = () =>{
            const $stumbleBum = `If you'd like you can buy a sponge. Or you can try and keep earning to go straight for the brush at ¥6. You have ¥${funds}`;
            const keepGoing = [
                `That was ok, but you only have ¥${funds} and ${time} hours left. Not enough to increase your earning capacity. The yard needs more help. Why don't you spend another hour cleaning.`,
                `You're getting there. Now you have ¥${funds} with only ${time} hours left. Another hour on the yard will allow you to earn enough money to buy a sponge and do dishes for ¥3 an hour.`,
                `Wow, you've earned enough to buy a sponge! Oh, happy day! For ¥3 you can buy one. You'll be broke but able to earn ¥3 hourly. Remember you only have ${time} left or else I'm going to eat beemo.`,
                `Now that you have the sponge you're really raking it in. You have ¥${funds}, but only ${time} hours left. Another hour of dishes and you can buy a brush to clean my bathroom.`,
                `Aren't you two great workers! You now have ¥${funds} with ${time} hours left. Would you like to go to the canteen and buy a brush. They're ¥6 but you can make ¥7 an hour. I'm probably gonna need to find something else to eat other than that tangle of wires and plastic.`
                // `Aren't you two great workers! You now have ¥${funds} with ${time} hours left. Would you like to go to the canteen and buy a brush. They're ¥6 but you can make ¥7 an hour. I'm probably gonna need to find something else to eat other than that tangle of wires and plastic.`
                // `That was ok, but you only have ¥${funds} and ${time} hours left. Not enough to increase your earning capacity. The yard needs more help. Why don't you spend another hour cleaning.`,
            ];
            if (funds >= 6){
                console.log(i);
                $("#dialog").dialog(dishes).dialog("open");
                $("#dialog").append(keepGoing[i]);
                i++;
            }
            // if (funds === 6){
            //     $("#dialog").dialog(buyBrush).dialog("open");
            //     $("#dialog").append($choreV2[i]);
            //     i++;
            // }
            if (funds > 2){
                setUp(keepGoing[i]);
                if (funds === 3 && i === 2){
                    $("#dialog").dialog(buySponge).dialog("open");
                    $("#dialog").append($chore[i]);
                    i++;
                } else {
                    $("#dialog").dialog(dishes).dialog("open");
                    $("#dialog").append($chore[i]);
                    i++;
                }

            }
            if (funds < 2.1) {
                setUp(keepGoing[i]);
                $("#dialog").dialog(cleaningYard).dialog("open");
                $("#dialog").append($chore[i]);
                i++;
            } 
        }
    const kingMan = (param) =>{       
        setUp(param);
        let $container = $('.container');
        setTimeout(function() {
            $('#dialog').append($startWork);
            $('#dialog').dialog(cleaningYard).dialog('open');
        }, 300);    
    }
    const yardWork = () => {
        funds++;
        time--;
    }
    const doDishes = () => {
        funds = funds + 3;
        time--;
    }
    const cleanBathroom = () => {
        funds + 7;
        time--;
    }
    
    

    $('#magic-man').on('click', function(){
        let howTo = `Magic Man's house is filthy. He has taken beemo captive because he is wicked. Fionna and Cake offer to clean his house for credit to buy back beemo. He grudgingly agrees. He agrees to a price of ¥13. You can earn ¥1 for picking up the floor. When you get ¥3 together you can use that to buy a sponge. With the sponge you can do dishes and earn ¥3. You can buy a brush to clean the bathroom for ¥5. Cleaning the bathroom earns you ¥5. Each cleaningYard takes an hour. You must purchase beemo before the end of the day. That gives you 8 hours to earn beemo's freedom.`;
        kingMan(howTo);
    });
    $('#beemo').on('click', function(){
        $('body').empty();
        $('html').css(`background-image`, `url("images/bemo.gif"`).css('width', "500px").css(`display`, `block`).css(`margin`, `auto`);

    });
    
    $(`.ui-button-icon-only`).on('click', function(){ // can't get this to refresh the page
        window.location.reload();
    })
});


