import { SecretType, VenlyConnect, Wallet } from "@venly/connect";
import { Account } from "@venly/connect/dist/src/models/Account";
import { useState } from "react";
import FunctionCard from "./components/FunctionCard";

type FunctionProps = {
    venlyConnect: VenlyConnect;
}

export default function Functions({venlyConnect}: FunctionProps) {
    const [accountRes, setAccountRes] = useState<Account>()

    async function getAccount() {
        // get Account for Polygon / Matic
        venlyConnect.flows.getAccount(SecretType.MATIC).then((res) => {
            if(res.isAuthenticated) {
                setAccountRes(res)
            }
        })
    }

    return (
        <div>
            <h2 className="text-center text-xl">Example Functions</h2>
            <div className="grid grid-cols-2 mt-4 gap-4 w-full">
                <FunctionCard title={"Get Account for one Chain"} button={"Get Account"} func={getAccount} result={accountRes}/>
                <FunctionCard title={"Get Account for one Chain"} button={"Get Account"} func={getAccount} result={accountRes}/>
                <FunctionCard title={"Get Account for one Chain"} button={"Get Account"} func={getAccount} result={accountRes}/>
                <FunctionCard title={"Get Account for one Chain"} button={"Get Account"} func={getAccount} result={accountRes}/>
                <FunctionCard title={"Get Account for one Chain"} button={"Get Account"} func={getAccount} result={accountRes}/>
            </div>
        </div>
    )
}
