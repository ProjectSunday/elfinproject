import React from 'react'

const GlobalContext = React.createContext()

const defaultSettings = {
    fields: [
        { name: 'Ticket Number', match: '%ticket_number%' },
        { name: 'Client Name', match: '%client_name%' },
    ],
    subject: 'This is the subject %ticket_number%',
    body: 'Hello %client_name%.\nThis is the email body. This is the email body. This is the email body. This is the email body. This is the email body.\n Thank you.'
}


export function GlobalContextProvider({ children }) {
    const [state, setState] = React.useState({
        view: 'main'
    })


    const storedSettings = localStorage.getItem('ELFIN-SETTINGS') || defaultSettings
    const [settings, setSettings] = React.useState(storedSettings)



    const [fields, setFields] = React.useState({
        clientName: '',
        ticketNumber: '',
    })
    const [subject, setSubject] = React.useState(`This is the subject %ticket_number%`)
    const [body, setBody] = React.useState(`Hello %client_name%. This is the email body. This is the email body. This is the email body. This is the email body. This is the email body.`)
    const href = `mailto:someemail@blah.com?subject=${subject}&body=${body}`


    const value = {
        state,
        setState,
        settings,
        setSettings
    }

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export default GlobalContext