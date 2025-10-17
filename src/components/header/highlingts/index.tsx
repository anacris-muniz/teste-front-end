import { FC, ReactNode, SVGProps } from "react"
import { CreditCardIcon } from "../../../assets/icons/credit-card"
import { ShieldCheckIcon } from "../../../assets/icons/shield-check"
import { TruckIcon } from "../../../assets/icons/truck"
import "./style.scss"

type Highlight = {
    id: string
    Icon: FC<SVGProps<SVGSVGElement>>
    text: ReactNode
}

function HighlingtsComponent() {
    const items: Highlight[] = [
        {
            id: 'secure',
            Icon: ShieldCheckIcon,
            text: (
                <span>
                    Compra <strong>100% segura</strong>
                </span>
            ),
        },
        {
            id: 'shipping',
            Icon: TruckIcon,
            text: (
                <span>
                    <strong>Frete grátis</strong> acima de R$ 200
                </span>
            ),
        },
        {
            id: 'installments',
            Icon: CreditCardIcon,
            text: (
                <span>
                    <strong>Parcele</strong> suas compras
                </span>
            ),
        },
    ]

    return (
        <section className="highlingts-container" aria-label="Destaques">
            <ul className="highlingts-list">
                {items.map(({ id, Icon, text }) => (
                    <li key={id} className="highlingts-item">
                        <Icon className="icons" aria-hidden="true" />
                        <p className="highlingts-text">{text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default HighlingtsComponent