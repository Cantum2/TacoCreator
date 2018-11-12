import {FETCH_BASELAYERS} from "./types";

export const fetchBaseLayers = () => disbatch =>{
    return function(disbatch){
        fetch("https://tacos-ocecwkpxeq.now.sh/baseLayers/")
        .then(res => res.json())
        .then(baselayers => disbatch({
            type: FETCH_BASELAYERS,
            payload: baselayers
        }))
    }
}