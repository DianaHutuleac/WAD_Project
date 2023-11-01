import axios from "axios"
import { useState } from "react"

export default function Test () {


    const [img, setImg] = useState('');
    
    const handleSubmit = event => {
        event.preventDefault();

        const payload = {
            file: img
        }

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }      

        axios.post ("http://localhost:8080/images/upload", payload, config)
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
                onChange={event => setImg(event.target.value)}
                value={img}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}