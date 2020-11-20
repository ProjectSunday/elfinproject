import React from 'react'
import { render } from 'react-dom'


function App() {
    const [body, setBody] = React.useState('')
    const onChange = (e) => {

        setBody(e.target.value)
    }
    return <div>
        <h3>Elfin Project</h3>

        <label>
            some input
        <input type="text" onChange={onChange}></input>

        </label>

        <div>
            <a href={`mailto:someemail@blah.com?subject=some%20subject&body=someinput:${body}`}>Send mail</a>
        </div>

    </div >
}

render(<App />, document.getElementById('root'))