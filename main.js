song_1 = "music.mp3"
song_2 = "music2.mp3"
right_wrist_x = 0
right_wrist_y = 0
left_wrist_y = 0
left_wrist_x = 0
left_wrist_score = 0
right_wrist_score = 0
song_play = ""

function preload() {
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600,500)
    canvas.center()
    video  = createCapture(VIDEO) ;
    video.hide()

    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)

    function modelloaded() {
        console.log("posenet is initialised")
    }
       
    function gotPoses(results) {
        if (results.length>0) {
            console.log(results) 
            right_wrist_x = results[0].pose.rightWrist.x
            right_wrist_y = results[0].pose.rightWrist.y
            console.log("right wrist x = " + right_wrist_x + "left wrist x = " + right_wrist_y )
            left_wrist_x = results[0].pose.leftWrist.x
            left_wrist_y = results[0].pose.leftWrist.y
            console.log("left wrist x = " + left_wrist_x + "leftt wrist y =" + left_wrist_y);
           left_wrist_score = results[0].pose.keypoints[9].score;
            
        }
        
        
         }

}
function draw() {
    image(video,0,0,600,500) ;
    circle(left_wrist_x,left_wrist_y,20);
    fill()

}