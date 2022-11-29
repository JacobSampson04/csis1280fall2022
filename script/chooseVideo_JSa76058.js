// function chooseVideo to choose and display video
function chooseVideo() {
    var introVideo = document.getElementById("videoSelectIntro");
    var interVideo = document.getElementById("videoSelectInter");
    var expertVideo = document.getElementById("videoSelectExpert");
    var videoTarget = document.getElementById("video_target");

    if(introVideo.selected){
        videoTarget.innerHTML = "<video src=\"media/youtubeCodingIntroVideo.mp4\" id=\"video_src\" controls>";
        return false;
    }
    else if(interVideo.selected){
        videoTarget.innerHTML = "<video src=\"media/youtubeCodingInterVideo.mp4\" id=\"video_src\" controls>";
        return false;
    }
    else if(expertVideo.selected){
        videoTarget.innerHTML = "<video src=\"media/youtubeCodingExpertVideo.mp4\" id=\"video_src\" controls>";
        return false;
    }
    else{
        videoTarget.innerHTML = "<!--Target for video select-->";
        return false;
    }
} // end chooseVideo function