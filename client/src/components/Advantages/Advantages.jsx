import advantages from"./advantages.css"
const url = "../../../public/img/like.svg"
export default function Advantages(){
    return(
        <div className="container display-block">
            <div  data-aos="zoom-out-right" className="tittle-section-advantages">
                НАШИ ПРЕИМУЩЕСТВА
            </div>
            <div className="collection-advantages">
                <Advantage
                    dataName={"fade-up-left"}
                    image={url}
                    tittle={"УДОБНАЯ ОПЛАТА"}
                    description={"оплата любым удобным вам способом"}/>
                <Advantage
                    dataName={"fade-up"}

                    image={url}
                    tittle={"БЫСТРАЯ ДОСТАВКА"}
                    description={"доставим в день заказа в пределах Витебска"}/>
                <Advantage
                    dataName={"fade-up-right"}

                    image={url}
                    tittle={"НИЗКИЕ ЦЕНЫ"}
                    description={"цены ниже рыночных на 25%"}/>
            </div>
        </div>
    )
}

function Advantage({image,tittle,description,dataName}){
    return(
        <div className="item-advantages"  data-aos={dataName}>
            <div className="icon-advantages">
                <img src={image} alt="" />
            </div>
            <div className="description-advantages">
                <span className="advantages-tittle">{tittle}</span>
                <span className="advantages-description">{description}</span>
            </div>
        </div>
    )
}