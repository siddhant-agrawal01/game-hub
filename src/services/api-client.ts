import axios from "axios";

export default axios.create ({
    baseURL:"https://api.rawg.io/api",

    params:{
        key: "68baca4dedcd4b81a118813876bf65a0"
    }
})                // to create ana access instance with a custom config