import { SecretType, VenlyConnect, Wallet } from "@venly/connect";
import { useState } from "react";
import FunctionCard from "./components/FunctionCard";

type FunctionProps = {
    venlyConnect: VenlyConnect;
}

export default function Functions({venlyConnect}: FunctionProps) {
    const [accountRes, setAccountRes] = useState<{ name: any; email: any; wallet: Wallet; }>()

    async function getAccount() {
        // get Account for Polygon / Matic
        venlyConnect.flows.getAccount(SecretType.MATIC).then((res) => {
            console.log("res", res)
            if(res.isAuthenticated) {
                // @ts-ignore because email / name etc.. does not exist on idTokenParsed, but it is always there. Venly is using it the same way in there plain js demo
                const email = res.auth.idTokenParsed?.email
                // @ts-ignore
                const name = res.auth.idTokenParsed?.name
                // only using the first/favorite wallet, you can manage other wallets with another function
                const wallet = res.wallets[0]
                const obj = {'name': name, 'email': email, 'wallet': wallet}
                setAccountRes(obj)
            }
        })
    }

    return (
        <div>
            <h2 className="text-center text-xl">Example Functions</h2>
            <div className="flex mx-auto mt-4">
                <FunctionCard title={"Get Account for one Chain"} button={"Get Account"} func={getAccount} result={accountRes}/>
            </div>
        </div>
    )
}
