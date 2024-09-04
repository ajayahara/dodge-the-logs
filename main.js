import './style.css'
import Phaser from 'phaser';
class GameScene extends Phaser.Scene{
    preload(){
        this.load.image('background','assets/background.png')
        this.load.image('player','assets/player.png')
    }
    create(){
        this.add.image(400,300,'background')
        const player=this.physics.add.image(400,500,'player')
        player.setCollideWorldBounds(true)
    }
    update(){
        //player movement
        if(this.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.A)){
            player.setVelocityX(-160)
        }else if(this.input.keyboard.isDown(Phaser.Input.Keyboard.KeyCodes.D)){
            player.setVelocityX(160)
        } else{
            player.setVelocityX(0)
        }
        //player gravity
        player.setBounce(0.5)
        player.setGravityY(300)
    }
}
const config={
    type:Phaser.WEBGL,
    width:800,
    height:600,
    scene:[]
}
