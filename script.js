function setup()
{
   video = createCapture(VIDEO);
   video.size(550,500);

   canvas = createCanvas(600,420);
   canvas.position(590,110);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose',gotPoses);
}
function draw()
{
    background('#5B4EFF');
}
function modelLoaded()
{
    console.log('PoseNet is Intialized!!!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
