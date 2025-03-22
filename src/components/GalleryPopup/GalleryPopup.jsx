import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import paintings from "../../assets/data/paintings.json";
import "./GalleryPopup.scss";

const images = import.meta.glob("../../assets/img/painting*.png", {
    eager: true,
});

const GalleryPopup = ({ paintingId, onClose }) => {
    const painting = paintings.find((p) => p.id === paintingId);

    return createPortal(
        <motion.div
            key={paintingId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="gallery-popup"
        >
            <div className="gallery-popup__content">
                <div className="gallery-popup__image-container">
                    <img
                        src={
                            images[`../../assets/img/${painting.painting}`]
                                ?.default
                        }
                        alt={painting.title}
                    />
                </div>
                <div className="gallery-popup__text-container">
                    <h2 className="title">{painting.title}</h2>
                    <p className="text">{painting.description}</p>
                </div>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </motion.div>,
        document.body
    );
};

export default GalleryPopup;
