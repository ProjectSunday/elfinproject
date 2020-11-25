import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import { debounce } from './utils';

const GlobalContext = React.createContext()

const defaultSettings = {
    fields: [
        { id: '0', name: 'Ticket Number', match: '%ticket_number%' },
        { id: '1', name: 'Client Name', match: '%client_name%' },
    ],
    subject: 'This is the subject %ticket_number%',
    body: 'Hello %client_name%.\n\nThis is the email body. This is the email body. This is the email body. This is the email body. This is the email body.\n\nThank you.'
}

const saveSettings = debounce((settings) => {
    localStorage.setItem('ELFIN-SETTINGS', JSON.stringify(settings))
}, 1000)


export function GlobalContextProvider({ children }) {
    const [view, setView] = React.useState('main')

    let storedSettings = localStorage.getItem('ELFIN-SETTINGS')
    if (storedSettings) {
        storedSettings = JSON.parse(storedSettings)
    } else {
        storedSettings = defaultSettings
    }

    const [settings, setSettings] = React.useState(storedSettings)

    const [subject, setSubject] = React.useState(`This is the subject %ticket_number%`)
    const [body, setBody] = React.useState(`Hello %client_name%. This is the email body. This is the email body. This is the email body. This is the email body. This is the email body.`)
    const href = `mailto:someemail@blah.com?subject=${subject}&body=${body}`

    const addField = () => {

        const newFields = [
            ...settings.fields,
            {
                id: uuidv4(),
                name: 'New Field',
                match: '%new_match%'
            }
        ]

        const newSettings = {
            ...settings,
            fields: newFields
        }

        localStorage.setItem('ELFIN-SETTINGS', JSON.stringify(newSettings))
        setSettings(newSettings)
    }

    const deleteField = (id) => {
        const newSettings = {
            ...settings,
            fields: settings.fields.filter(f => f.id !== id)
        }

        localStorage.setItem('ELFIN-SETTINGS', JSON.stringify(newSettings))
        setSettings(newSettings)
    }

    const updateField = (field) => {
        const index = settings.fields.findIndex(f => f.id === field.id)
        let fields = [...settings.fields]
        if (index !== undefined) {
            fields[index] = field
        }

        const newSettings = {
            ...settings,
            fields
        }

        saveSettings(newSettings)
        setSettings(newSettings)
    }

    const updateSettings = (newSettings) => {
        saveSettings(newSettings)
        setSettings(newSettings)
    }

    const value = {
        addField,
        deleteField,
        updateField,
        settings,
        setSettings,
        updateSettings,
        view,
        setView
    }

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
}

export default GlobalContext