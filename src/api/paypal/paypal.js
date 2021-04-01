import { ApiStripe } from "../../../const";

export const PayStripe = async (tokenId, amount) => {

    const data = { tokenId, amount };

    try {

        const res = await fetch(`http://192.168.0.5:3001/api/Payment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        return await res.json();

    } catch (error) {
        console.log("Error: " + error);
    }

}