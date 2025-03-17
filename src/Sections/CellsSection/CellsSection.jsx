import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./CellsSection.scss";
import young_salvador from "../../assets/img/young_salvador.png";
import cell1 from "../../assets/img/cell1.png";
import cell2 from "../../assets/img/cell2.png";
import cell3 from "../../assets/img/cell3.png";

const initialCells = [
    { src: cell1, parallaxDepth: 4, x: -700, y: -400 },
    { src: cell1, parallaxDepth: 4, x: 450, y: 50 },
    { src: cell2, parallaxDepth: 5, x: -600, y: 120 },
    { src: cell2, parallaxDepth: 5, x: 100, y: 5 },
    { src: cell3, parallaxDepth: 6, x: -300, y: -285 },
    { src: cell3, parallaxDepth: 6, x: 300, y: -400 },
  ];
  
  

const CellsSection = () => {
    return (
        <ParallaxProvider>
            <div className="cells">
                <div className="cells__content-wrapper">
                    <div className="image-wrapper">
                        <img src={young_salvador} alt="young_salvador" />
                    </div>
                    <div className="cells__text-container">
                        <p className="text">
                            После отчисления из академии Сальвадор Дали
                            почувствовал себя так, будто с него сняли оковы,
                            освободив от давления традиционных правил и критики
                            преподавателей. Это стало для него моментом выхода
                            из клетки ограничений, в которой он находился, и
                            позволило сосредоточиться на своих необычных идеях.
                            Он начал активно исследовать сюрреализм,
                            вдохновляясь снами, подсознанием и нелогичными
                            связями образов. Освобождение от академической
                            системы дало ему возможность экспериментировать с
                            необычными композициями и символами, которые позже
                            стали его визитной карточкой, полностью раскрывая
                            его внутренний мир.
                        </p>
                    </div>
                </div>

                <div className="cells__background-wrapper">
                    <div className="cells__background-container">
                        {initialCells.map((cell, index) => (
                            <Parallax
                                key={index}
                                speed={-cell.parallaxDepth}
                                className="cells_item"
                            >
                                <img
                                    src={cell.src}
                                    alt="cell"
                                    style={{
                                        position: "absolute",
                                        transform: `translate(${cell.x}px, ${cell.y}px)`,
                                    }}
                                />
                            </Parallax>
                        ))}
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default CellsSection;
