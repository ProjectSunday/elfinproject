import React from 'react'

import GlobalContext from '../../global-context.js'

import Field from './Field.jsx'

export default function FieldList() {
    const { settings } = React.useContext(GlobalContext)
    const { fields } = settings

    return fields.map((f, i) => <Field key={f.name} field={f} />)
}