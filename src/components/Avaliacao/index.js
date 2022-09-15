import { Evaluation, Stars, NumberStar } from "./styles";
import Star from '../../assets/Icons/star.png';

export function Avaliacao() {
    return (
        <Evaluation>
            <Stars>
                <li>
                    <img src={Star} alt="Estrela"/>
                </li>
                <li>
                    <img src={Star} alt="Estrela"/>
                </li>
                <li>
                    <img src={Star} alt="Estrela"/>
                </li>
                <li>
                    <img src={Star} alt="Estrela"/>
                </li>
                <li>
                    <img src={Star} alt="Estrela"/>
                </li>
            </Stars>
            <NumberStar>5.0 (30 REVIEWS)</NumberStar>
        </Evaluation>
    )
}

