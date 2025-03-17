import "./GallerySection.scss";
import paintings from "../../assets/data/paintings.json";

const images = import.meta.glob("../../assets/img/thumbnail*.png", {
    eager: true,
});

const GallerySection = () => {
    return (
        <div className="gallery" id="gallery">
            <div className="gallery__text-container">
                <h2 className="title">Театр творчества</h2>
                <div className="gallery__p-container">
                    <p className="text">
                        Эта галерея является одним из крупнейших собраний его
                        работ и важным культурным объектом, посвященным жизни и
                        творчеству Сальвадора Дали. Она включает в себя
                        различные выставки, посвященные сюрреалистическому и
                        эксцентричному искусству мастера, а также элементы,
                        связанные с его личной жизнью и философией
                    </p>
                    <p className="text">
                        Дали прославился своими необычными картинами, такими как
                        "Постоянство памяти" с растянутыми часами, а также
                        работами в кино, скульптуре и литературе. Он оставил
                        огромное наследие в искусстве, став иконой XX века,
                        известной своим эксцентричным образом жизни, сильным
                        личным стилем и постоянным поиском новых форм выражения
                    </p>
                </div>
            </div>
            <div className="gallery__paintings-container">
                {paintings.map((painting) => {
                    const imagePath = `../../assets/img/${painting.thumbnail}`;
                    const imageSrc = images[imagePath]?.default;

                    return (
                        <div className={painting.className} key={painting.id}>
                            <img src={imageSrc} alt={painting.title} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GallerySection;
