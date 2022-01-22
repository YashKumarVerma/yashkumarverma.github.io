import React, { useState, useEffect } from "react"
import { HomeContextualCardGroup } from "./../../fundamental/cards/group"
import { NumericCard } from "./../../fundamental/cards/numeric"
import axios from "axios"
import { CONSTANTS } from "../../constants"

const StackOverflowFeatureBar = () => {
    const [data, setData] = useState({
        reputation: 8779,
        badge_counts: {
            bronze: 28,
            silver: 15,
            gold: 2,
        }
    })

    useEffect(() => {
        loadDataFromStackOverflowAPI()
    }, [])

    async function loadDataFromStackOverflowAPI() {
        const { data } = await axios.get(CONSTANTS.URL.STACK_OVERFLOW_USER_DETAILS);

        setData({
            reputation: data.items[0].reputation,
            badge_counts: {
                bronze: data.items[0].badge_counts.bronze,
                silver: data.items[0].badge_counts.silver,
                gold: data.items[0].badge_counts.gold,
            }
        })
    }

    return <HomeContextualCardGroup>
        <NumericCard text="Reputation" value={data.reputation} />
        <NumericCard text="Gold Badgess" value={data.badge_counts.gold} />
        <NumericCard text="Silver Badges" value={data.badge_counts.silver} />
        <NumericCard text="Bronze Badges" value={data.badge_counts.bronze} />
    </HomeContextualCardGroup>
}

export { StackOverflowFeatureBar }
