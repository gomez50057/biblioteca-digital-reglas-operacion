import React, { useState, useMemo, useRef } from "react";
import { MuuriComponent, AutoScroller, useData } from "muuri-react";
import { Demo, Documents, BackgroundHome, AboutUs, Select, Input, Switch, CardContent, Foouter } from "./components";
import { datosBibliotecaDigital, useFilter } from "./utils";
// import "../style.css";
import "./styleReglas.css";

import WOW from 'wow.js';
import 'animate.css/animate.min.css';

const wow = new WOW();
wow.init();

const AppReglas = () => {
  const [filter, setFilter] = useState({ name: "", type: "" });
  const [subcategory, setSubcategory] = useState("");
  const [sort, setSort] = useState({ value: "type", options: { descending: true } });

  const subcategoryOptions = {
    "secretaría de educación pública": datosBibliotecaDigital.subcategoryInexistente,
    "Secretaria de bienestar e inclusión social": datosBibliotecaDigital.subcategoryInexistente,
    "secretaría de cultura": datosBibliotecaDigital.subcategoryInexistente,
    "secretaría de contraloría": datosBibliotecaDigital.subcategoryInexistente,
  };

  const filterFunction = useFilter(filter.name, filter.type, subcategory);

  const handleCategoryChange = (e) => {
    const category = e.target.value.trim();  // ✅ Eliminar espacios en blanco
    console.log("Categoría seleccionada:", `"${category}"`); // Para verificar si quedan espacios
    setFilter(prev => ({ ...prev, type: category }));
    setSubcategory("");
  };
  
  
  
  

  const handleNameFilterChange = (e) => {
    setFilter({ ...filter, name: e.target.value });
    console.log("Filtro activo:", filter);

    setSubcategory("");
  };

  const handleClassificationChange = (newClassification) => {
    setSubcategory("");
    switch (newClassification.toLowerCase()) {
      case "ordenar por":
        setSort({ value: "type", options: { descending: true } });
        break;
      case "a-z":
        setSort({ value: "name", options: { descending: false } });
        break;
      case "año":
        setSort({ value: "año", options: { descending: true } });
        break;
      default:
        break;
    }
  };

  const children = useMemo(() =>
    datosBibliotecaDigital.cards.map(bookCard => (
      <BookCard key={bookCard.booksIndex} {...bookCard} />
    )), []);

  const scrollElemRef = useRef();

  return (
    <div>
      <BackgroundHome />
      <AboutUs />
      <Demo>
        <Documents>
          <Input onKeyUp={handleNameFilterChange} />
          <Select values={datosBibliotecaDigital.types} onChange={handleCategoryChange} icon="&#xE164;" />
          <Select values={["Subcategorías", ...(subcategoryOptions[filter.type] || [])]} onChange={(e) => setSubcategory(e.target.value)} icon="&#xe152;" />
          <Select values={["Ordenar Por", ...datosBibliotecaDigital.cardInfo]} onChange={(e) => handleClassificationChange(e.target.value)} icon="&#xe8d5;" />
        </Documents>
        <Switch ref={scrollElemRef}>
          <MuuriComponent
            dragFixed
            sort={sort.value}
            sortOptions={sort.options}
            filter={filterFunction}
            layoutDuration={300}
            layoutEasing={"ease-out"}
            dragAutoScroll={{
              sortDuringScroll: false,
              targets: [{ element: scrollElemRef, axis: AutoScroller.AXIS_Y }]
            }}
          >
            {children}
          </MuuriComponent>
        </Switch>
      </Demo>
      <Foouter />
    </div>
  );
};

const BookCard = (props) => {
  const { types, año, name, subcategory } = props;
  const type = `${types[0]} ${types[1] || ""}`;
  useData({ name, type, subcategory, año });
  return <CardContent {...props} />;
};

export default AppReglas;
