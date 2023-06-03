class Intro extends Phaser.Scene{
    constructor(){
        super({
            key: 'introduction'
        })
    }
    preload(){
        this.load.image('b1','./assets/background1.png');
        this.load.image('t1','./assets/title1.png');
        this.load.image('eb2','./assets/ending1.png');
        this.load.image('eb1','./assets/ending1.5.png');
        this.load.image('jump1','./assets/JuMP.png');
    }
    create(){
        this.background1 = this.add.image(this.game.config.width / 2, this.game.config.height / 2, 'b1');
        this.title1 = this.add.image(this.game.config.width / 2 + 80, 150, 't1' );
        this.jump = this.add.image(30, 600, 'jump1');
        this.title1.setScale(0.5);
        this.tweens.add({
            targets: this.title1,
            y: this.title1.y + 20,
            duration: 500,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
        this.input.on("pointerdown",()=>{
            this.scene.start('endroduction');
    });   
    }
}   

class Ending extends Phaser.Scene{
    constructor(){
        super({
            key: 'endroduction'
        })
    }
    create(){
        this.background1 = this.add.image(275 , this.game.config.height / 2 + 100, 'eb2');
        this.title1 = this.add.image(this.game.config.width / 2 , 70, 'eb1' );
        this.tweens.add({
            targets: this.title1,
            y: this.title1.y + 20,
            duration: 500,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
     
        this.input.on("pointerdown",()=>{
            this.scene.start('introduction');
    
            /*this.tweens.add({
                    targets: creme,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => creme.destroy()
                });*/
    }); 
    this.tweens.add({
        targets:this.background1,
        x: 225,
        y: (this.game.config.height / 2 + 100),
        duration:800,
        ease:"Linear",
        repeat:-1,
        yoyo:true,
    });
    }
    
}


let game = new Phaser.Game({
    width:500,
    height:500,
    scene:[Intro,Ending]
});

