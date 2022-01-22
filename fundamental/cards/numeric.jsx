import React from "react"
import { CONSTANTS } from "../../constants"

const styles = {
    cardContainer: {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        border: `1px solid ${CONSTANTS.THEME.COLOR.PRIMARY}`,
        margin: '16px',
        borderRadius: '12px',
    },
    value: {
        fontSize: '36px',
        fontStyle: "bold",
    },
    text: {
        fontSize: '12px',
        fontStyle: 'italic',
    }
}

const NumericCard = ({ value, text }) => {
    return (
        <div style={styles.cardContainer}>
            <div style={styles.value}>{value}</div>
            <div style={styles.text}>{text}</div>
        </div>
    )
}

export { NumericCard }
