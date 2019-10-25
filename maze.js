$(()=>{

const icePalace = {
    board = () =>{
        setUp(value);
        const $meltingMaze = $('<canvas>').css(`width`, `480px`).css(`height`, `270px`).css(`background-image`, `url('images/icy.jpg')`);
        console.log($meltingMaze);
        const $container = $('.container');
        $container.append($meltingMaze);
        this.context = this.board.getContext('2d');
    },
    clear = () =>{
        this.context.clearRect(0,0, this.board.width, this.board.height);
    }
    }
}
const randomLines = () => {

}
const everyInterval = (n) =>{

}

const canvasScroll = () => {
    
}
const moveCake = () => {
    // move Cake image up or down to avoid lines
}
const dangerousPassage = () => {
    // where the actual game occurs, featuring lots of callbacks
}

});
