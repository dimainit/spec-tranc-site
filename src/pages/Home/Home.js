import { Hero } from "../../components/Hero"
import { WhyUs } from "../../components/main/WhyUs"
import { Materials } from "../../components/main/Materials"
import { About } from "../../components/main/About"
import { Questions } from "../../components/main/Questions"
import { Delivery } from "../../components/main/Delivery"


export const Home = () => {
    return `
    ${Hero()}
    ${WhyUs()}
    ${Materials()}
    ${About()}
    ${Questions()}
    ${Delivery()}
    `;
}