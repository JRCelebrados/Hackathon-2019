function getGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else {
        console.log('Not Supported');
    }
}


function onSuccess(position){

    // const {latitude, longitude} = position.coords;

    const {latitude, longitude} = {
    };

    const url = `https://www.latlong.net/c/?lat=${latitude}&amp;long=${longitude}`;

    document.querySelector('a').setAttribute('href', url);
    document.querySelector('div').style.display = 'block';
}

function onError(error){
    console.log(error);
}
