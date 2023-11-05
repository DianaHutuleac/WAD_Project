import axios from "axios"
import { useState, useEffect } from "react"

export default function Test () {


    const [img, setImg] = useState(null);

    useEffect(() => {
        if(img){
              console.log("File has been set.")
      }
    },[img]);
    
    const handleSubmit = event => {
        console.log(img);
        event.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        var bodyFormData = new FormData();
        bodyFormData.append('file', img);

        axios.post ("http://localhost:8080/images/upload", bodyFormData, config)
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                       console.log("OK")
                    }
                })
                .catch(err => console.log(err))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/png, image/jpeg"
                onChange={event => setImg(event.target.files[0])}
                value={""}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}