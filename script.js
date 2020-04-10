var vue = new Vue({
    el: '#app',
    data: {
        nasa_api_key : "RytX9Z1OHIR9Ya7NZEJkTVuffwjNBYQVvtfbWyw4",
        APOD_api_url : `https://api.nasa.gov/planetary/apod?api_key=RytX9Z1OHIR9Ya7NZEJkTVuffwjNBYQVvtfbWyw4`,
        APOD_data : undefined,
    },
    created() {
        var get_APOD = fetch(this.APOD_api_url)
            .then(response => response.json())
            .then(json =>{
                this.APOD_data = json;
                var image = document.createElement("img");
                var img = document.getElementById('img');
                console.log(img);
                img.src = this.APOD_data['hdurl'];
            });
    }
});
