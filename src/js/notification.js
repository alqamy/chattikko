function addNotification(msg) {
    console.log("window.isActive")
    console.log(window.isActive)
    if (!window.isActive) {
        changeFavIcon('new');
        notify(msg);
    }
}

function changeFavIcon(condition) {

    var link = document.getElementById("ImageIcon");
    if (condition)
        link.href = '/static/images/favicon1.png';
    else
        link.href = '/static/images/favicon2.png';

}



function notify(msg) {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        //console.log("This browser does not support desktop notification");
    }

    // Let's check if the user is okay to get some notification
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification(msg);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
            // If the user is okay, let's create a notification
            if (permission === "granted") {
                var notification = new Notification(msg);
            }
        });
    }

    // At last, if the user already denied any notification, and you 
    // want to be respectful there is no need to bother them any more.
}


module.exports = {
    add : addNotification,
    changeFavIcon : changeFavIcon
}