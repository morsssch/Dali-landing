import "./CinemaSection.scss";
import cinemaVideo from "../../assets/vid/cinema.mp4";

const CinemaSection = () => {
    return (
        <div className="cinema">
            <div className="cinema__wrapper">
                <div className="cinema__video">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                    >
                        <source src={cinemaVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="cinema__light"></div>

                <div className="cinema__text-container">
                    <h2 className="title">Кинематограф</h2>
                    <p className="text">
                        Сальвадор Дали, работая с Луисом Бунюэлем, создал
                        культовые фильмы «Андалузский пёс» и «Золотой век»,
                        которые стали важными произведениями сюрреализма в кино.
                        Его работы разрушали традиционное повествование и
                        использовали абсурдные образы
                    </p>
                    <p className="text">
                        Дали также сотрудничал с режиссерами, такими как Альфред
                        Хичкок, создавая сюрреалистические сцены. Его влияние
                        ощущается в работах режиссеров, таких как Дэвид Линч и
                        Тим Бёртон, продолжавших исследовать абсурд и сюрреализм
                        в кино
                    </p>
                </div>
            </div>
            <div className="cinema__projector"></div>
        </div>
    );
};

export default CinemaSection;
