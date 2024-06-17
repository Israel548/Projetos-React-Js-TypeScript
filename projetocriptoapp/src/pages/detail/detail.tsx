import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { CoinProps } from "../home/home";
import styles from "./detail.module.css"

interface ResponseData{
    data: CoinProps
}

interface ErroData{
    error: string
}

type DataProps = ResponseData | ErroData

export function Detail(){
    const { cripto } = useParams();
    const navegate = useNavigate();
    const [coin, setCoin] = useState<CoinProps>();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCoin() {
            try{
                fetch(`https://api.coincap.io/v2/assets/${cripto}`)
                .then(response => response.json())
                .then((data: DataProps) => {

                    if("error" in data){
                        navegate("/")
                        return;
                    }

                    const coinsData = data.data

                    const price = Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                    })

                    const priceCompact = Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        notation: "compact"
                    })

                    const resultData = {
                        ...coinsData,
                        formatedPrice: price.format(Number(coinsData.priceUsd)),
                        formatedMarket: priceCompact.format(Number(coinsData.marketCapUsd)),
                        formatedVolume: priceCompact.format(Number(coinsData.volumeUsd24Hr))
                    }

                    setCoin(resultData)
                    setLoading(false)

                })
            
            }catch(err){
                alert(err);
                console.log(err);
                navegate("/")
            }
        }
        getCoin();
    }, [cripto])

    if(loading || !coin){
        return(
            <div className={styles.container}>
                <h4 className={styles.center}>Carregando detalhes...</h4>
            </div>
        )
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.center}>{coin?.name}</h1>
            <h1 className={styles.center}>{coin?.symbol}</h1>

            <section className={styles.content}>
                <img 
                    className={styles.logo} 
                    src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLocaleLowerCase()}@2x.png`} 
                    alt="Logo da moeda" 
                />

                <h1>{coin?.name} | {coin?.symbol}</h1>

                <p><strong>Preço: </strong>{coin?.formatedPrice}</p>
                <a><strong>Mercado: </strong>{coin?.formatedMarket}</a>
                <a><strong>Mercado: </strong>{coin?.formatedVolume}</a>
                <a><strong>Mercado: </strong>
                    <span className={Number(coin?.changePercent24Hr) > 0 ? styles.profit : styles.loss}>{Number(coin?.changePercent24Hr).toFixed(3)}</span>
                </a>
            </section>
        </div>
    )
}