import axios from 'axios'

export async function fetchTodoList(){
    const res = await axios({
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/todos',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if(res.status >= 400) throw new Error(res.data.error)

    return res.data
}