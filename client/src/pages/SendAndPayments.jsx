import sendAndPayments from "../css/sendAndPayments.css"
import delivery from "../../public/img/delivery.png"

export default function SendAndPayments() {
    return (
        <>
            <div data-aos="zoom-in-right" className="container">
                <span className="tittle">Доставка и оплата</span>

            </div>
            <div className="container">
                <div className="container-flex-column">
                    <div className="container-ques-descrip-image">
                        <div data-aos="zoom-in-right" className="container-ques-description">
                            <span className="tittle-question">Как происходит оплата?</span>
                            <p className="description-question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima consequuntur at doloremque, sequi ut perspiciatis cupiditate! Incidunt doloremque obcaecati ratione dignissimos ipsa saepe necessitatibus totam quis soluta? Numquam, quaerat!</p>
                        </div>
                        <div data-aos="zoom-in-left" className="image-container">
                            <img src={delivery} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container-flex-column">
                    <div data-aos="zoom-in-right" className="container-ques-descrip-image">
                        <div className="container-ques-description">
                            <span className="tittle-question">Cроки доставки?</span>
                            <p className="description-question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima consequuntur at doloremque, sequi ut perspiciatis cupiditate! Incidunt doloremque obcaecati ratione dignissimos ipsa saepe necessitatibus totam quis soluta? Numquam, quaerat!</p>
                        </div>
                        <div data-aos="zoom-in-left" className="image-container">
                            <img src={delivery} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container-flex-column">
                    <div data-aos="zoom-in-right" className="container-ques-descrip-image">
                        <div className="container-ques-description">
                            <span className="tittle-question">Как доставляют бьющиеся материалы?</span>
                            <p className="description-question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima consequuntur at doloremque, sequi ut perspiciatis cupiditate! Incidunt doloremque obcaecati ratione dignissimos ipsa saepe necessitatibus totam quis soluta? Numquam, quaerat!</p>
                        </div>
                        <div data-aos="zoom-in-left" className="image-container">
                            <img src={delivery} alt="" />

                        </div>
                    </div>
                </div>
                <div className="container-flex-column">
                    <div data-aos="zoom-in-right" className="container-ques-descrip-image">
                        <div className="container-ques-description">
                            <span className="tittle-question">Сколько стоит доставка габоритных грузов?</span>
                            <p className="description-question">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minima consequuntur at doloremque, sequi ut perspiciatis cupiditate! Incidunt doloremque obcaecati ratione dignissimos ipsa saepe necessitatibus totam quis soluta? Numquam, quaerat!</p>
                        </div>
                        <div data-aos="zoom-in-left" className="image-container">
                            <img src={delivery} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}