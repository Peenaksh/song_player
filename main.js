song_1 = music.mp3
song_2 = music2.mp3

function preload() {
    loadSound("music.mp3")
    loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600,500)
    canvas.center()
    video  = createCaputure(VIDEO) ;
    video.hide()

    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)

    function modelloaded() {
        console.log("posenet is initialised")
    }
       
    
}
function draw() {
    image(video,0,0,600,500) ;

}